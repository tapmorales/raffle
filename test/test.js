const lib = require('../src');

describe('TEST', () => {
  test('should return <= 2 ', done => {
    let x = 10;
    while (--x) {
      let s = lib.sort(0, 2);
      console.log('toBeLessThanOrEqual', s);
      expect(s).toBeLessThanOrEqual(2);
    }

    done();
  });

  test('should return >= 0 ', done => {
    let x = 10;
    while (--x) {
      let s = lib.sort(0, 2);
      console.log('toBeGreaterThanOrEqual', s);
      expect(s).toBeGreaterThanOrEqual(0);
    }
    // expect(lib.sort(0, 2)).toBeGreaterThanOrEqual(0);
    // expect(lib.sort(0, 2)).toBeGreaterThanOrEqual(0);
    // expect(lib.sort(0, 2)).toBeGreaterThanOrEqual(0);
    // expect(lib.sort(0, 2)).toBeGreaterThanOrEqual(0);
    // expect(lib.sort(0, 2)).toBeGreaterThanOrEqual(0);
    // expect(lib.sort(0, 2)).toBeGreaterThanOrEqual(0);

    done();
  });
});
