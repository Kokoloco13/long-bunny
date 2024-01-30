const wrapper = document.querySelector("#wrapper")
const neck = document.querySelector(".neck")

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if(entry.intersectionRatio > 0){
            injectNeck(entry)
        }
    })
},
{ rootMargin: "0px 0px 200% 0px"}
)

function injectNeck(entry) {
    //console.log("The entry is on screen!")
    observer.unobserve(entry.target);

    const clonedLegs = neck.cloneNode(true);
    wrapper.appendChild(clonedLegs);
    observer.observe(clonedLegs)
}

observer.observe(neck);

//if you are reading this then hello!
