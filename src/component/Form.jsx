import React, {useState, useEffect} from 'react'
import Result from './Result'



export default class Form extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            formData : [],
            formObj : {
                nom : "",
                age : "",
                city : "Rabat",
                hobbies : [], 
                gender : ""
            }, 
            updateData : {
                currentIndex : null, 
                toggleUpdate : false
            }
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.updateData = this.updateData.bind(this)
        this.removeData = this.removeData.bind(this)
        this.handleReset = this.handleReset.bind(this)
    }

    handleReset(e){
        e.preventDefault()
        this.setState({formObj : {nom : "", age : "", city:'Rabat', hobbies : [], gender :""}})
    }

    handleSubmit(e){
        e.preventDefault()
        if(!this.state.updateData.toggleUpdate){
            this.setState((prev)=>({formData : [...prev.formData, this.state.formObj], formObj : {nom : "", age : "", city:'Rabat', hobbies : [], gender :""}}))
        } else {
            this.setState({formData: this.state.formData.map((e,i)=> i == this.state.updateData.currentIndex ? this.state.formObj : e), formObj : {nom : "", age : "", city:'Rabat', hobbies : [], gender :""}, updateData : {currentIndex: null, toggleUpdate : false}})
        }
        
        

    }

    handleChange(e){
        const {name,value,type, checked} = e.target
        
        if( type == "radio" || type == "text" || name == "city"){
            this.setState((prev)=>({formObj : {...prev.formObj, [name] : value}}))
        } else if (type == "checkbox"){
            this.setState((prev)=>({formObj : {...prev.formObj, hobbies : checked ? [...prev.formObj.hobbies, value] : hobbies.filter((e)=> e !== value)}}))
        }
    }

    updateData(i){
        this.setState({updateData : {currentIndex : i, toggleUpdate : true}, formObj : this.state.formData[i] })
    }

    removeData(i){
        this.setState((prev)=>({formData : prev.formData.filter((oldE, oldI)=> oldI != i)}))
    }


    render(){

        const {nom, age,hobbies, gender} = this.state.formObj
        return(
            <>
                <form onSubmit={this.handleSubmit}>
                    Nom : <input type="text" onChange = {this.handleChange} value={nom} name = "nom" /> <br />
                    Age : <input type="text" onChange = {this.handleChange} value={age} name = "age" /> <br />
                    City : <select name="city" onChange={this.handleChange} id="">
                                <option value="rabat">Rabat</option>
                                <option value="casa">Casablanca</option>
                            </select> <br />
                    hobbies : 
                    <input type="checkbox" name="hobbies" id="" onChange={this.handleChange} checked = {hobbies.includes("sports")} value="sports"  /> Sports <br />
                    <input type="checkbox" name="hobbies" id="" onChange={this.handleChange} checked = {hobbies.includes("reading")} value="reading"  /> Reading <br />
                    <input type="checkbox" name="hobbies" id="" onChange={this.handleChange} checked = {hobbies.includes("cooking")} value="cooking"  /> Cooking <br />
                    Gender :
                    <input type="radio" name="gender" value="M" id="" checked = {gender == "M"} onChange={this.handleChange}/> M
                    <input type="radio" name="gender"  value="F" checked ={gender == "F"} id="" onChange={this.handleChange} /> F <br />
                    <input type="submit" value="Submit" />
                    <button onClick={this.handleReset}>Reset</button>
                </form>
                <Result data={this.state.formData} removeData = {this.removeData} updateData = {this.updateData}/>
            </>
        )
    }
}