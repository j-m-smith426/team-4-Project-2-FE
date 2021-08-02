import Anime from './Anime'
import {View} from 'react-native'

test("should be rendered",()=>{
    expect(Anime).toBeDefined();
});
test("should be of length",()=>{
    expect(Anime.length).toBeGreaterThanOrEqual(0);
});
test("should be rendered",()=>{
    expect(Anime.toString).toBeTruthy();
});