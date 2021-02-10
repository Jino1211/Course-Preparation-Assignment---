let obj = {};

function First() { 
    return obj;
 }
function Second() { 
    return obj ;
}

alert( new First() === new Second() );