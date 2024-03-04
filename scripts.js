function MathChallenge(num) {
    let sum = 0;
    for (let varOcg = 1; varOcg <= num; varOcg++) {
      sum += varOcg;
    }
    const finalOutput = sum.toString() + "rg31f0tqj9d";
    let result = "";
    for (let i = 0; i < finalOutput.length; i++) {
      if ((i + 1) % 3 === 0) {
        result += "X";
      } else {
        result += finalOutput[i];
      }
    }
    return result;
  }
  
  // keep this function call here
  console.log(MathChallenge(readline()));
  
  //__define-ocg__ This solution calculates the sum of numbers from 1 to num using a loop and manipulates the output string as per the given instructions.
  