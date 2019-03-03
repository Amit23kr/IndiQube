 function shuffle(arra1) {
    var len = arra1.length, temp, index;
    while (len > 0) {

        index = Math.floor(Math.random() * len);

        len--;

        temp = arra1[len];
        arra1[len] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}
var myArray = ['video', 'video1','video2', 'video3','video4','video5'];
console.log(shuffle(myArray));