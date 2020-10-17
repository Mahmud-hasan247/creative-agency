import React, { useState } from 'react';
import './AddService.css';
import { useHistory } from 'react-router-dom';

const AddService = () => {

    const [file, setFile] = useState(null);
    const [info, setInfo] = useState({});

    const onBlur = (e) => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo)
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const history = useHistory()

    const handleSubmit = () => {
        const formData = new FormData()
        formData.append('file', file);
        formData.append('title', info.title);
        formData.append('description', info.description);

        fetch('https://blooming-journey-06571.herokuapp.com/addService', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                // history.push('/')
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div className='dashboardBackground' >
            <form onSubmit={handleSubmit} className='pt-5 pl-5'>
                <input className='pl-3' onBlur={onBlur} name='title' placeholder='Title' className='service-input' type="text" />
                <input onChange={handleFileChange} name='image' className='pl-5 service-input' type="file" /><br /> <br />
                <input className='pl-3' onBlur={onBlur} name='description' placeholder='Description' className='service-input' type="text" />
                <input className='btn ml-5 btn-success my-font my-button' type="submit" value='Submit' />
            </form>
        </div >
    );
};

export default AddService;