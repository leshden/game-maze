export function nextStep(cur = 1) {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: cur }), 500)
  );
}
