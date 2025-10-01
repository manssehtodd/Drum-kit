for (var i = 0; i<document.querySelectorAll('.drum').length; i++) {
document.querySelectorAll('.drum')[i].addEventListener('click', function () {
var buttonInnerHTML = this.innerHTML;

makeSound(buttonInnerHTML);

buttonAnimation(buttonInnerHTML);

})
}


document.addEventListener("keydown", function(event) {
    makeSound(event.key);


    buttonAnimation(event.key);
});

function makeSound(key) {
    switch  (key) {
        case 'w':
           var soundSource = "sounds/crash.mp3";
            var crash = new Audio(soundSource);
            crash.play(); 
            break;

        case 'a':
            var soundSource = "sounds/kick-bass.mp3";
            var kickBass = new Audio(soundSource);
            kickBass.play();
            break;

        case 's':
            var soundSource = "sounds/snare.mp3";
            var snare = new Audio(soundSource);
            snare.play();
            break;

        case 'd':
            var soundSource = "sounds/tom-1.mp3";
            var tom1 = new Audio(soundSource);
            tom1.play();
            break;

        case 'j':
            var soundSource = "sounds/tom-2.mp3";
            var tom2 = new Audio(soundSource);
            tom2.play();
            break;

        case 'k':
            var soundSource = "sounds/tom-3.mp3";
            var tom3 = new Audio(soundSource);
            tom3.play();
            break;

        case 'l':
           var soundSource = "sounds/tom-4.mp3";
            var tom4 = new Audio(soundSource);
            tom4.play();
            break;

        default:
            console.log(KEY)
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector('.' + currentKey);

    activeButton.classList.add('pressed')

    setTimeout(function() {
        activeButton.classList.remove('pressed')
    }, 100);

}
















/* var soundSource = "sounds/tom-1.mp3";
var myAudio = new Audio(soundSource);
myAudio.play(); */