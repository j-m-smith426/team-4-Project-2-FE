import * as React from 'react';
import {shallow} from 'enzyme'

import Post from './Post';

describe('Post', () =>
{
    test('Should have correct information', () =>
    {
        const postInfo = {
            username:'user1', userProfilePic:'yes', Contents:'There once was a little bunny that ran around', timestamp: 5, postID:'001'
        }

        const wrapper = shallow(<Post username='user1' userProfilePic='yes' Contents='There once was a little bunny that ran around' timestamp={5} postID='001' />);

        console.log(wrapper.debug({ verbose: true }));
        const prop = wrapper.findWhere((node) => node.prop('testID') === 'Name')

        expect(prop).toBeDefined();
    })
})