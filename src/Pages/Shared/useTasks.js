import { useEffect, useState } from "react"

const useTasks = () => {
    const [tasks, setTasks] = useState([])
    useEffect(() => {

        fetch("https://fathomless-ocean-28808.herokuapp.com/task")
            .then(res => res.json())
            .then(data => setTasks(data))

    }, [])
    return [tasks, setTasks]
}

export default useTasks;