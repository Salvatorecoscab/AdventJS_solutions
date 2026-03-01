function runFactory(factory) {
  const matrix = factory.map(row => row.split(''));
  const max_x = matrix[0].length;
  const max_y = matrix.length;
  
  let x = 0;
  let y = 0;
  const visitados = new Set(); 


  while (true) {

    if (x < 0 || x >= max_x || y < 0 || y >= max_y) return 'broken';


    const coordenada = `${x},${y}`;
    if (visitados.has(coordenada)) return 'loop';
    visitados.add(coordenada);


    const direction = matrix[y][x];

    if (direction === '.') return 'completed';


    if (direction === '>') x++;
    else if (direction === '<') x--;
    else if (direction === '^') y--;
    else if (direction === 'v') y++;
  }
}
