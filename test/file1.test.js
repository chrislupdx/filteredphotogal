const test = QUnit.test; 
QUnit.module('DOMcontentTest');

test('DOMcontentTest', function(assert){
//arrange
    const image = {
        title: 'words',
        url: 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg'
    };

const expected = '';
//act

//assert
    assert.htmlEqual(result, expected);
});