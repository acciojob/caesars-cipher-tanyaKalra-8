// Your Script here.

const lookup = {
  'A': 'N','B': 'O','C': 'P','D': 'Q',
  'E': 'R','F': 'S','G': 'T','H': 'U',
  'I': 'V','J': 'W','K': 'X','L': 'Y',
  'M': 'Z','N': 'A','O': 'B','P': 'C',
  'Q': 'D','R': 'E','S': 'F','T': 'G',
  'U': 'H','V': 'I','W': 'J','X': 'K',
  'Y': 'L','Z': 'M', '?': '?', ',': ','
};

function rot13(encodedStr){
	
   let decodedArr = []; 
	// Your Result goes here
	// Only change code below this line
	
	for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);
    
    if (charCode >= 65 && charCode <= 90) {
      // Shift the character code by 13 places
      charCode = ((charCode - 65 + 13) % 26) + 65;
    }
    
    decodedArr.push(String.fromCharCode(charCode));
  }
  
  return decodedArr;

  //return decodedArr
  return ;
}

// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(rot13("SERR YBIR? NPPVBWBO"));

module.exports = rot13;
