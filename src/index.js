import images from '../data/images.js';
import cardTemplateConstructor from './cardTemplateConstructor.js';
import filterObjectConstructor from './filterObjectConstructor.js';
import hornFilteredImages from './hornFilteredImages.js';
import filteredImages from './filtered-images.js';

const photoGalUl = document.getElementById('photogallery');

function cleanGallery(){
    while(photoGalUl.children.length > 0){
        photoGalUl.lastElementChild.remove();
    }
}

function loadPics(images) {
    cleanGallery();
    images.forEach(function(image) {
        const dom = cardTemplateConstructor(image);
        photoGalUl.appendChild(dom);
    });
}

loadPics(images);

filterObjectConstructor(filter => {
    const filterSelection =  //fiterobject constructor
    loadPics(filterSelection);
});