import { registerImage } from './lazy'

const maximum = 16
const minimum = 1
const random = () => Math.floor(Math.random() * (maximum - minimum)) + minimum

const createImageNode = () => {

    const container = document.createElement('div')
    container.className = 'p-5 container'

    const wrapper = document.createElement('div')
    wrapper.className = 'gradient mx-auto'
    wrapper.style.minHeight = '300px'
    // wrapper.style.width = '400px'
    wrapper.style.borderRadius= '10px'

    const image = document.createElement('img')
    image.className = 'mx-auto'
    image.style.width = '100%'
    image.style.minHeight = '400px'
    image.style.objectFit ='cover'
    image.style.borderRadius = '10px'
    image.dataset.src = `images/${random()}.jpg` 
    
    wrapper.appendChild(image)
    container.appendChild(wrapper)

    return container
}

const mountNode = document.getElementById('images')

const addButton = document.querySelector('#add')
const cleanButton = document.querySelector('#clean')
const addImage = () => {
    const newImage = createImageNode()

    mountNode.appendChild(newImage)
    registerImage(newImage)
}

const removeImages = () => {
    [...mountNode.childNodes].forEach(child => {
        child.remove()
    })
}

addButton.addEventListener('click', addImage)
cleanButton.addEventListener('click', removeImages)

