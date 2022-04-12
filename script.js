const left = document.querySelector('.left')
const right = document.querySelector('.right')
const container = document.querySelector('.container')
const loadText = document.querySelector('.loading-text')


left.addEventListener('mouseenter',() => container.classList.add('hover-left'))
left.addEventListener('mouseleave',() => container.classList.remove('hover-left'))

right.addEventListener('mouseenter',() => container.classList.add('hover-right'))
right.addEventListener('mouseleave',() => container.classList.remove('hover-right'))


right.addEventListener('mouseenter',() => container.classList.add('split-left'))
right.addEventListener('mouseleave',() => container.classList.remove('split-left'))


let load =0

let int = setInterval(blurring,15)

function blurring(){
    load++

    if(load>99){
        clearInterval(int)
    }
    loadText.innerText=load +"%"

    loadText.style.opacity= 1 - (load/100)

    loadText.style.filter= blur(0)

    container.style.filter = `blur(${scale(load, 0, 100, 20, 0)}px)`

}

const scale = (number, inMin, inMax, outMin, outMax) => {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
