import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';


const Edit = () => {
    const { taskId } = useParams();
    const { register, handleSubmit } = useForm();
    const [task, setTask] = useState({});
    const { title, details } = task
    useEffect(() => {
        const url = `https://fathomless-ocean-28808.herokuapp.com/task/${taskId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTask(data));

    }, [])

    const updateTask = event => {
        event.preventDefault()

        const title = event.target.title.value;
        fetch(`https://fathomless-ocean-28808.herokuapp.com/task/${taskId}`, {
            method: 'PUT',
            headers: { 'content-Type': 'application/json' },

            body: JSON.stringify({ title })

        }).then(res => res.json())
            .then((data) => {
                console.log(data)
            })
    }
    return (
        <div>
            <div>

                <h1 className='font-serif text-center text-xl my-3 underline underline-offset-4 '>Update Your To-Do</h1>

                <form className='flex flex-col w-6/12 mx-auto   space-y-3'>
                    <input className='border border-dark p-2 rounded w-7/12 mx-auto' placeholder='Title' defaultValue={task.title} {...register("title", { required: true, maxLength: 20 })} />
                    <textarea className='border border-dark p-2 rounded w-7/12 mx-auto' placeholder='Details' defaultValue={task.details}  {...register("details", { required: true })} />

                    <button onClick={updateTask} className=' btn btn-primary bg-blue-500 w-25 mx-auto' > Update</button>
                </form>


            </div>
        </div>
    );
};

export default Edit;