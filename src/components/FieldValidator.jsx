import React, { useState} from 'react'

const FieldValidator = ({render}) => {

    const [valid, setValid] = useState(true)
    const [color, setColor] = useState('')

    const checkValidity = (e) => {
        if(e.target.value.length > 0){
            setValid(true)
            setColor('green')
        } 
        if(e.target.value.length === 0){
            setValid(false)
            setColor("red")
        } 
    }

    return (
       render(valid, checkValidity, color)
    )
}

export default FieldValidator
