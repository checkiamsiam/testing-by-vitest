export function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Division by zero");
  }
  if(a < 0){
    return -a / b;
  }
  return a / b;
}
