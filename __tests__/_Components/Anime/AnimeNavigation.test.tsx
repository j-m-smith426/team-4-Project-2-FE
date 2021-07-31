import AnimePage from "../../../app/Components/Anime/AnimeNavigation";
import PostScreen from "../../../app/Screen/mainScreen";
import Anime from "../../../app/Components/Anime/Anime";
import { TabView, SceneMap, TabBar, TabViewProps } from 'react-native-tab-view';

import { mount, ReactWrapper } from 'enzyme';
import { nestedHell, findAndShallowRender } from "../../testFunctions";
import {Text, View, StyleSheet} from 'react-native';
import React, { useState } from 'react'; 
jest.mock('react-redux');
jest.mock("@react-navigation/native");
jest.mock('react-native-tab-view');
jest.mock('../../../axiosConfig');
jest.mock('../../../app/redux/State');


describe('AnimeNavigation', () => {
    it('it navigates to post screen', () => {
        /*const [index, setIndex] = React.useState(0);
        const [routes] = React.useState([
        { key: 'first', title: 'OverView' },
        { key: 'second', title: 'Posts' },
        
        ]);
        let navigation = jest.mock("@react-navigation/native");

        const FirstRoute = () => (
            <Anime />
        );

        const SecondRoute = () => (
            <PostScreen />
        );

        const renderScene = SceneMap({
            first: FirstRoute,
            second: SecondRoute,
        });*/
        let wrapper = mount(<AnimePage/>);
        let render = wrapper.find("TabView");
        expect(render).toExist();
    })
})