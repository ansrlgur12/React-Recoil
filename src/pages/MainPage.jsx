import React from 'react';
import TextInput from '../components/TextInput';
import CharacterCount from '../components/CharacterCount';
import InputContents from '../components/InputContents';

const MainPage = () => {
    return (
        <div>
            <TextInput />
            <CharacterCount />
            <InputContents />
        </div>
    );
};

export default MainPage;