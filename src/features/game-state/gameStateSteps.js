function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const getRandomCellIndex = (index, size) => {

  const arr = [];
  // up
  let newIndex  = index - size;
  if (newIndex >= 0) {
    arr.push({index: newIndex, code: '\u2191'});
  }
  //down
  newIndex = index + size;
  if (newIndex < (size * size)) {
    arr.push({index: newIndex, code: '\u2193'});
  }
  //right
  newIndex = index + 1;
  if (newIndex < ((Math.trunc(index/size) + 1) * size)) {
    arr.push({index: newIndex, code: '\u2192'});
  }
  //left
  newIndex = index - 1;
  if (newIndex >= (Math.trunc(index/size) * size)) {
    arr.push({index: newIndex, code: '\u2190'});
  }

  return arr[getRandomInt(arr.length)];
}


export function nextStep(cur = 0, size = 3) {
  return new Promise((resolve) =>{
      const newIndex = getRandomCellIndex(cur, size);
      return resolve({ data: newIndex })
    }
  );
}
