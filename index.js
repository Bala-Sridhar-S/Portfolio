const projects = [
    {
        title: 'CSS Grid based Website',
        img: '1.png',
        link: 'https://bala-sridhar-s.github.io/CSS-Grid-Website/',
        lang: 'HTML CSS'
    },
    {
        title: 'Acme Web Solutions - Mockup',
        img: '2.png',
        link: 'https://bala-sridhar-s.github.io/Acme-Web-Solutions/',
        lang: 'HTML CSS'
    },
    {
        title: 'Glass UI Website - Mockup',
        img: '3.png',
        link: 'https://bala-sridhar-s.github.io/Glass-UI',
        lang: 'HTML CSS'
    },
    {
        title: 'Local Brewery Website - Mockup',
        img: '4.png',
        link: 'https://bala-sridhar-s.github.io/Brewery-website/',
        lang: 'HTML CSS'
    },
    {
        title: 'Atara Website - Mockup',
        img: '5.png',
        link: 'https://bala-sridhar-s.github.io/Atara-website/',
        lang: 'HTML CSS'
    },
    {
        title: 'Loruki Website - Mockup',
        img: '6.png',
        link: 'https://bala-sridhar-s.github.io/Loruki-website/',
        lang: 'HTML CSS'
    },
    {
        title: 'JavaScript Countdown Timer',
        img: '7.png',
        link: 'https://bala-sridhar-s.github.io/JavaScript-Countdown-Timer/',
        lang: 'JS'
    },
    {
        title: 'Image Comparison Slider',
        img: '8.png',
        link: 'https://bala-sridhar-s.github.io/Image-Comparison-Slider',
        lang: 'JS'
    },
    {
        title: 'Image Carousel',
        img: '9.png',
        link: 'https://bala-sridhar-s.github.io/Image-Carousel',
        lang: 'JS'
    },
    {
        title: 'Music Player',
        img: '10.png',
        link: 'https://bala-sridhar-s.github.io/Music-Player/',
        lang: 'JS'
    },
    {
        title: 'JS Todo List',
        img: '11.png',
        link: 'https://bala-sridhar-s.github.io/Todo-List/',
        lang: 'JS'
    },
    {
        title: 'Pizza Project using PHP',
        img: '12.png',
        link: 'https://bala-pizza-project.herokuapp.com/index.php',
        lang: 'PHP'
    },
    {
        title: 'Realtime Chat App PHP',
        img: '13.png',
        link: 'https://bala-chat-app.herokuapp.com/',
        lang: 'PHP'
    }
]

// Selecting the required DOM elements
const cat1 = document.querySelector('#cat1')
const cat2 = document.querySelector('#cat2')
const cat3 = document.querySelector('#cat3')
const cat4 = document.querySelector('#cat4')

const flex = document.querySelector('.flex')

// Setting up the initial projects section
const output = (array) => {
    array.map(project => (
        flex.innerHTML += `
        <div class="card">
            <a href=${ project.link } target="_blank">
                <img src=${ project.img }>
                <p class="img-des"><span>&lt;</span> ${ project.title } <span>/&gt;</span></p>
            </a>
        </div>
    `
    ))
}

output(projects)

// Clicking the all button
cat1.addEventListener('click', () => {
    flex.innerHTML = ''
    cat1.classList.add('active')
    cat2.classList.remove('active')
    cat3.classList.remove('active')
    cat4.classList.remove('active')

    output(projects)
})

// Clicking the HTML & CSS button
cat2.addEventListener('click', () => {
    const newProj = projects.filter(project => project.lang === "HTML CSS")

    flex.innerHTML = ''
    cat1.classList.remove('active')
    cat2.classList.add('active')
    cat3.classList.remove('active')
    cat4.classList.remove('active')

    output(newProj)
})

// Clicking the JS button
cat3.addEventListener('click', () => {
    const newProj = projects.filter(project => project.lang === "JS")

    flex.innerHTML = ''
    cat1.classList.remove('active')
    cat2.classList.remove('active')
    cat3.classList.add('active')
    cat4.classList.remove('active')

    output(newProj)
})

// Clicking the HTML & CSS button
cat4.addEventListener('click', () => {
    const newProj = projects.filter(project => project.lang === "PHP")

    flex.innerHTML = ''
    cat1.classList.remove('active')
    cat2.classList.remove('active')
    cat3.classList.remove('active')
    cat4.classList.add('active')

    output(newProj)
})
