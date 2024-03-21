/* 
CALLBACK FUNCTIONS
------------------------------------
*/

function dog() {
    console.log("bark bark!");
}

function noise(callback) {
    console.log("la la la!!");

    if(callback) {
        callback();
    }
}

//noise();
//noise(dog);
//noise(function() {console.log("gah gah gah");})
//noise(()=>console.log("boo boo boo"))


/* 
RETURNING A FUNCTION
------------------------------------
*/

// function multiplier(x, factor) {
//     return x * factor;
// }

function multiplier(factor) {
    return function(x) {
        return x * factor;
    };
}