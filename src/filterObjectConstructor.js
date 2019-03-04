const grabForm = document.getElementById('searchFilters');

export default function filterObjectConstructor(callBack) {
    grabForm.addEventListener('submit', event => {
        event.preventDefault();
        const formData = new FormData(grabForm);
        const filterObject = {
            searchWord: formData.get('userStringSearch'),
            hornNumber: formData.get('hornNumber'),
        };
        callBack(filterObject);
    });
}