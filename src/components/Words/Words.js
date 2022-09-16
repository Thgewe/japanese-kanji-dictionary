import React, {useEffect, useState} from 'react';
import cl from './words.module.scss';
import KanjiWord from "../KanjiWord/KanjiWord";
import {useFetch} from "../../hooks/useFetch";
import KanjiService from "../../API/KanjiService";
import Loader from "../Loader/Loader";
import Meaning from "../Meaning/Meaning";
import KanaWord from "../KanaWord/KanaWord";
import WordLine from "../WordLine/WordLine";
import CustomButton from "../UI/CustomButton/CustomButton";
import uniqid from 'uniqid';

const Words = ({kanji}) => {

    const [words, setWords] = useState([]);
    const [wordsLimited, setWordsLimited] = useState([]);
    const [btnClass, setBtnClass] = useState(cl.more);

    const [fetching, loading] = useFetch(async () => {
        const res = await KanjiService.getWordsWithKanji(kanji)
        setWords(res.sort((a, b) => a.variants[0].written.split('').length - b.variants[0].written.split('').length))
        setWordsLimited([...increaseLimit(res)])
    })

    useEffect(() => {
        fetching()
    }, [])

    const increaseLimit = (items) => {
        if (items.length <= wordsLimited.length) return []

        const limited = [];
        let i = wordsLimited.length;
        let limit = 20

        if (items.length < 20) {
            setBtnClass(cl.more + ' ' + cl.hide)
            limit = items.length
        }


        while(i < wordsLimited.length + limit) {
            limited.push(items[i])
            i++;
        }
        return limited
    }

    const onAddMore = () => {
        setWordsLimited([...wordsLimited, ...increaseLimit(words)])
        if (words.length <= wordsLimited.length)
            setBtnClass(cl.more + ' ' + cl.hide)
    }

    if (loading)
        return <Loader />

    const wordsLimitedJSX = wordsLimited.map((word, i) => {
        const variants = word?.variants.map((variant) => <KanjiWord word={variant.written} key={uniqid()}/>)
        const meanings = word?.meanings.map((meaning, i) => <Meaning meaning={i + 1 + '. ' + meaning.glosses.join(', ')} key={uniqid()}/>)
        return <WordLine key={uniqid()} left={variants} right={
                    <>
                        <KanaWord word={word?.variants[0].pronounced}/>
                        {meanings}
                    </>}
            />
    })

    return (
        <div className={cl.words}>
            {wordsLimitedJSX}
            <div className={btnClass}>
                <CustomButton onClick={onAddMore}>more</CustomButton>
            </div>
        </div>
    );
};

export default Words;