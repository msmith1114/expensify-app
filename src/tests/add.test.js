const add = (a, b) => a + b;
const generateGreeting = (name = 'Anon') => `Hello ${name}!`;

test('should add two nmumbers', () => {
    const result = add(3, 4);
    expect(result).toBe(7);
});

test('should have correct string value', () => {
    const result = generateGreeting("Matt")
    expect(result).toBe("Hello Matt!");
});

test('should have correct string value for no name', () => {
    const result = generateGreeting()
    expect(result).toBe("Hello Anon!");
});