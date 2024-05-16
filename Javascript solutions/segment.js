// Given a string s, return the number of segments in the string
// A segment is defined to be a contiguous sequence of non-space characters.

function countSegements(s){
    let sSpace = s.split(" ");
    let count = 0;
    for (let i = 0; i < sSpace.length; i++) {
        if (sSpace[i] != " ") {
            count ++
        }
    }

    return count;
}

let s = "Hello my name is Tamira";
console.log(countSegements(s));