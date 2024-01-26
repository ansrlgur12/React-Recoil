import React from 'react';
import { useRecoilValue } from 'recoil';
import { charCountState } from '../utils/Rc';

const CharacterCount = () => {

    const count = useRecoilValue(charCountState);

    return (
        <div>
            Character Count: {count}
        </div>
    );
};

export default CharacterCount;