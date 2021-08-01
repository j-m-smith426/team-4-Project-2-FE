import PopularAnime from "../../../app/Components/Anime/PopularAnime";
import React from "react";
import {mount} from 'enzyme';

describe('PopularAnime Component', () => {
    it('renders photos', () => {
        const wrapper = mount(<PopularAnime/>);
        expect(wrapper.find('Image')).toBeTruthy();
    })
})