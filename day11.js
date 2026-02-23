function findUnsafeGifts(warehouse) {
  const giftPositions = new Set();
  const cameras = [];

  // 1. Recolectar posiciones (Usamos un bucle tradicional o forEach con index)
  warehouse.forEach((row, y) => {
    for (let x = 0; x < row.length; x++) {
      if (row[x] === '*') giftPositions.add(`${y},${x}`);
      if (row[x] === '#') cameras.push([y, x]);
    }
  });

  const watchedGifts = new Set();

  // 2. Revisar qué regalos ve cada cámara
  cameras.forEach(([y, x]) => {
    const adjacents = [
      `${y + 1},${x}`, // Abajo
      `${y - 1},${x}`, // Arriba
      `${y},${x + 1}`, // Derecha
      `${y},${x - 1}`  // Izquierda
    ];

    adjacents.forEach(pos => {
      if (giftPositions.has(pos)) {
        watchedGifts.add(pos); // Guardamos la posición del regalo vigilado
      }
    });
  });

  // 3. Resultado: Total de regalos menos los que están en el set de vigilados
  return giftPositions.size - watchedGifts.size;
}


