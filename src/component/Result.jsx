import React from 'react'
export default class Result extends React.Component  {
    constructor(props){
        super(props)
    }



    render(){
        const {data, removeData, updateData} = this.props
        return(
           <>
                {data.map((e,i)=>{
                    return(
                     <>       
                        <ul key={i}>
                            <li>Name : {e.nom}</li>
                            <li>Age : {e.age}</li>
                            <li>City : {e.city}</li>
                            <li>Hobbies : {e.hobbies.join(', ')}</li>
                            <li>Gender : {e.gender}</li>
                            <button onClick={()=>updateData(i)}>Update</button>
                            <button onClick={()=>removeData(i)}>Remove</button>
                        </ul>
                        <pre>
                                 {JSON.stringify(e, null, 2)}
                        </pre>
                    </>
                    )
                })}

                {
                    data.map((e,i)=>{
                        return(
                            <>
                                
                            </>
                        )
                    })
                }
            </>
        )
    }
}