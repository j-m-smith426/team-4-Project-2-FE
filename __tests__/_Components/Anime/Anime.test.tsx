import Anime from '../../../app/Components/Anime/Anime';

import { mount} from 'enzyme';
import React from 'react'; 
import axios from 'axios';

jest.mock('react-redux');
jest.mock("@react-navigation/native");
jest.mock('../../../axiosConfig');
jest.mock('../../../app/redux/State');

describe('Testing Anime Screen', () => {
    let user = {
        REFERENCE: '0',
        TYPEID: 'U_hello',
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
      let newAnime = {
        REFERENCE:'0',
        TYPEID:'A_something',
        name:'something',
        bio:'cool things',
        image:'img.jpg',
        genre:'adventure',
        rating:1,
    }
    it('renders Anime component', () => {
        let wrapper = mount(<Anime/>);
        axios.get(user.TYPEID);
        axios.post('Post', {newAnime});
    })
})