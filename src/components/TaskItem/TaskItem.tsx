import * as React from 'react';
import './TaskItem.css';
import { MdDone } from 'react-icons/md';
import { FiDelete } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { stateToggle, deleteTask } from '../../redux/slices/taskSlice'


const TaskItem = ({ index, content, done}: any) => {
    const dispatch = useDispatch();

    function isDone() {
        dispatch(stateToggle(index));
    }

    return (
    <div className='task__item'>
        <button
        className='task__item-state'
        onClick={isDone}>
            {done ? <MdDone/> : ''}
        </button>
        <p className={done ? 'task__item-done' : ''}>{content}</p>
        <span className='btn__delete' onClick={() => dispatch(deleteTask(index))}><FiDelete/></span>

    </div>
    );
}

export default TaskItem;