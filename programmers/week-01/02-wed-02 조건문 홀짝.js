function evenOdd(num) {
  if (num % 2 === 1) {
    console.log("Odd");
  } else if (num % 2 === 0) {
    console.log("Even");
  } else if (num === 0) {
    console.log("Zero");
  }
}

evenOdd(12);
evenOdd(15);
evenOdd(0);
