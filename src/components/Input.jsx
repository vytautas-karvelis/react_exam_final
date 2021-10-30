import React from 'react'

const Input = ({type, color, change, message, valid}) => {
    return (
        <React.Fragment>
            <input type={type} style={{borderColor:color}} onChange={(e)=>change(e)}>            
            </input>
            <p style={{display: valid ? "none":"block", color:"red"}}>{message}</p>
        </React.Fragment>
      

    )
}

export default Input