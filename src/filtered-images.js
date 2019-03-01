export default function filteredImages(images, filter) {
    return images.filter(image => {
        const keyword = image.keyword === filter.keyword;
        return keyword;
    });
}