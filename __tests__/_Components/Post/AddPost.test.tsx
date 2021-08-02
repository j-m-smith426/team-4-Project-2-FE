import AddPost from "../../../app/Components/Post/addPost";
import React from "react";
import { mount } from "enzyme";
import axios from 'axios';

jest.mock('react-redux');
jest.mock("@react-navigation/native");
jest.mock('react-native-tab-view');
jest.mock('../../../axiosConfig');

describe('Add Post Component', () => {
    it('renders a comment', () => {
        const wrapper = mount(<AddPost username = "cheeseburger" userProfilePic = "icon.png"/>);
        axios.get('U_cheeseburger')
        expect(wrapper.find('ProfileImg')).toHaveProperty('username');
    })
})