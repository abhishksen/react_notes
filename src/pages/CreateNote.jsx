import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import {v4 as uuid} from 'uuid';
import useCreateDate from '../components/useCreateDate';

const CreateNote = ({setNotes}) => {

    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('')
    const date = useCreateDate();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if(title && details){
            const note = {id: uuid(), title, details, date}
            // adding the notes the note array
            setNotes(prevNotes => [note, ...prevNotes])
            // redirecting to the home page
            navigate('/')
        }else {
            alert('Please, insert note details!');
        }

    } 

    return (
        <section>
            <header className="create-note__header">
                <Link to='/' className='btn'><IoIosArrowBack /></Link>
                <button className="btn lg primary" onClick={handleSubmit}>Save</button>
            </header>
            <form className="create-note__form" onSubmit={handleSubmit}>
                <input type="text" placeholder='Enter Title' value={title} onChange={(e) => setTitle(e.target.value)} autoFocus />
                <textarea rows="25" placeholder='start typing your thoughts...' value={details} onChange={(e) => setDetails(e.target.value)} ></textarea>
            </form>
        </section>
    )
}

export default CreateNote
