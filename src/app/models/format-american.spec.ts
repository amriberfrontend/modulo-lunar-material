import { FormatAmerican } from './format-american';

describe('FormatAmerican', () => {
  it('should be -238.27', () => {
    expect(new FormatAmerican().getTemperature(123)).toBe(-238.27);
  });
});
