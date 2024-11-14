import React from 'react'
import axios from 'axios'

export default class RegisterCl extends React.Component {
    constructor(){
        super()
        this.state = {
            formData : {
                name :"",password:"", gender :"", hobbies : [], city :"Rabat"
            },
            toggle : false,
            response : null
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e){
        const {name, type, value, checked} = e.target
        if(type == "text" || type == "radio" || name == "city"){
            this.setState({formData: {...this.state.formData, [name]: value}} , )
        } else if (type == "checkbox") {
            // setRegisterData((prev) => ({...prev, hobbies : checked ? [...prev.hobbies, value ] : hobbies.filter((e)=> e !== value)}))
            this.setState({formData : {...this.state.formData, hobbies : checked ? [...this.state.formData.hobbies, value] : this.state.formData.hobbies.filter((e)=> e !== value)}})
        }
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        this.setState({toggle : true})
    }

    componentDidMount(){
            const dataSub = {
                title : 2, body : "dataBody", userId : 2
            }
            axios.post('https://jsonplaceholder.typicode.com/posts', dataSub )
            .then(res=> this.setState({response : res.data}))
    }

    componentDidUpdate() {
        return ;
    }


    render(){
        return(
            <>
                 <form onSubmit= {this.handleSubmit}>
                <div className="container">
                    <label htmlFor="">Nom :</label>
                    <input type="text" name="name" value={this.state.formData.name} onChange={this.handleChange} />
                </div>
                <div className="container">
                    <label htmlFor="">Password :</label>
                    <input type="text" name="password" value={this.state.formData.password} onChange={this.handleChange} />
                </div>
                <div className="container">
                    <label htmlFor="">Gender :</label>
                    <input type="radio" name="gender" value="M" checked={this.state.formData.gender == "M"} onChange={this.handleChange} id="" />
                    <input type="radio" name="gender" value="F" checked={this.state.formData.gender == "F"} onChange={this.handleChange} id="" />
                </div>
                <div className="container">
                    <select name="city" onChange={this.handleChange} id="">
                        <option value="rabat">Rabat</option>
                        <option value="casa">Casa</option>
                    </select>
                </div>
                <div className="container">
                    <input type="checkbox" name="hobbies" value="sports" onChange={this.handleChange} checked={this.state.formData.hobbies.includes('sports')} id="" />
                    <input type="checkbox" name="hobbies" value="reading" onChange={this.handleChange} checked={this.state.formData.hobbies.includes('reading')} id="" />
                    <input type="checkbox" name="hobbies" value="drawing" onChange={this.handleChange} checked={this.state.formData.hobbies.includes('drawing')} id="" />
                </div>
                <input type="submit" value="submit" />
            </form>
            <pre>{JSON.stringify(this.state.response)}</pre>
            {this.state.toggle && <><pre>
                                <p>{this.state.formData.name}</p>
                                <p>{this.state.formData.password}</p>
                                <p>{this.state.formData.gender}</p>
                                <p>{this.state.formData.hobbies.join(", ")}</p>
                                <p>{this.state.formData.city}</p>
                            </pre>
                            </>
                            }
            </>
        )
    }
}