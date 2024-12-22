import sortHeroes from '../app';

const optionСheck = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];

const correctResult = [
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
  { name: 'мечник', health: 10 },
];

test('checking hero sorting', () => {
  const result = sortHeroes(optionСheck);
  expect(result).toEqual(correctResult);
});