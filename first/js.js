window.addEventListener('keydown', function (ev) {
    const audio = this.document.querySelector(`audio[data-key="${ev.keyCode}"]`);
    const currentKey = this.document.querySelector(`.key[data-key="${ev.keyCode}"]`);


    // console.log(audio);
    // console.log(currentKey);
    if (!audio) return;
    audio.currentTime = 0;// c прерыванием
    audio.play()
    currentKey.classList.toggle("playing");



});

function removeTransition(e) {
    if (e.propertyName !== "transform") {
        return;
    }
    //this==el
    this.classList.remove("playing");
}





const allKeys = document.querySelectorAll(".key");
console.log(allKeys);



allKeys.forEach(el => el.addEventListener("transitionend", removeTransition));




// (e) => {
//     if (e.propertyName !== "transform") return;
//     el.classList.remove("playing");
// }))

