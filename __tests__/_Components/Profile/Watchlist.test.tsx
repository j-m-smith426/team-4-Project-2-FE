import React from 'react';
import {mount} from 'enzyme';
import { render, cleanup } from '@testing-library/react-native';


jest.mock('react-redux');
jest.mock("@react-navigation/native");
jest.mock('react-native-tab-view');
jest.mock('../../../axiosConfig');

import axios from 'axios';
import Watchlist from '../../../app/Components/Profile/Watchlist';
jest.mock('axios');

describe('Watchlist Component', () => {
    let list = ["AnimeTitle", "Genre", "Photo"];
    it('Renders the users list of anime', () => {
        const wrapper = mount(<Watchlist list = {list}/>);
        expect(wrapper.find('FlatList')).toHaveBeenCalledTimes(3);
        expect(wrapper.find('FlatList')).toHaveProperty('data');
        expect(wrapper.find('Image')).toBeTruthy();
    })
}) 