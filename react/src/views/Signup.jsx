import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 

const onSubmit = (ev) => { ev.preventDefault(); }

export default function Signup () {
    return (
        <div className='login-signup-form animated fadeInDown'>
            <div className="form">
                <form onSubmit={onSubmit}>
                    <h1 className="title">Signup for Free</h1>
                    <input type="text"  placeholder='Full Name'/>
                    <input type="email"  placeholder='Email'/>
                    <input type="password" placeholder='Password' />
                    <input type="password" placeholder='Password Confirmation' />
                    <button className="btn btn-block">Signup</button>
                    <p className="message">Already Registered? <Link to="/login">Sign in</Link></p>
                </form>
            </div>
        </div>
    )
}