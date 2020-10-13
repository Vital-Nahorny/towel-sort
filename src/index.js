
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let array = [];
  if (matrix === undefined) {
      return [];
    }
  for (i=0; i < matrix.length; i++) {
    if (i % 2 === 0) {
      array.push(matrix[i]);
    } else {array.push(matrix[i].reverse());}
  }
  return array.flat();
}
