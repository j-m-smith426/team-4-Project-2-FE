import Following from "../../../app/Components/Profile/Following";
import React from 'react';
import {mount} from 'enzyme';
import { render, cleanup } from '@testing-library/react-native';


jest.mock('react-redux');
jest.mock("@react-navigation/native");
jest.mock('react-native-tab-view');
jest.mock('../../../axiosConfig');

import axios from 'axios';
jest.mock('axios');

describe('Following Component', () => {
    let following = ["newUser", "cheeseburger"];
    it('Shows a list of users', () => {
        const wrapper = mount(<Following following={following}/>)
        expect(wrapper.find('FlatList')).toHaveProperty('data');
    })
}) 