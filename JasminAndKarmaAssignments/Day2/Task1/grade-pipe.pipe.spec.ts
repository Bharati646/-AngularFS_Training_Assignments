import { GradePipePipe } from './grade-pipe.pipe';

describe('GradePipePipe', () => {
  let pipe: GradePipePipe;

  beforeEach(() => {
    pipe = new GradePipePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return "Outstanding" when input is  1 ', () => {
    const result: string = pipe.transform(1);
    expect(result).toBe('Outstanding');
  });

  it('should return "Excellent" when input is  2 ', () => {
    const result: string = pipe.transform(2);
    expect(result).toBe('Excellent');
  });

  it('should return "Good" when input is  3 ', () => {
    const result: string = pipe.transform(3);
    expect(result).toBe('Good');
  });

  it('should return "Average" when input is  4 ', () => {
    const result: string = pipe.transform(4);
    expect(result).toBe('Average');
  });

  it('should return "Poor" when input is  5 ', () => {
    const result: string = pipe.transform(5);
    expect(result).toBe('Poor');
  });

  it('should return empty when input is invalid grade', () => {
    const result: string = pipe.transform(0);
    expect(result).toBe('');
  });

  it('should return empty when input is invalid grade', () => {
    const result: string = pipe.transform(6);
    expect(result).toBe('');
  });
});
