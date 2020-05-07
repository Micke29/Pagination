import PropTypes from 'prop-types'
import React from 'react'

const Pagination = ({ usersPerPage, totalUsers, paginate }) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <a onClick={() => paginate(number)} href="!#" className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

Pagination.propTypes = {
    usersPerPage: PropTypes.number.isRequired,
    totalUsers: PropTypes.number.isRequired,
    paginate: PropTypes.func.isRequired,
}

export default Pagination