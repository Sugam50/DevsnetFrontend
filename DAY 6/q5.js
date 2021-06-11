function count(arr1){
    var c=0
    arr1.forEach(a=> {
        if(a==='a'){
            c=c+1
        }
     
    }); 
    return c
}
var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

console.log("a ("+ count(arr1)+" times)");