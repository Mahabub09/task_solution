import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const Edit = () => {
    const { taskId } = useParams();
    const [task, setTask] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/task/${taskId}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setTask(data));

    }, [])
    return (
        <div>{task.title}

        </div>
    );
};

export default Edit;