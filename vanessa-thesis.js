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

// Generate 41-note scale using the fraction terms function
function generateScale(n) {
  let terms = generateFractionTerms(n);
  let scale = [0, a];
  for (let term of terms.slice(1)) {
    scale.push(a * term.numerator / term.denominator);
  }
  scale.push(a * 2);
  return scale;
}

let hundoOriginal = generateScale(100);

function makeScale(n) {
  return hundoOriginal.slice(0, n).concat(a*2);
}


function makeOrdered(n) {
  let scale = makeScale(n);
  let sorted = scale.slice(1).sort((a, b) => a - b);
  return cat(...sorted);
}

setcpm(110);
freq(makeOrdered(41));
