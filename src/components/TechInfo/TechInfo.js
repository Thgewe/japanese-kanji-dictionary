import React from 'react';
import cl from './techInfo.module.scss';
import KanjiCharacter from "../KanjiCharacter/KanjiCharacter";
import InfoLine from "../InfoLine/InfoLine";

const TechInfo = ({kanji, jlpt, heising = '-', grade, strokeCount, unicode}) => {
    return (
        <div className={cl.info}>
            <div className={cl.left}>
                <KanjiCharacter
                    main={true}
                    desired={true}
                    value={kanji}
                />
            </div>
            <div className={cl.right}>
                <InfoLine left={'Grade'} right={grade} key={'grade'}/>
                <InfoLine left={'JLPT'} right={jlpt} key={'jlpt'}/>
                <InfoLine left={'Strokes'} right={strokeCount} key={'strokes'}/>
                <InfoLine left={'Unicode'} right={unicode} key={'unicode'}/>
                <InfoLine left={'Heising'} right={heising} key={'heising'}/>
            </div>
        </div>
    );
};

export default TechInfo;