import Favorites from "../../../app/Components/Profile/Favorites";
import React from 'react';
import {mount} from 'enzyme';
import { render, cleanup } from '@testing-library/react-native';


jest.mock('react-redux');
jest.mock("@react-navigation/native");
jest.mock('react-native-tab-view');
jest.mock('../../../axiosConfig');

import axios from 'axios';
jest.mock('axios');

describe('Favorites Component', () => {
    let list = ["Favorite", "Anime"];
    it('Renders properties of an Anime', () => {
        const wrapper = mount(<Favorites list = {list}/>);
        let title = wrapper.find('#title');
        let photo = wrapper.find('#AnimePicture');
        expect(photo).toBeTruthy();
        expect(title).toBeDefined();
    })
})