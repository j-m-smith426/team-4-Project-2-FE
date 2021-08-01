import ProfilePage from "../../../app/Components/Profile/ProfileNavigation";
import Profile from "../../../app/Components/Profile/UserProfilePageNavigation";
import {mount} from 'enzyme';
import axios from "axios";

jest.mock('react-redux');
jest.mock("@react-navigation/native");
jest.mock('../../../axiosConfig');

describe('User Profile Navigation Component', () => {
    let user = {
        REFERENCE: '0',
        TYPEID: 'U#hello',
        name: 'hello',
        bio: {
            greeting: 'hi',
            description:'bye'
        },
        image: 'key',
        watchlist: ['Anime', 'Other Anime'],
        followed: ['2Chainz', 'MJ'],
        favorites: ['Naruto', 'Bleach'],      
      }
      
    it('can navigate across tabs', async () => {
        const wrapper = mount(<ProfilePage/>);
        axios.get(user.TYPEID);
        expect(wrapper.find('TabView')).toExist();
    })
    it('can navigate to other users profile', async () => {
        const wrap = mount(<Profile/>);
        axios.get(user.TYPEID);
        expect(wrap.find('TabView')).toExist();  
    })
})