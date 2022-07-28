const getRandomCellIndex = (cur, size) => {

}

export function nextStep(cur = 0, size = 3) {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: cur }), 500)
  );
}
