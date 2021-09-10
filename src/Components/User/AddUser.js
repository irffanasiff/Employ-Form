import React from 'react'

const AddUser = () => {
const submitHandler =() => {
  
}


    return (
        <form onSubmit={submitHandler}>
            <label htmlFor="user">User Name</label>
            <input type="text" id ="name"/>
            <label htmlFor="age">Age</label>
            <input type="number" id ="age"/>
        </form>
    )
}

export default AddUser
