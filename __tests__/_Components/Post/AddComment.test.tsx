import AddComment from "../../../app/Components/Post/addComment";
import React from "react";
import { mount } from "enzyme";
import axios from 'axios';
jest.mock('react-redux');
jest.mock("@react-navigation/native");
jest.mock('react-native-tab-view');
jest.mock('../../../axiosConfig');

describe('AddComment Component', () => {
    it('renders a comment', () => {
        const wrapper = mount(<AddComment username = "cheeseburger" userProfilePic = "icon.png"/>);
        expect(wrapper.find('ProfileImg')).toHaveProperty('username');
    })
})