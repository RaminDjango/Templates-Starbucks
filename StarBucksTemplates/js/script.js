let BackGroundChange = document.getElementById('colorBackGorund') 
let ImagePut = document.getElementById('replaceImage')
let OneCofee = document.getElementById('one')
OneCofee.addEventListener('click', e=> {
    ImagePut.src = '/img/img1.png'
    BackGroundChange.style.backgroundColor = '#00704A'
    BackGroundChange.style.transition = 'all 2s'

})

let TwoCofee = document.getElementById('two')
TwoCofee.addEventListener('click', e=> {
    ImagePut.src = '/img/img2.png'
    BackGroundChange.style.backgroundColor = '#D1A98B'
    BackGroundChange.style.transition = 'all 2s'

})


let TreeCofee = document.getElementById('tree')
TreeCofee.addEventListener('click', e=> {
    ImagePut.src = '/img/img3.png'
    BackGroundChange.style.backgroundColor = '#C84C65'
    BackGroundChange.style.transition = 'all 2s'

})
