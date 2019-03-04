//when human hits fields, return filter object

cont test = QUnit.test;
QUnit.module('user input => filter object return test')




test('user input  => filter object return test', function(assert){
    //arrange
    const userInput = [];

    const expected = filterObject = {
        'keyword': 'narwhal',
        'horns': 1
    }

    //act
    const result = filterObjectConstructor(userInput);
    //assert
        assert.htmlEqual(result, expected);
});

//the function needs an event listner and must be capbale of outputitng an object from the contents of the event listener and passing that object to a callback function
//having trouble wrapping my head around the input -> filtersearchobject