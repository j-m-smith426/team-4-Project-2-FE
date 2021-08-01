import Bio from "../../../app/Components/Profile/BioSection";
import React from 'react';
import {mount} from 'enzyme';
import { render, cleanup } from '@testing-library/react-native';


jest.mock('react-redux');
jest.mock("@react-navigation/native");
jest.mock('react-native-tab-view');
jest.mock('../../../axiosConfig');

import axios from 'axios';
jest.mock('axios');

let bio = {
    greeting: 'something',
    description: 'another',
}
afterEach(cleanup);

describe('User Bio component', () => {
    const data = {
        newUser: {
            REFERENCE: '0',
            TYPEID: 'U_cheeseburger',
            name: 'cheeseburger',
            bio: {
                greeting: '',
                description:''
            },
            image: 'key',
            watchlist: [],
            followed: [],
            favorites: []
        } 
    }    
    it('has a greeting and description', () => {
        const wrapper = mount(<Bio image = 'img.png' bio={bio} name = 'whatever'/>);
        expect(wrapper.find('#greeting')).toHaveValue('something');
    })
})