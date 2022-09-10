let brandsContainer = document.querySelector('.brands__container');

let btn = document.querySelector('.btn');
let btnVisible = document.querySelector('.btn__box-visible')
let btnHidden = document.querySelector('.btn__box-hidden')

let animation = brandsContainer.animate([
    {height: '160px'},
    {height: '248px'}
], {
    duration: 1200,
    iterations: 1,
    easing: 'ease-in-out',
    fill: 'backwards'
})

animation.pause();

let i = 0;
function playAnimation() {
    if (i % 2 === 0) {
        btnVisible.classList.add('hidden');
        btnHidden.classList.remove('hidden');
        animation.playbackRate = 1;
        animation.play();
        i++;
    } else {
        btnVisible.classList.remove('hidden');
        btnHidden.classList.add('hidden');
        animation.playbackRate = -1;
        animation.play();
        i++;
    }
}

btn.addEventListener('click', playAnimation);
