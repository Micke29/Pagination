import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Users from './components/Users';
import Pagination from './components/Pagination';

const App = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [usersPerPage] = useState(5)

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true)
      const res = await axios.get('http://localhost:3100/api/users')
      setUsers(res.data.results)
      setLoading(false)
    }

    fetchUsers()
  }, [])

  // Get current users
  const indexOfLastPost = currentPage * usersPerPage
  const indexOfFirstPost = indexOfLastPost - usersPerPage
  const currentUsers = users.slice(indexOfFirstPost, indexOfLastPost)

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber)

  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-3">My App</h1>
      <Users users={currentUsers} loading={loading} />
      <Pagination usersPerPage={usersPerPage} totalUsers={users.length} paginate={paginate} />
    </div>
  )
}

export default App