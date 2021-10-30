import React from 'react'
import './Form.css'
import {CgProfile } from 'react-icons/cg'
import {FiMail} from 'react-icons/fi'
import {AiOutlineLock} from 'react-icons/ai'
import Input from "./Input"
import FieldValidator from './FieldValidator'

const Form = () => {
    return (
        <form>
            <div className="formControl f1">
                <label htmlFor="name">Name</label>
                <FieldValidator
                    render={(valid, checkValidity, color) => (
                        <Input
                        type='text'
                        change={checkValidity}
                        color={color}
                        message="Username cannot be blank"
                        valid={valid}
                        />
                        
                    )}
                 />
                
                <CgProfile/>
            </div>
            <div className="formControl f2">
                <label htmlFor="email">Email</label>
                <FieldValidator
                render={(valid, checkValidity, color) => (
                    <Input
                     type='text'
                     change={checkValidity}
                     color={color}
                     message="Email cannot be blank"
                     valid={valid}
                     />
                )}
                />
                <FiMail/>
            </div>
            <div className="formControl f3">
                <label htmlFor="password">Password</label>
                <FieldValidator
                render={(valid, checkValidity, color) => (
                    <Input
                     type='password'
                     change={checkValidity}
                     color={color}
                     message="Password cannot be blank"
                     valid={valid}
                     />
                )}
             />
                <AiOutlineLock />
            </div>
            <div className="formControl f4">
                <button>SUBMIT</button>
            </div>
        </form>
    )
}

export default Form
