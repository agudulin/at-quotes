import Finn from './lib/finn';
import Jake from './lib/jake';
import IceKing from './lib/ice-king';

const getRandomQuote = (arr) => {
  let randomSeason = arr[Math.floor(Math.random() * arr.length)];
  let randomQuote = randomSeason[Math.floor(Math.random() * randomSeason.length)];
  return randomQuote;
}

export default {
  getIceKingQuote: () => getRandomQuote(IceKing),
  getFinnQuote: () => getRandomQuote(Finn),
  getJakeQuote: () => getRandomQuote(Jake),
  getQuote: () => getRandomQuote([...Jake, ...Finn, ...IceKing])
};
