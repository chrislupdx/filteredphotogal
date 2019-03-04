export default function inputToFilerParams(images, filter) {
    return images.filter(function(item){
        const hasKeyword = !filter.keyword || item.keyword === filter.keyword;

        const hasHorns = !filter.horns || item.horns >= filter.horns;

        return hasKeyword && hasHorns;
    });
}

