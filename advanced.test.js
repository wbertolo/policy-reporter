// Import the FSM class and the factory function
const { FSM, createModThreeFSM } = require('./advanced.js'); // Adjust the path to your file if necessary

describe('FSM modThree function tests', () => {
  let fsm;

  // Create the FSM instance before each test
  beforeEach(() => {
    fsm = createModThreeFSM();
  });

  test('modThree should return 1 for input "1101"', () => {
    expect(fsm.modThree('1101')).toBe(1);
  });

  test('modThree should return 2 for input "1110"', () => {
    expect(fsm.modThree('1110')).toBe(2);
  });

  test('modThree should return 0 for input "1111"', () => {
    expect(fsm.modThree('1111')).toBe(0);
  });

  test('modThree should return 0 for input "110"', () => {
    expect(fsm.modThree('110')).toBe(0);
  });

  test('modThree should return 1 for input "1010"', () => {
    expect(fsm.modThree('1010')).toBe(1);
  });

  test('modThree should return an error message for input "2"', () => {
    expect(fsm.modThree('2')).toBe('Invalid input symbol. Valid symbols are 0 and 1');
  });

  test('modThree should return an error message for empty input', () => {
    expect(fsm.modThree()).toBe('Not a valid input.');
  });
});
