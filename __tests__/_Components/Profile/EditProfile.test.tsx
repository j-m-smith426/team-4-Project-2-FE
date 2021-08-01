import editBio from "../../../app/Components/Profile/editProfile";
import React from 'react';
import {mount} from 'enzyme';
import { render, cleanup } from '@testing-library/react-native';


jest.mock('react-redux');
jest.mock("@react-navigation/native");
jest.mock('react-native-tab-view');
jest.mock('../../../axiosConfig');

import axios from 'axios';
jest.mock('axios');

describe('Edit Profile Component', () => {
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
    
    it('can submit new changes to user', () => {
        let edit = editBio();
        axios.get(user.TYPEID);
        expect(editBio).toExist();
    })
})
