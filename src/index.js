import images from '../data/images.js';
import cardTemplateConstructor from './cardTemplateConstructor.js';

//render card to UL

const photoGalUl = document.getElementById('photogallery');

//use forEach to go through the images, render to UL as Li components
images.forEach(function(image) {
    const dom = cardTemplateConstructor(image);
    photoGalUl.appendChild(dom);
});