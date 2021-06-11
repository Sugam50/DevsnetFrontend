var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var dict = {};

arr1.forEach(item1 => {

    var temp=0
    arr1.forEach(item2 => {
        if(item1===item2){
            temp=temp+1;
        }
    });
    dict[temp] = item1;
    
});

var max = 0;
for(var key in dict) {
    if (key > max){
        max = key
    }
}
console.log(dict[max] + "(" + max + "times)")
