import React from 'react'
import './Button.css'
const Button = ({text, backgroundColor, children}) => {
    return (
        <button style={{backgroundColor:backgroundColor}}>
            {children} {text}
        </button>
    )
}

export default Button
