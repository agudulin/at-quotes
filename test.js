import at from './src/index';
import assert from 'assert';

describe('at', () => {
  it('getFinnQuote() should return a string', () => {
    assert(typeof at.getFinnQuote() === 'string');
  });

  it('getJakeQuote() should return a string', () => {
    assert(typeof at.getJakeQuote() === 'string');
  });

  it('getIceKingQuote() should return a string', () => {
    assert(typeof at.getIceKingQuote() === 'string');
  });

  it('getQuote() should return a string', () => {
    assert(typeof at.getQuote() === 'string');
  });
});
