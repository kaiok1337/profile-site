const bigName = {
    alphabet: ['Ø', 'K', 'a','9', 'l', 'l', 'e', 's', 'g', 'p', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 's', 's', 'a', 's', 'n', 'a', 'k', 'w', 'x', 'Ø', 'z', '!', '@', '#', '$', '%', 'e', '!', 'k', 'l', '$', '%', '&','!', '@', '#', '$', '%', '&','!', '@', '#', '$', 'a', 'e','!', '@', '#', '$', '%', 'a','i', '@', '#', '$', '%', '&','o', '@', '#', '$', 'e', '&','!', '@', 'K', 'n', '%', '&','!', 'Ø', '#', '$', '%', '&','!', 'e', '#', '$', '%', '&','!', 's', '#', '$', '%', 'k','!', '@', 'o', '$', '%', '&','!', '@', '#', '$', 'e', 'e','!', '@', 'l', '$', '%', 'a','!', '@', 'e', '$', 'K', '&','o', '@', '#', '$', 'a', '&','!', '@', 'i', 'n', '%', 'k','!', 'Ø', 'o', '$', '%', '&','!', '@', '#', '$', '%', 'Ø','i', '@', '#', 'K', '%', '&','!', 's', '#', '$', '%', '&','!', '@', '#', '$', 's', '&','!', '@', '#', 'n', '%', '&','!', '@', '#', '$', '%', '&','!', '@', '#', '$', '%', 'Ø','!', '@', '#', '$', '%', '&'],
    capK: [document.getElementById('capK'), 'K'],
    littleA: [document.getElementById('littleA'), 'a'],
    littleI: [document.getElementById('littleI'), 'i'],
    bigO: [document.getElementById('bigO'), 'Ø'],
    littleK: [document.getElementById('littleK'), 'k'],
    littleL: [document.getElementById('littleL'), 'l'],
    littleE: [document.getElementById('littleE'), 'e'],
    firstS: [document.getElementById('firstS'), 's'],
    secondS: [document.getElementById('secondS'), 's'],
    littleO: [document.getElementById('littleO'), 'o'],
    littleN: [document.getElementById('littleN'), 'n'],
    shuffle: (array) => {
        let currentIndex = array.length,  randomIndex;
        while (currentIndex != 0) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
        return array;
      },
    changeLetter: (letter) => {
        letter[0].innerText = '0'
            for (let i = 0; i < bigName.alphabet.length; i++) {
                (() => {bigName.shuffle(bigName.alphabet)})()
                if (bigName.alphabet[i] === letter[1]) {
                    console.log('yup');
                    ((i) => {
                        setTimeout(() => {
                        letter[0].innerText = letter[1];
                         }, i * 5)})(i)
                    return ;
                    } else {
                        ((i) => {
                            setTimeout(() => {
                            (() => {bigName.shuffle(bigName.alphabet)})()
                            letter[0].innerText = bigName.alphabet[i];
                             }, i * 5)})(i)
                }
        }
        
    }
} 

window.onload = bigName.changeLetter(bigName.capK);
window.onload = bigName.changeLetter(bigName.littleA);
window.onload = bigName.changeLetter(bigName.littleI);
window.onload = bigName.changeLetter(bigName.bigO);
window.onload = bigName.changeLetter(bigName.littleK);
window.onload = bigName.changeLetter(bigName.littleL);
window.onload = bigName.changeLetter(bigName.littleE);
window.onload = bigName.changeLetter(bigName.firstS);
window.onload = bigName.changeLetter(bigName.secondS);
window.onload = bigName.changeLetter(bigName.littleO);
window.onload = bigName.changeLetter(bigName.littleN);

// const home = document.getElementById('HOME')

// home.addEventListener('click', console.log('spoop'));

//ADD EVENT LISTENER FOR TEXT RANDOMIZER