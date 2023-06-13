import React from 'react';
import { useSelector } from 'react-redux'
import TaskItem from '../TaskItem/TaskItem';


const Tasks = () => {
    const tasks = useSelector((state: any) => state.tasks.value)

    return (<div>
        {tasks.map((task: any, index: number) => <TaskItem key={index}
        index={index}
        {...task}/> )}
        
    </div>);
}

export default Tasks;