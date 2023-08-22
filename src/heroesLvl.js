export default function heroesSort(object) {
  return object.sort((a, b) => b.health - a.health);
}
