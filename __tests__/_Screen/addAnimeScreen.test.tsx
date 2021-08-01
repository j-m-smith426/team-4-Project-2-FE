import addAnimeScreen from "../../app/Screen/addAnimeScreen";
import {mount, shallow} from 'enzyme';
import axios from "axios";

jest.mock('react-redux');
jest.mock("@react-navigation/native");
jest.mock('../../axiosConfig');

describe('AddAnime Component', () => {
    it('has fields for image, genre, title, description', async () => {
        const screen = addAnimeScreen;
        const resp = {TYPEID: 'A#DBZ', name: 'DBZ'};
        axios.get(resp.TYPEID);
    })
})