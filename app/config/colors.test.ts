import colors from './colors';

test("primary color should be right color",()=>{
    expect(colors.primary).toBe("rgb(201,218,134)");
});
test("secondary color should be right color",()=>{
    expect(colors.secondary).toBe("rgb(210,210,210)");
});
test("tertiary color should be right color",()=>{
    expect(colors.tertiary).toBe("rgb(108,157,198)");
});
test("backgroundcolor should be right color",()=>{
    expect(colors.background).toBe("rgb(201,218,234)");
});
test("background2 color should be right color",()=>{
    expect(colors.background2).toBe("rgb(210,210,230)");
});
test("buttonPrimary color should be right color",()=>{
    expect(colors.buttonPrimary).toBe("rgb(62,5,87)");
});
test("buttonSecondary color should be right color",()=>{
    expect(colors.buttonSecondary).toBe("rgb(201,218,234)");
});
test("TabBarHeader color should be right color",()=>{
    expect(colors.TabBarHeader).toBe("rgb(72,61,139)");
});
test("MistyRose color should be right color",()=>{
    expect(colors.mistyRose).toBe("rgb(255,228,225)");
});

