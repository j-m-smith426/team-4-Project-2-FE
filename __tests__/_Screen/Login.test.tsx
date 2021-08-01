import React from 'react';
import {mount} from 'enzyme';
import { render, cleanup } from '@testing-library/react-native';
import Login from '../../app/Screen/Login';

jest.mock('react-redux');
jest.mock("@react-navigation/native");
jest.mock('react-native-tab-view');
jest.mock('../../axiosConfig');
jest.mock('@aws-amplify/auth')
jest.mock('aws-amplify');

describe('Login Screen', () => {
    it('has a user and password text input', () => {
        const wrapper = mount(<Login/>);
        expect(wrapper.find('TextInput')).toHaveLength(2);
    })
}) 