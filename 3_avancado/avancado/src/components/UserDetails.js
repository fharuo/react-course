import React from 'react'

const UserDetails = ({id, name, age, job}) => {
  return (
    <div>
        <h2>person details</h2>
        <ul>
            <li>id: {id}</li>
            <li>name: {name}</li>
            <li>age: {age}</li>
            <li>job: {job}</li>
            {age >= 18 && <p>pode tirar habilitação</p>}
        </ul>
    </div>
  )
}

export default UserDetails;