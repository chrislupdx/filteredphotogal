const test = QUnit.test;
QUnit.module('test filter parameters successfully passed');
import images from '../data/images.js';


function fetchFilteredPics(filterparams) {
    keyWordInput = Document.getElementById('keywordInput');
    console.log(keyWordInput);
    const filteredImages = images.filter(function(image) {
        return image.keyword === keyWordInput;
    });    
};

    const dummyData = {
        {
            'url': 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg',
            'title': 'UniWhal',
            'description': 'A unicorn and a narwhal nuzzling their horns',
            'keyword': 'narwhal',
            'horns': 1
        },
        {
            'url': 'https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80',
            'title': 'Rhino Family',
            'description': 'Mother (or father) rhino with two babies',
            'keyword': 'rhino',
            'horns': 2
        }
    };

    //use your dummy data in your test

    const expected = [
        {
            'url': 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg',
            'title': 'UniWhal',
            'description': 'A unicorn and a narwhal nuzzling their horns',
            'keyword': 'narwhal',
            'horns': 1
        }
    ]

    test('can print the keyword requested pics', function (assert) {
        //arrange

       

        //act
        const result = fetchFilteredPics(dummyData);

        //assert
        assert.deepEqual(result, expected);
    });