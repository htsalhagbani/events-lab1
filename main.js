let text=document.getElementById('Text');

let change=document.getElementById('NewText');
change.addEventListener('click',()=>{
    text.textContent="Noura";
})

let FontTextAdd=document.getElementById('FontTextAdd');
FontTextAdd.addEventListener('click',()=>{
    text.style.fontSize='100px';
})

let FontTextMin=document.getElementById('FontTextMin');
FontTextMin.addEventListener('click',()=>{
    text.style.fontSize='50px';
})

let ChangeColor=document.getElementById('ChangeColor');
ChangeColor.addEventListener('click',()=>{
    text.style.color='green';
})

let ChangeBg=document.getElementById('ChangeBg');
ChangeBg.addEventListener('click',()=>{
    text.style.backgroundColor='gray';
})


let imgC = document.getElementsByClassName('imagc')[0];
let images = [
    'https://www.w3schools.com/w3images/nature.jpg',
    'https://www.w3schools.com/w3images/lights.jpg'

];
let Index=0;
let ChangeImg=document.getElementById('ChangeImg');
ChangeImg.addEventListener('click',()=>{
    const image = document.createElement('img');
    image.src = images[Index]; 
    image.alt = 'Image';
    imgC.appendChild(image);

    Index++;
})

