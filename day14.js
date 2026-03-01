function findGiftPath(workshop, gift) {
 for (const key in workshop) {
    const value = workshop[key];

    if (value === gift) return [key];

    if (typeof value === 'object' && value !== null) {
      const result = findGiftPath(value, gift);
      

      if (result.length > 0){
        return [key, ...result];
      }
    }
  }
  return []
}

