import images from '../data/images.js';


const formNode = document.getElementById('searchFilters');
function returnImagesFromFilterParams(images, filterObj) {
    const hasFilter = !filterObj.horns || image.horns >= filterObj.horns;

    const hasKeyword = 

     
}


function filterImages(images, filter) {
    const filteredImages = images.filter(function(image) {
        const hasKeyword = !filter.keyword || item.keyword === filter.keyword;

        const hasHorns = !filter.horns || item.horns >= filter.horns;

        return hasKeyword && hasHorns;
    });
}