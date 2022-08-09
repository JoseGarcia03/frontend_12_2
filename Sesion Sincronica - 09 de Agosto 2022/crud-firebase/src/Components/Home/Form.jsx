import React from 'react'

const Form = () => {
  return (
    <div className="form-control w-full m-auto max-w-xs p-7">
        <h1 className='text-2xl text-center my-5'>Schedule an appointment</h1>
        <label className="label">
            <span className="label-text">What is your name?</span>
        </label>
        <input type="text" placeholder="Name" className="input input-bordered input-accent w-full max-w-xs" />

        <label className="label">
            <span className="label-text">What is your email?</span>
        </label>
        <input type="email" placeholder="Email" className="input input-bordered input-accent w-full max-w-xs" />

        <label className="label">
            <span className="label-text">Date?</span>
        </label>
        <input type="date" placeholder="Date" className="input input-bordered input-accent w-full max-w-xs" />

        <label className="label">
            <span className="label-text">What is your phone?</span>
        </label>
        <input type="tel" placeholder="Phone" className="input input-bordered input-accent w-full max-w-xs" />

        <label className="label">
            <span className="label-text">What is your Symptoms?</span>
        </label>
        <textarea className="textarea textarea-accent" placeholder="Symptoms"></textarea>
        <div className="divider"></div>
        <button className="btn btn-primary btn-success">Add</button>
        <div className="divider"></div>
        <button className="btn btn-primary btn-warning btn-disabled">Save</button>
    </div>
  )
}

export default Form