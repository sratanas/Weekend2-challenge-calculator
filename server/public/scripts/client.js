console.log('client.js is loaded');

$(document).ready(function(){
    console.log('JQ');
    // $('#addButton').on('click', addPush); //put this in a module
    // $('#subtractButton').on('click', subtractPush);
    // $('#multiplyButton').on('click', multiplyPush);
    // $('#divideButton').on('click', dividePush);


    $('#addButton').on('click', function () {
        console.log('hit the add button')
        $.ajax({
            method: 'POST', // standard to capitalize it
            url: '/get-numbers/new',
            data: { input_one: $('#inputOne').val(), 
            input_two: $('#inputTwo').val(), 
            type_of_math: $('.operators').val()},   //data should always be an object //caps don't work here
            success: function (response) {
                console.log('Log the object', response);
                //get request for all of the quotes
                printObjectsArray();
            }
        })
    })

    function printObjectsArray() {
        $.ajax({
            method: 'GET',
            url: '/get-numbers/all',
            success: function (response) {
                console.log('Inputs Array', response);
                $('ul').html('')
                for (var i=0; i<response.length; i++){ //.append doesn't work with arrays, need to create a for loop.
                    $('ul').append('<li><strong>inputOne: </strong>'+ response[i].inputOne +
                    ' <strong>inputTwo:</strong>' + response[i].inputTwo + '</li>' + 
                    ' <strong>typeOfMath:</strong>' + response[i].typeOfMath + '</li>');
                    // quoteArray.push(response[i]);
                
                }
    
            }
        })
    }
    
})

