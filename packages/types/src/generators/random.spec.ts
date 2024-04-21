import { randomString } from './random.js';

describe('generative utils', () => {
  describe('random', () => {
    it('should generate a random string', async () => {
      const result = randomString(10);
      expect(typeof result).toBe('string');
      expect(result.length).toBe(10);
    });
  });
});
