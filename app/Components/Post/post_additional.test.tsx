import * as React from 'react';
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
// import renderer from 'react-test-renderer'
import {shallow, mount} from 'enzyme'
jest.mock('react-redux');
jest.mock("@react-navigation/native");
import Post_additional from './Post_additional';
import { Platform } from 'react-native';

describe('Post', () =>
{
    test('Should have correct information', () =>
    {
        const postInfo = {
            username:'user2', userProfilePic:'yes', Contents:'There once was a little bunny that ran around', timestamp: 5, postID:'001'
        }

        const wrapper = mount(<Post_additional username='user2' userProfilePic='yes' Contents='There once was a little bunny that ran around' image='key' parentID='A#DragonBall' timestamp={5} postID='001' />);

        console.log(wrapper);
        const prop = wrapper.findWhere((node) => node.prop('testID') === 'Name');
        const IMG = wrapper.findWhere((node) => node.prop('testID') === 'CommentImg').exists()    
        console.log(prop.debug({verbose:true}));
        expect(prop.at(1).text()).toEqual(postInfo.username);
        expect(IMG).toBeFalsy();
    })
    
})