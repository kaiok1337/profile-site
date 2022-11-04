const alphabet = ['a','b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '!', '@', '#', '$', '%', '&',]

const mainO = document.querySelector('#mainO')

function changeO() {
    for (i = 0; i < alphabet.length; i++) {
        setTimeout(, 500);
        console.log(i)
    }
    
} 
mainO.addEventListener('click', changeO)

function butts() {setTimeout(console.log('butts'), 5000)}