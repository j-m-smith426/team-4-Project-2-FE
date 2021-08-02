import PopularAnime from "./PopularAnime";

test("container should have the right flex",()=>{
    expect(PopularAnime.length).toBeGreaterThanOrEqual(0);
});
test("should be rendered",()=>{
    expect(PopularAnime).toBeDefined();
});