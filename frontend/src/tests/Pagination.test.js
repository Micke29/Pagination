import { expect } from 'chai'
import React from 'react'
import { shallow } from 'enzyme'

import Pagination from '../components/Pagination'

const fakeUsers = [
    {
        id: 1,
        name: "test 1"
    },
    {
        id: 2,
        name: "test 2"
    },
    {
        id: 3,
        name: "test 3"
    },
    {
        id: 4,
        name: "test 4"
    },
    {
        id: 5,
        name: "test 5"
    },
    {
        id: 6,
        name: "test 6"
    },
    {
        id: 7,
        name: "test 7"
    },
    {
        id: 8,
        name: "test 8"
    }
]

const currentPage = 1
const usersPerPage = 5

const paginate = pageNumber => currentPage = pageNumber

describe('<Pagination />', () => {
    it('has 2 link', () => {
        const wrapper = shallow(<Pagination usersPerPage={usersPerPage} totalUsers={fakeUsers.length} paginate={paginate} />)

        expect(wrapper.find('li')).to.have.length(2)
    })

    it('should be match its reference snapshot', () => {
        const wrapper = shallow(<Pagination usersPerPage={usersPerPage} totalUsers={fakeUsers.length} paginate={paginate} />)

        expect(wrapper).to.matchSnapshot()
    })
})