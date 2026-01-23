/**
 * @param {Array<{ toy: string, quantity: number }>} giftsToProduce
 * @returns {string[]} Array of manufactured gifts
 */
function manufactureGifts(giftsToProduce) {


let toys=[]
giftsToProduce.forEach(product => {
  if (product.quantity>0){
    toys=toys.concat(Array(product.quantity).fill(product.toy))

  }
});
  return toys
}
