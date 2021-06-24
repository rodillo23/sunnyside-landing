const button = document.querySelector('#hamburger')
const menu = document.querySelector('.menu')
const facebook = document.querySelector('.facebook')
const instagram = document.querySelector('.instagram')
const pinterest = document.querySelector('.pinterest')
const twitter = document.querySelector('.twitter')
const firstPicture = document.querySelector('.one')
const secondPicture = document.querySelector('.two')
const thirdPicture = document.querySelector('.three')
const fourthPicture = document.querySelector('.four')

//change image gallery depending of the size screen
let media = window.matchMedia('(min-width:900px)')

const changeImage = (mql) => {
  if(mql.matches){
    console.log('true');
    
    firstPicture.setAttribute('src', './images/desktop/image-gallery-milkbottles.jpg')

    secondPicture.setAttribute('src', './images/desktop/image-gallery-orange.jpg')

    thirdPicture.setAttribute('src', './images/desktop/image-gallery-cone.jpg')

    fourthPicture.setAttribute('src', './images/desktop/image-gallery-sugarcubes.jpg')
  }else{
    firstPicture.setAttribute('src', './images/mobile/image-gallery-milkbottles.jpg')

    secondPicture.setAttribute('src', './images/mobile/image-gallery-orange.jpg')

    thirdPicture.setAttribute('src', './images/mobile/image-gallery-cone.jpg')

    fourthPicture.setAttribute('src', './images/mobile/image-gallery-sugar-cubes.jpg')
  }
}

media.addListener(changeImage)
  
changeImage(media)

//social networks hover
const social = [facebook, instagram, pinterest, twitter]

const handleHover = (e)=>{
  e.target.setAttribute('src', `./images/icon-${e.target.alt}-hov.svg`)  
}

const handleLeave = (e)=>{
  e.target.setAttribute('src', `./images/icon-${e.target.alt}.svg`)  
}

social.forEach( icon => {
  icon.addEventListener('mouseover', handleHover)
})

social.forEach(icon =>{
  icon.addEventListener('mouseleave', handleLeave)
})

//show / hide menu 
const showMenu = ()=>{
  menu.classList.toggle('hide')
}

button.addEventListener('click', showMenu)


