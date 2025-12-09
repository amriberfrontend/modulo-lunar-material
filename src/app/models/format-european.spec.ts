import { FormatEuropean } from './format-european';

describe('FormatEuropean', () => {
  it('should be 396.15', () => {
    expect(new FormatEuropean().getTemperature(123)).toBe(396.15);
  });
});
