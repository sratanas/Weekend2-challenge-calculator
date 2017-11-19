console.log('client.js is loaded');

$(document).ready(function(){
    console.log('JQ');


    $('.operators').on('click', function () {
        console.log('hit a button')
        $.ajax({
            method: 'POST', // standard to capitalize it
            url: '/get-numbers/new',
            data: { input_one: $('#inputOne').val(), 
            input_two: $('#inputTwo').val(), 
            type_of_math: $(this).val()},   //data should always be an object //caps don't work here
            success: function (response) {
                console.log('Log the object', response);
                //get request for all of the quotes
                printObjectsArray();
            }
        })
    })

    function printObjectsArray() {
        console.log('in printObjectsArray');
        
        $.ajax({
            method: 'GET',
            url: '/get-numbers/all',
            success: function (response) {
                $('ul').append('<li>' + response.inputOne +
                ', ' + response.inputTwo + ', ' + response.typeOfMath + '</li>');
                console.log('Inputs Array', response.typeOfMath);
                var answer = 0;
                if (response.typeOfMath == "add"){
                    answer = Number(response.inputOne) + Number(response.inputTwo);
                    $('ul').append('<li>'+answer+'</li>')
                }
                else if (response.typeOfMath == "subtract"){
                    answer = Number(response.inputOne) - Number(response.inputTwo);
                    $('ul').append('<li>'+answer+'</li>')
                }
                else if (response.typeOfMath == "multiply"){
                    answer = Number(response.inputOne) * Number(response.inputTwo);
                    $('ul').append('<li>'+answer+'</li>')
                }
                else if (response.typeOfMath == "divide"){
                    answer = Number(response.inputOne) / Number(response.inputTwo);
                    $('ul').append('<li>'+answer+'</li>')
                }
               

                


              
        }});
    
    
}})
