let totalImagesLoaded = 0
let totalImages = 0
const isIntersecting = (entry) => {
    return entry.isIntersecting // true  viewport
}

const loadImage = (entry) => {
    totalImagesLoaded += 1;
    // console.log(`Total imagenes : ${totalImages} \nTotal Imagenes Cargadas : ${totalImagesLoaded}`)
  const container = entry.target
  const image = container.querySelector('img')
  const url = image.dataset.src
  

  //unregister image
  observer.unobserve(container)

  image.onload = () => {
      container.classList.remove('gradient')
      image.parentElement.classList.add('shadow')
  }
  //load image
  image.src = url
} 

const observer = new IntersectionObserver((entries) => {
    entries
      .filter(isIntersecting)
      .forEach(loadImage)
})

export const registerImage = (image) => {
    //Intersection Observer -> observer(image)
    totalImages += 1;
    // console.log(`Total imagenes : ${totalImages} \nTotal Imagenes Cargadas : ${totalImagesLoaded}`)
    observer.observe(image)
} 