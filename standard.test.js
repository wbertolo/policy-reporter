const modThree = require('./standard'); // Use CommonJS require

describe('modThree function tests', () => {
  test('modThree should return 0 when input is 0', () => {
    expect(modThree(0)).toBe(0);
  });

  test('modThree should return 1 when input is 1', () => {
    expect(modThree(1)).toBe(1);
  });

  test('modThree should return 0 for input 10', () => {
    expect(modThree(10)).toBe(2);
  });

  test('modThree should return 2 for input 11', () => {
    expect(modThree(11)).toBe(0);
  });

  test('modThree should return 1 for input 100', () => {
    expect(modThree(100)).toBe(1);
  });

  test('modThree should return 2 for input 101', () => {
    expect(modThree(101)).toBe(2);
  });

  test('modThree should return 0 for input 110', () => {
    expect(modThree(110)).toBe(0);
  });

  test('modThree should return 1 for input 111', () => {
    expect(modThree(111)).toBe(1);
  });

  test('modThree should return 1 for input 10001', () => {
    expect(modThree(10001)).toBe(2);
  });

  test('modThree should return 0 for input 10010', () => {
    expect(modThree(10010)).toBe(0);
  });

  test('modThree should return false for input 2', () => {
    expect(modThree(2)).toBe(false);
  });  

  test('modThree should return false for no input', () => {
    expect(modThree()).toBe(false);
  });    
});
