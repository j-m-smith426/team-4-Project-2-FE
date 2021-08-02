import SearchList from './SearchList'

test("should be rendered",()=>{
    expect(SearchList).toBeDefined();
});

test("should be rendered",()=>{
    expect(SearchList.length).toBeGreaterThanOrEqual(0);
});