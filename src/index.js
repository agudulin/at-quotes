import textr from 'textr';
import ellipses from 'typographic-ellipses';
import spaces from 'typographic-single-spaces';
import quotes from 'typographic-quotes';

import Finn from './lib/finn';
import Jake from './lib/jake';
import IceKing from './lib/ice-king';

const transform = textr()
  .use(ellipses)
  .use(spaces)
  .use(quotes)
  .use(String.prototype.trim);

const getRandomQuote = (arr) => {
  let randomSeason = arr[Math.floor(Math.random() * arr.length)];
  let randomQuote = randomSeason[Math.floor(Math.random() * randomSeason.length)];
  return transform(randomQuote);
}

export default {
  getIceKingQuote: () => getRandomQuote(IceKing),
  getFinnQuote: () => getRandomQuote(Finn),
  getJakeQuote: () => getRandomQuote(Jake),
  getQuote: () => getRandomQuote([...Jake, ...Finn, ...IceKing])
};
