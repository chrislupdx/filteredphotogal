export default function hornFilteredImages(images, filter) {
    const selectedHornPics = images.filter(function(image) {
        const hasFilter = !filter.horns || image.horns >= filter.horns;
        return hasFilter;
    });   
    return selectedHornPics;
}