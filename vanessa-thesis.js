let a = 440;

// > can you write a function that generates the numbers of the fractions
function generateFractionTerms(n) {
  let terms = [];
  for (let i = 0; i < n; i++) {
    let numerator = Math.pow(3, i);
    let denominator = 1;

    // Keep dividing by 2 until numerator/denominator is between 1 and 2
    while (numerator / denominator >= 2) {
      denominator *= 2;
    }

    terms.push({ numerator, denominator });
  }
  return terms;
}

// Generate original scale using the fraction terms function
function generateOriginalUpTo(n) {
  let terms = generateFractionTerms(n);
  let scale = [0, a];
  for (let term of terms.slice(1)) {
    scale.push(a * term.numerator / term.denominator);
  }
  scale.push(a * 2);
  return scale;
}

let hundoOriginal = generateOriginalUpTo(100);

// results in array in "original" order, but it starts with 0 so the index numbers line up with the thesis tables
function makeScale(n) {
  return hundoOriginal.slice(0, n+1).concat(a*2); //fix off by one error. 5 should result in pentatonic scale, so 6 items in array
}

// this function gets rid of the 0 and also turns it into a string that freq() can take!!!
function makeOrdered(n) {
  let scale = makeScale(n);
  let sorted = scale.slice(1).sort((a, b) => a - b);
  return cat(...sorted);
}

setcpm(110);
freq(makeOrdered(5));
