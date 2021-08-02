import buttons from'./buttons'
import colors from'./colors'
 test("it should have the right padding",()=>{
     expect(buttons.padd).toBe(10);
 });
 test("it should have the right radius",()=>{
     expect(buttons.radius).toBe(24);
 });
 test("it should have the right margin",()=>{
    expect(buttons.marg).toBe(5);
});
test("it should have the right fSize",()=>{
    expect(buttons.fSize).toBe(24);
});
test("it should have the right Background Color",()=>{
    expect(buttons.backColor).toBe(colors.buttonPrimary);
});
