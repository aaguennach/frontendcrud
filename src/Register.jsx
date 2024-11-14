import React, {useEffect, useState} from 'react'
import axios from 'axios'

const Register = () => {
    const [savedData, setRegisterData] = useState(
        {
            name :"",password:"", gender :"", hobbies : [], city :"Rabat"
        }
    )

    const [toggle, setToggle] = useState(false)

    const handleChange = (e) =>{
        const {name, type, value, checked} = e.target
        if(type == "text" || type == "radio" || name == "city"){
            setRegisterData((prev)=>({...prev, [name] : value}))
        } else if (type == "checkbox") {
            setRegisterData((prev) => ({...prev, hobbies : checked ? [...prev.hobbies, value ] : hobbies.filter((e)=> e !== value)}))
        }
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        setToggle(true)
    }

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(response => response.json())
        .then(json => console.log(json))
    }, [])

    return(
        <>
            <form onSubmit= {handleSubmit}>
                <div className="container">
                    <label htmlFor="">Nom :</label>
                    <input type="text" name="name" value={savedData.name} onChange={handleChange} />
                </div>
                <div className="container">
                    <label htmlFor="">Password :</label>
                    <input type="text" name="password" value={savedData.password} onChange={handleChange} />
                </div>
                <div className="container">
                    <label htmlFor="">Gender :</label>
                    <input type="radio" name="gender" value="M" checked={savedData.gender == "M"} onChange={handleChange} id="" />
                    <input type="radio" name="gender" value="F" checked={savedData.gender == "F"} onChange={handleChange} id="" />
                </div>
                <div className="container">
                    <select name="city" onChange={handleChange} id="">
                        <option value="rabat">Rabat</option>
                        <option value="casa">Casa</option>
                    </select>
                </div>
                <div className="container">
                    <input type="checkbox" name="hobbies" value="sports" onChange={handleChange} checked={savedData.hobbies.includes('sports')} id="" />
                    <input type="checkbox" name="hobbies" value="reading" onChange={handleChange} checked={savedData.hobbies.includes('reading')} id="" />
                    <input type="checkbox" name="hobbies" value="drawing" onChange={handleChange} checked={savedData.hobbies.includes('drawing')} id="" />
                </div>
                <input type="submit" value="submit" />
            </form>

            {toggle && <pre>
                                <p>{savedData.name}</p>
                                <p>{savedData.password}</p>
                                <p>{savedData.gender}</p>
                                <p>{savedData.hobbies.join("")}</p>
                                <p>{savedData.city}</p>
                            </pre>}
        </>
    )
}

export default Register;