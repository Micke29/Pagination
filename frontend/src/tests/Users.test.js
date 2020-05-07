import { expect } from 'chai'
import React from 'react'
import { shallow } from 'enzyme'

import Users from '../components/Users'

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
    }
]

describe('<Users />', () => {
    it('load users', () => {
        const wrapper = shallow(<Users users={[]} loading={true} />)

        expect(wrapper.text()).to.match(/Loading.../)
    })

    it('has 5 users', () => {
        const wrapper = shallow(<Users users={fakeUsers} loading={false} />)

        expect(wrapper.find('li')).to.have.length(5)
    })

    it('should be match its reference snapshot', () => {
        const wrapper = shallow(<Users users={fakeUsers} loading={false} />)

        expect(wrapper).to.matchSnapshot()
    })
})