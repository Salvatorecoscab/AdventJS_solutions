/**
 * @param {number[]} gifts - Los regalos a empacar
 * @param {number} maxWeight - El peso máximo del trineo
 * @returns {number | null} El número de trineos necesarios
 */
function packGifts(gifts, maxWeight) {
  if (gifts.length === 0) return 0;

  if (Math.max(...gifts) > maxWeight) return null;

  let sleighs = 1; 
  let currentWeight = 0;

  for (const gift of gifts) {
    if (currentWeight + gift <= maxWeight) {

      currentWeight += gift;
    } else {

      sleighs++;
      currentWeight = gift; 
    }
  }

  return sleighs;
}
