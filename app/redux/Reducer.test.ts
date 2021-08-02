import {Reducer} from './Reducers'

test("should be rendered",()=>{
    expect(Reducer).toBeDefined();
});
test("should retun state",()=>{
    expect(Reducer).toReturn();
});