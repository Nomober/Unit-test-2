export default function sortHeroes(heroesHealth) {
    return heroesHealth.sort((a, b) => (a.health > b.health ? -1 : 1));
  }
