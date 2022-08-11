import React, { useEffect, useRef, useState } from 'react';

import { useFormik } from 'formik';
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux';


import { addDate, editDate } from '../../Redux/Actions/citasAction';
import { fileUpload } from '../../helpers/fileUpload';

const Form = ({ edit }) => {
    const [cita, setCita] = useState()

    const addBtn = useRef();
    const editBtn = useRef();

    const dispatch = useDispatch();
    const citas = useSelector( state => state.citas )
    
    useEffect(() => {
        const date = citas.find( (cita) => cita.email === edit )
        setCita( date )
        if (edit ) {
            addBtn.current.classList.add('btn-disabled')
            editBtn.current.classList.remove('btn-disabled')
        }else{
            addBtn.current.classList.remove('btn-disabled')
            editBtn.current.classList.add('btn-disabled')
        }
    }, [edit])


    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            date: '',
            phone: '',
            symptoms: '',
            image: ''
        },
        onSubmit: ( data ) => {
            if (edit) {
                dispatch( editDate( data, edit ) )
            }else {
                dispatch(addDate( data ))
            }
        },
        validationSchema: Yup.object({
            name: Yup.string().required(),
            email: Yup.string().email().required(),
            date: Yup.date().required(),
            phone: Yup.number().required(),
            symptoms: Yup.string().required()
        })
    })

    const handleUploadImg = ({ target }) => {
        fileUpload(target.files[0])
        .then( resp => formik.values.image = resp )
    }

  return (
    <form className="form-control w-full m-auto max-w-xs p-7" onSubmit={formik.handleSubmit} >
        <h1 className='text-2xl text-center my-5'>Schedule an appointment</h1>
        <label className="label">
            <span className="label-text">What is your name?</span>
        </label>
        <input type="text" name='name' onChange={formik.handleChange} placeholder="Name" className="input input-bordered input-accent w-full max-w-xs" defaultValue={cita?.name} />

        <label className="label">
            <span className="label-text">What is your email?</span>
        </label>
        <input type="email" name='email' onChange={formik.handleChange} placeholder="Email" className="input input-bordered input-accent w-full max-w-xs" defaultValue={cita?.email} />

        <label className="label">
            <span className="label-text">Date?</span>
        </label>
        <input type="date" name='date' onChange={formik.handleChange} placeholder="Date" className="input input-bordered input-accent w-full max-w-xs" defaultValue={cita?.date} />

        <label className="label">
            <span className="label-text">What is your phone?</span>
        </label>
        <input type="tel" name='phone' onChange={formik.handleChange} placeholder="Phone" className="input input-bordered input-accent w-full max-w-xs" defaultValue={cita?.phone} />

        <label className="label">
            <span className="label-text">What is your Symptoms?</span>
        </label>
        <textarea className="textarea textarea-accent" onChange={formik.handleChange} name='symptoms' placeholder="Symptoms" defaultValue={cita?.symptoms}></textarea>

        {/* Input para agregar una imagen */}
        <label className="label">
            <span className="label-text">Upload image</span>
        </label>
        <input type="file" name='image' onChange={handleUploadImg} accept="image/*" defaultValue={cita?.image} />

        <div className="divider"></div>
        <button ref={addBtn} type='submit' className="btn btn-primary btn-success">Add</button>
        <div className="divider"></div>
        <button ref={editBtn} type='submit' className="btn btn-primary btn-warning ">Save</button>
    </form>
  )
}

export default Form