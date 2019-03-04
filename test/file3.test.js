import hornFilteredImages from '../src/hornFilteredImages.js';
import inputToFilterParams from '../src/inputToFilterParams.js';

const test = QUnit.test; 
QUnit.module('hornFiltertest');



test('horn filter test /whether I can filter objects out', function(assert){
    //arrange
    const filter2 = {
        horns: 2
    };
    const filtered2 = [
        {
            'title': 'Rhino Family',
            'keyword': 'unicorn',
            'horns': 2
        }
    ];

    const result = inputToFilterParams(images, filter2);
    //act
    //assert
    assert.deepEqual(filtered2, result);
});


const images = [
    {
        'title': 'UniWhal',
        'keyword': 'narwhal',
        'horns': 1
    },
    {
        'title': 'Rhino Family',
        'keyword': 'unicorn',
        'horns': 2
    },
    {
        'title': 'Unicorn Head',
        'keyword': 'unicorn',
        'horns': 1
    }
];



//lookup hornkeyword and look at number


