import PropTypes from 'prop-types'
import React from 'react'

const Users = ({ users, loading }) => (
    loading === true ? <h2>Loading...</h2> :
        (<ul className="list-group mb-4">
            {users.map(({ id, name }) => (
                <li key={id} className="list-group-item">
                    {name}
                </li>
            ))}
        </ul>)
)

Users.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
        })
    ).isRequired,
    loading: PropTypes.oneOf([
        true,
        false
    ]).isRequired,
}

export default Users