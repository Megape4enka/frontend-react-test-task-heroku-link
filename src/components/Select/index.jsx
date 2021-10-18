import React, {useEffect, useState} from 'react';
import classes from './Select.module.css'
import axios from "axios";

const Select = ({select, setSelect}) => {
    const [breed, setBreed] = useState([])

    async function fetchSelect() {
        const response = await axios({
            url: 'https://backend-test-task.herokuapp.com/select-dogs',
            method: 'GET'
        })
        setBreed(response.data.dogs)
    }

    function selectHandler (e) {
        setSelect(e.target.value)
    }

    useEffect(() => {
        fetchSelect()
    }, [])


    return (
        <div className={classes.container}>
            <b>Сортировка по породе: </b>
            <select

                value={select}
                className={classes.select}
                onChange={event => selectHandler(event)}
            >
                <option value="Nothing">All breeds</option>
                {breed.map(option =>
                    <option className={classes.option} key={option}>
                        {option}
                    </option>
                )}
            </select>
        </div>
    );
};

export default Select;