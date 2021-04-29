const ships = [
  { id: 5, name: "Carrier", size: 5 },
  { id: 4, name: "Battleship", size: 4 },
  { id: 3, name: "Cruiser", size: 3 },
  { id: 2, name: "Submarine", size: 2 },
  { id: 1, name: "Destroyer", size: 1 },
];

const gridSize = 10;
const randomAxisValue = () => Math.floor(Math.random() * gridSize);
const randomDirection = () => (Math.floor(Math.random() * 2) ? "h" : "v");
const secuencialArray = size => new Array(size).fill().map((_, i) => i);

const getEmptyGrid = () => new Array(gridSize).fill().map(() => new Array(gridSize).fill(0));

const getRandomPosition = (ship, grid) => {
  const startX = randomAxisValue();
  const startY = randomAxisValue();
  const size = ship.size;
  const direction = randomDirection();
  const [endX, endY] =
    direction === "v" ? [startX, startY + size - 1] : [startX + size - 1, startY];
  const isValid =
    endY < gridSize &&
    endX < gridSize &&
    secuencialArray(size).every(
      i => (direction === "v" ? grid[startY + i][startX] : grid[startY][startX + i]) === 0
    );
  return isValid ? { x: startX, y: startY, direction } : getRandomPosition(ship, grid);
};

export const getRandomGrid = () => {
  const grid = getEmptyGrid();
  ships.forEach(ship => {
    const { x, y, direction } = getRandomPosition(ship, grid);
    secuencialArray(ship.size).forEach(i => {
      if (direction === "h") {
        grid[y][x + i] = ship.id;
      } else {
        grid[y + i][x] = ship.id;
      }
    });
  });
  return grid;
};
