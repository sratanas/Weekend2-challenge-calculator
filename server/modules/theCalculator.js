function theCalculator (array){
    for (var i = 0; i<array.length; i++)
var answer = 0;
if (array.typeOfMath == "add"){
    answer = Number(array[i].inputOne) + Number(array[i].inputTwo);
    return answer
}
else if (array.typeOfMath == "subtract"){
    answer = Number(array[i].inputOne) - Number(array[i].inputTwo);
    return answer
}
else if (array.typeOfMath == "multiply"){
    answer = Number(array[i].inputOne) * Number(array[i].inputTwo);
    return answer
}
else if (array.typeOfMath == "divide"){
    answer = Number(array[i].inputOne) / Number(array[i].inputTwo);
    return answer
}
};
module.exports = theCalculator;