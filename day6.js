/**
 * @param {{ hand: 'L' | 'R', color: string }[]} gloves
 * @returns {string[]} Colors of matched pairs
 */
function matchGloves(gloves) {
  const inventory = {}; // Aquí guardaremos cuántos guantes libres hay
  const pairs = [];

  for (const { hand, color } of gloves) {
    // Definimos cuál sería su pareja ideal
    const oppositeHand = hand === 'L' ? 'R' : 'L';
    const oppositeKey = `${color}-${oppositeHand}`;

    // ¿Hay un guante opuesto esperando en el inventario?
    if (inventory[oppositeKey] > 0) {
      pairs.push(color);      // ¡Pareja encontrada!
      inventory[oppositeKey]--; // Lo sacamos del inventario
    } else {
      // No hay pareja, guardamos este guante en el inventario
      const currentKey = `${color}-${hand}`;
      inventory[currentKey] = (inventory[currentKey] || 0) +1;
    }
  }

  return pairs;
}
