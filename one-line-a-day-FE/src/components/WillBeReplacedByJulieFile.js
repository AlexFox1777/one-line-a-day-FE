import React, {useState, useEffect} from 'react';
import {axiosWithAuth} from '../auth/axiosWithAuth';


export default function WillBeReplacedByJulieFile(props) {
    const [entry, setEntry] = useState("");

    useEffect(() => {
        const id = props.match.params.entryId;
        console.log("id of entry - ", id);
        axiosWithAuth()
            .get(`https://one-line-daily.herokuapp.com/api/entries/${id}`)
            .then(response => {
                setEntry(response.data.data)
            })
            .catch(error => console.log(error))
    }, []);
    console.log("entry - ", entry);
    return (
        <div>
            <h1>SASHA FOX</h1>
            <h2>{entry.title}</h2>
            <h2>{entry.text}</h2>
        </div>
    )
}