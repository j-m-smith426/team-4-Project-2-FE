import * as React from 'react';
// import renderer from 'react-test-renderer'
import {shallow, mount} from 'enzyme'

import Post from './Post';
import { Platform } from 'react-native';

describe('Post', () =>
{
    test('Should have correct information', () =>
    {
        const postInfo = {
            username:'user2', userProfilePic:'yes', Contents:'There once was a little bunny that ran around', timestamp: 5, postID:'001'
        }

        const wrapper = mount(<Post username='user2' userProfilePic='yes' Contents='There once was a little bunny that ran around' timestamp={5} postID='001' />);

        console.log(wrapper);
        const prop = wrapper.findWhere((node) => node.prop('testID') === 'Name');
        const IMG = wrapper.findWhere((node) => node.prop('testID') === 'CommentImg').exists()    
        console.log(prop.debug({verbose:true}));
        expect(prop.at(1).text()).toEqual(postInfo.username);
        expect(IMG).toBeFalsy();
    })
})