
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', (e) => {
        e.stopPropagation();

        cards.forEach(otherCard => {
            if (otherCard !== card) {
                otherCard.querySelector('.description').classList.add('hidden');
                otherCard.classList.remove('z-50');
            }
        });

        const description = card.querySelector('.description');
        description.classList.toggle('hidden');
        card.classList.toggle('z-50');
    });
});


document.addEventListener('click', () => {
    cards.forEach(card => {
        card.querySelector('.description').classList.add('hidden');
    });
});


//

const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
            entry.target.classList.remove('section-hidden');
            observer.unobserve(entry.target); // dispara solo una vez
        }
    });
}, {
    threshold: 0.1
});

sections.forEach(section => {
    observer.observe(section);
});


// INTRO

AOS.init();

// typed = new Typed('#typed-text', {
//     strings: [
//         'Diseñador Web',
//         'Desarrollador Frontend',
//         'Community Manager',
//         'Encargado de depósito',
//         'Bartender',
//         'Futbolista'
//     ],
//     typeSpeed: 50,
//     backSpeed: 25,
//     backDelay: 1500,
//     loop: true
// });

// estilos tailwind
var typed = new Typed("#typed-text", {
    strings: [
        'desarrollador Full Stack',
        'desarrollador web',
    ],
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 1500,
    loop: true
});

document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
});

// ------------

let words = document.querySelectorAll(".word")

words.forEach((word) => {
    let letters = word.textContent.split("")

    word.textContent = ""

    letters.forEach((letter) => {
        let span = document.createElement("span")
        span.textContent = letter
        span.className = "letter"
        word.append(span)
    })
})

let currentWordIndex = 0

let maxWordIndex = words.length - 1

// words[currentWordIndex].style.opacity = "1"


// let changeText = () => {
//     let currentWord = words[currentWordIndex]
//     let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1]

//     Array.from(currentWord.children).forEach((letter, i) => {
//         setTimeout(() => {
//             letter.className = "letter out"
//         }, i * 80)
//     })

//     nextWord.style.opacity = "1"
//     Array.from(nextWord.children).forEach((letter, i) => {
//         letter.className = "letter behind"
//         setTimeout(() => {
//             letter.className = "letter in"
//         }, 340 + i * 80)
//     })

//     currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1
// }

// changeText()
// setInterval(changeText, 3000)

// circle skill

const circles = document.querySelectorAll('.circle')
circles.forEach(elem => {
    var dots = elem.getAttribute("data-dots")
    var marked = elem.getAttribute("data-percent")
    var percent = Math.floor(dots * marked / 100)
    var points = ""
    var rotate = 360 / dots

    for (let i = 0; i < dots; i++) {
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`
    }
    elem.innerHTML = points

    const pointsMarked = elem.querySelectorAll('.points')
    for (let i = 0; i < percent; i++) {
        pointsMarked[i].classList.add('marked')
    }
})

// mix it up 

// var mixer = mixitup('.portfolio-gallery')

// active menu
let menuLi = document.querySelectorAll('header ul li a')
let section = document.querySelectorAll('section')

function activeMenu() {
    let len = section.length
    while (--len && window.scrollY + 97 < section[len].offsetTop) { }
    menuLi.forEach(sec => sec.classList.remove("active"))
    menuLi[len].classList.add("active")
}

activeMenu()

window.addEventListener("scroll", activeMenu)

// sticky
const header = document.querySelector("header")
window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 50)
})

// toggle navbar
let menuIcon = document.querySelector("#menu-icon")
let navlist = document.querySelector(".navlist")

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x")
    navlist.classList.toggle("open")
}

window.onscroll = () => {
    menuIcon.classList.remove("bx-x")
    navlist.classList.remove("open")
}

// // typed
// const typed = new Typed('#element', {
//     strings: ['MI STACK PRINCIPAL'],
//     typeSpeed: 85,
// });

// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add("show-items")
//         } else {
//             entry.target.classList.remove("show-items")
//         }
//     })
// })

// const scrollScale = document.querySelectorAll(".scroll-scale")
// scrollScale.forEach((el) => observer.observe(el))

// const scrollBottom = document.querySelectorAll(".scroll-bottom")
// scrollScale.forEach((el) => observer.observe(el))

// const scrollTop = document.querySelectorAll(".scroll-top")
// scrollScale.forEach((el) => observer.observe(el))


