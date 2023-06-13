import React, { useRef } from 'react';
import './CreateTaskForm.css';
import { AiOutlinePlusSquare } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { create } from '../../redux/slices/taskSlice'

const CreateTaskForm = () => {
    const dispatch = useDispatch();
    let inputRef = useRef(null);

    function btnHandler(e) {
        e.preventDefault();        
        if ((inputRef.current as any).value !== '') {
            dispatch(create({
                done: false,
                content: (inputRef.current as any).value
            }));
            (inputRef.current as any).value = '';
        }
    }

    return (
    <form className='form'>
        <input
        className='form__input'
        type="text"
        placeholder='LETS GO!'
        ref={inputRef}/>
        <button className='form__btn' type='submit'
        onClick={(e) => btnHandler(e)}><AiOutlinePlusSquare /></button>
    </form>
    );
}

export default CreateTaskForm;