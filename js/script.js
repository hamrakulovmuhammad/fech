let BACE_URL = 'https://dummyjson.com/users'
fetch(BACE_URL)
    .then(res => res.json())
    .then(data => reload(data.users))
let form = document.querySelector('.form')
let one = document.querySelector('.one')
let two = document.querySelector('.two')
let theree = document.querySelector('.theree')
let todos = []

form.onsubmit = (evenet) => {
    evenet.preventDefault()

    let mass = {
        id: Math.random(),
        isDone: false
    }
    let fm = new FormData(evenet.target)
    fm.forEach((value, key) => {
        mass[key] = value
    })
    todos.push(mass)
    console.log(todos);
}

function reload(arr) {
    for (let i of arr) {
        let box = document.createElement('div')
        let name = document.createElement('h1')
        let img = document.createElement('img')
        let line = document.createElement('div')
        let h2 = document.createElement('h2')
        let p = document.createElement('p')
        let flex = document.createElement('div')


        box.classList.add('box')
        name.innerHTML = i.firstName
        img.src = i.image
        line.classList.add('line')
        h2.innerHTML = 'Возраст'
        p.innerHTML = i.age
        flex.classList.add('flex')

        box.append(flex, line)
        flex.append(name, img)
        line.append(h2, p)

        if (i.age <= 25) {
            one.append(box)
        } else if (i.age <= 50) {
            two.append(box)
        } else {
            theree.append(box)

        }


    }
}
