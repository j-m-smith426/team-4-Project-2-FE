import {mount} from 'enzyme';
import { render, cleanup } from '@testing-library/react-native';
import CommentScreen from '../../app/Screen/Login';
import AddComment from '../../app/Components/Post/addComment';
import Post from '../../app/Components/Post/Post';

jest.mock('react-redux');
jest.mock("@react-navigation/native");
jest.mock('react-native-tab-view');
jest.mock('../../axiosConfig');
jest.mock('@aws-amplify/auth')
jest.mock('aws-amplify');

describe('Login Screen', () => {
    it('has a user and password text input', () => {
        const wrapper = mount(<CommentScreen/>);
        let post = wrapper.find('ScreenWrapper');
        expect(post).toBeDefined();
        expect(post.find('View')).toHaveLength(2);
    })
}) 