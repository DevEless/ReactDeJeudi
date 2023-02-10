import React, {useState} from "react";
const TresDouList = (props) => {
    let [inputValue, setInputValue] = useState("");
    let [tasks, setTasks] = useState([]);

    const handleChange = (event) => {
    setInputValue(event.target.value);
    };

    const handleClick = () => {
    setTasks([...tasks, inputValue]);
    setInputValue("");
    };

    return (
    <div>
        <input type="text" value={inputValue} onChange={handleChange} />
        <button type="button" onClick={handleClick}>
        Ajouter
        </button>

        <ul>
        {tasks.map((task, index) => (
            <li key={index}>{task}</li>
        ))}
        </ul>
    </div>
    );
};

export default TresDouList;

