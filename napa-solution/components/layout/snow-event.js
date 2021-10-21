function randomRange(min, max){
    const rand = Math.random();
    const randomRange = min + Math.floor(rand * ((max - min) + 1));
    return randomRange;
}
export default function isSnow(){
    const date = new Date()

    const snows = document.createElement('div')
    snows.classList.add("snows")

    if(date.getDate()===21 && date.getMonth()===9){
        for(let i=0;i<150;i++){
            const div = document.createElement('div')
            div.classList.add("snow")

            const randomX = Math.random() * 100
            const randomOffset = randomRange(-100000, 100000) * 0.0001
            const randomXEnd = randomX + randomOffset
            const randomXEndYoyo = randomX + (randomOffset / 2)
            const randomYoyoTime = randomRange(10000, 80000) / 100000
            const randomYoyoY = randomYoyoTime * 100
            const min = Math.random()*.7 + .1
            const randomScale = min>.7? .7 : min
            const fallDuration = randomRange(10, 30) * 1 *1000
            const fallDelay = Math.random() * -30 * 1000

            div.style.transform = `translate(${randomX}vw, -10px) scale(${randomScale})`
            const minO = Math.random() + .3
            div.style.opacity = minO>1? 1 : minO
            div.animate(
                [
                    { transform: `translate(${randomXEnd}vw, ${randomYoyoY}vh) scale(${randomScale}) rotate(45deg)` },
                    { transform: `translate(${randomXEndYoyo}vw, 100vh) scale(${randomScale}) rotate(45deg)` }
                ],
                {
                    duration: fallDuration,
                    iterations: Infinity,
                    delay: fallDelay,
                    easing: "linear",
                }
            );
            snows.appendChild(div)
        }

        document.body.appendChild(snows)
        // document.body.style.background = "radial-gradient(ellipse at bottom, #e1e3e6 0%, #b0cae3 100%)"
    }
}