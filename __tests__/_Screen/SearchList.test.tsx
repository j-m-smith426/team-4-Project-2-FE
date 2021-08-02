import SearchList from "../../app/Screen/SearchList";
import {mount} from 'enzyme';
import axios from "axios";
import { useNavigation } from '@react-navigation/core';
jest.mock('react-redux');
jest.mock("@react-navigation/native");
jest.mock('../../axiosConfig');

describe('SearchList Component', () => {
    it('has list of anime', async () => {
        const wrapper = mount(<SearchList/>);
        const resp = {TYPEID: 'A#DBZ', name: 'DBZ'};
        axios.get(resp.TYPEID);
        expect(wrapper.find('FlatList')).toHaveProp('keyExtractor');
    })
})