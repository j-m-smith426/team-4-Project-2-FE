import AllAnime from "../../app/Screen/AllAnime";
import {mount} from 'enzyme';
import { render, cleanup } from '@testing-library/react-native';
import axios from "axios";

jest.mock('react-redux');
jest.mock("@react-navigation/native");
jest.mock('react-native-tab-view');
jest.mock('../../axiosConfig');
jest.mock('@aws-amplify/auth')
jest.mock('aws-amplify');

describe('Login Screen', () => {
    it('has list of all anime', async () => {
        const wrapper = mount(<AllAnime/>);
        const resp = {TYPEID: 'A#DBZ', name: 'DBZ'};
        axios.get(resp.TYPEID);
        expect(wrapper.find('FlatList')).toHaveReturnedTimes;
        
        //toHaveProp('keyExtractor');
        
    })
}) 