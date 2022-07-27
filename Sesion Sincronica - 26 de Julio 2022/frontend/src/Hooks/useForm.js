import { useState } from "react";

const useForm = ( initialState = null ) => {

    const [values, setValues] = useState(initialState);

    const handleInputChange = ({ target }) => {
        setValues({
            ...values,
            [target.name]: target.value
        })
    }

    const handleInputSubmit = ( event ) => {
        event.preventDefault();
        setValues({
            ...values,
            [event.target[0].name]: event.target[0].value
        })
    }
    

    const reset = () => {
        setValues( initialState )
    }

    return [ values, handleInputChange, handleInputSubmit,  reset ]

}

export default useForm;