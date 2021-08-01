import FavoriteCard from "../../../app/Components/Anime/FavoriteCard";
import {mount} from 'enzyme';
import React from "react";

describe('FavoriteCard Component', () => {
    it('Contains Title and an Image of the Anime', () => {
        const wrapper = mount(<FavoriteCard/>);
        expect(wrapper.find('View')).toHaveLength(2);
    })
})