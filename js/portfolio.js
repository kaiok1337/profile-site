let id = false;
const name = {
    alphabet: ['Ø', 'K', 'a','9', 'c', 'd', 'e', 'f', 'g', 'p', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '!', '@', '#', '$', '%', '&', '!', '@', '#', '$', '%', '&','!', '@', '#', '$', '%', '&','!', '@', '#', '$', '%', '&','!', '@', '#', '$', '%', '&','!', '@', '#', '$', '%', '&','!', '@', '#', '$', '%', '&','!', '@', '#', '$', '%', '&','!', '@', '#', '$', '%', '&','!', '@', '#', '$', '%', '&','!', '@', '#', '$', '%', '&','!', '@', '#', '$', '%', '&','!', '@', '#', '$', '%', '&','!', '@', '#', '$', '%', '&','!', '@', '#', '$', '%', '&','!', '@', '#', '$', '%', '&','!', '@', '#', '$', '%', '&','!', '@', '#', '$', '%', '&','!', '@', '#', '$', '%', '&','!', '@', '#', '$', '%', '&','!', '@', '#', '$', '%', '&','!', '@', '#', '$', '%', '&','!', '@', '#', '$', '%', '&','!', '@', '#', '$', '%', '&','!', '@', '#', '$', '%', '&','!', '@', '#', '$', '%', '&'],
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
        letter[0].innerText = '5'
            for (i = 0; i < name.alphabet.length; i++) {
                if (name.alphabet[i] === letter[1]) {
                    console.log('yup');
                    ((i) => {
                        setTimeout(() => {
                        (() => {name.shuffle(name.alphabet)})()
                        letter[0].innerText = letter[1];
                         }, i * 40)})(i)
                    return ;
                    } else {
                        ((i) => {
                            setTimeout(() => {
                            (() => {name.shuffle(name.alphabet)})()
                            letter[0].innerText = name.alphabet[i];
                             }, i * 40)})(i)
                }
        }
        
    }
} 
    



window.onload = name.changeLetter(name.capK);
window.onload = name.changeLetter(name.littleA);
window.onload = name.changeLetter(name.littleI);
window.onload = name.changeLetter(name.bigO);
window.onload = name.changeLetter(name.littleK);
window.onload = name.changeLetter(name.littleL);
window.onload = name.changeLetter(name.littleE);
window.onload = name.changeLetter(name.firstS);
window.onload = name.changeLetter(name.secondS);
window.onload = name.changeLetter(name.littleO);
window.onload = name.changeLetter(name.littleN);

// const home = document.getElementById('HOME')

// home.addEventListener('click', console.log('spoop'));

//ADD EVENT LISTENER FOR TEXT RANDOMIZER