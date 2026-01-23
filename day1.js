/**
 * @param {string[]} gifts - The array of gifts to filter
 * @returns {string[]} An array with the unique filtered gifts
 */
function filterGifts(gifts) {
  // Code here
  let goods=[]
  
  gifts.forEach(gift => {
    if(!gift.includes('#')){
      goods.push(gift)
    }
});

  return goods
}
