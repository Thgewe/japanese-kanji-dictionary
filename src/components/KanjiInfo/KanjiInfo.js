import React from 'react';
import cl from './kanjiInfo.module.scss';
import InfoLine from "../InfoLine/InfoLine";
import Reading from "../Reading/Reading";

const KanjiInfo = ({kun, on, nanori, meanings}) => {

    const kunReadings = kun?.map(reading => <Reading type={'kun'} text={reading} key={reading}/>),
          onReadings = on?.map(reading => <Reading type={'on'} text={reading} key={reading}/>),
          nanoriReadings = nanori?.map(reading => <Reading type={'nanori'} text={reading} key={reading}/>),
          meaningsReadings = meanings?.map(reading => <Reading type={'meanings'} text={reading} key={reading}/>)

    kunReadings?.length === 0 && kunReadings.push(<Reading text={'—'} key={'f'}/>)
    onReadings?.length === 0 && onReadings.push(<Reading text={'—'} key={'f'}/>)
    nanoriReadings?.length === 0 && nanoriReadings.push(<Reading text={'—'} key={'f'}/>)
    meaningsReadings?.length === 0 && meaningsReadings.push(<Reading text={'—'} key={'f'}/>)

    return (
        <div className={cl.info}>
            <InfoLine
                left={'Kun'}
                right={kunReadings}
            />
            <InfoLine
                left={'On'}
                right={onReadings}
            />
            <InfoLine
                left={'Nanori'}
                right={nanoriReadings}
            />
            <InfoLine
                left={'Meanings'}
                right={meaningsReadings}
            />
        </div>
    );
};

export default KanjiInfo;