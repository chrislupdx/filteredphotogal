const test = QUnit.test; 
QUnit.module('Filtertest');
import filteredImages from '../src/filtered-images.js';
import inputToFilterParams from '../src/inputToFilterParams.js';

test('keyword filter test /whether i can filter objects out', function(assert){
//arrange
    const filter = {
        keyword: 'unicorn'
    };

    const filtered = [
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

    const result = inputToFilterParams(images, filter);
   
//act


//assert
    assert.deepEqual(filtered, result);
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