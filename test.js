import test from 'ava'
import * as at from './dist'

test('getFinnQuote returns a string', (t) => {
  t.is(typeof at.getFinnQuote(), 'string')
})

test('getJakeQuote returns a string', (t) => {
  t.is(typeof at.getJakeQuote(), 'string')
})

test('getIceKingQuote returns a string', (t) => {
  t.is(typeof at.getIceKingQuote(), 'string')
})

test('getQuote returns a string', (t) => {
  t.is(typeof at.getQuote(), 'string')
})
