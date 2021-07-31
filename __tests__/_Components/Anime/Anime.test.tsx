import Anime from '../../../app/Components/Anime/Anime';
import { IRootState } from '../../../app/redux/State';


import { mount, ReactWrapper } from 'enzyme';
import { nestedHell, findAndShallowRender } from "../../testFunctions";
import {Text, View, StyleSheet} from 'react-native';
import React from 'react'; 
jest.mock('react-redux');
jest.mock("@react-navigation/native");
jest.mock('../../../axiosConfig');
jest.mock('../../../app/redux/State');
const mockEvent = jest.fn();

describe('Testing Anime Screen', () => {
    /*beforeEach(() => {
        jest.fn()
    });*/
    it('renders Anime component', () => {
        let wrapper = mount(<Anime/>);
        //let genre = wrapper.findWhere((node:any) => node.prop('testID') === 'genre');
        //const wrap = wrapper.find('#genre');
        //expect(wrapper).toExist();
    })
})