import React from 'react'

const Users = ({ users, loading }) => {
    if (loading) {
        return <h2>Loading...</h2>
    }

    return (
        <ul className="list-group mb-4">
            {users.map(user => (
                <li key={user.id} className="list-group-item">
                    {user.name}
                </li>
            ))}
        </ul>
    )
}

export default Users