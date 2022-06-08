const transpose = function(matrix) {
  let result = [];
  let colLength = matrix[0].length;
  let rowLength = matrix.length;

  for (let row = 0; row < colLength; row++) {
    if (colLength > 1) {
      result[row] = [];
    }
    for (let col = 0; col < rowLength; col++) {
      result[row][col] = matrix[col][row];
    }
  }

  return result;
};


//function recieves a 2D array of letters and words => Check to find word horizontally & vertically => return TRUE if word
// IS FOUND, return FALSE if word is NOT FOUND.

const wordSearch = (letters, word) => {

  if (typeof(word) !== "string") {
    return false;
  }
  const horizontalJoin = letters.map(ls => ls.join(''));
  //console.log('horizontalJoin', horizontalJoin)
  for (let l of horizontalJoin) {
    //console.log("l:", l);
    if (l.includes(word)) {
      return true;
    }
  }
  const lettersFlipped = transpose(letters);
  const verticalJoin = lettersFlipped.map(ls => ls.join(''));
  //console.log('verticalJoin', verticalJoin)
  for (let j of verticalJoin) {
    // console.log("j:", j);
    if (j.includes(word)) {
      return true;
    }
  }
  return false;

};


module.exports = wordSearch;