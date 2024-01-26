import React from 'react';
import TextInput from '../components/TextInput';
import CharacterCount from '../components/CharacterCount';
import InputContents from '../components/InputContents';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {

    const nav = useNavigate();
    return (
        <div>
            <TextInput />
            <CharacterCount />
            <InputContents />
            <br />
            <button onClick={()=>nav("todo")}>TodoList</button>
        </div>
    );
};

export default MainPage;