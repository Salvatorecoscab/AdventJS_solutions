function findUniqueToy(toy) {
  if (toy.length === 0) return '';

  const counts = {};
  const lowerToy = toy.toLowerCase();


  for (const char of lowerToy) {
    counts[char] = (counts[char] || 0) + 1;
  }


  for (const char of toy) {
    if (counts[char.toLowerCase()] === 1) {
      return char;
    }
  }

  return '';
}
