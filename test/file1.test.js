const test = QUnit.test; 
QUnit.module('DOMcontentTest');

function cardTemplateConstructor(cardfields) {
    const template = document.createElement('template');
    const html = `<li id = "photocard">
    <p>
        ${cardfields.title}
    </p>
    <img src= ${cardfields.url} >
    </li>`;
    template.innerHTML = html;
    const dom = template.content;
    return dom;

}

test('DOMcontentTest', function(assert){
//arrange
    const fields = {
        title: 'Words',
        url: 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg'
    };

    const expected = `<li id="photocard">
    <p> Words </p>
    <img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg"> </li>`;
    

//act
    const result = cardTemplateConstructor(fields);


//assert
    assert.htmlEqual(result, expected);
});