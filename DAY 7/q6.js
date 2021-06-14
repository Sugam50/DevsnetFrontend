var library = [{ title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 } , 
{ title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 }, 
{ title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }]; 



    library.forEach(item=>{
        console.log("{")
       Object.keys(item).sort().forEach(k => {
        console.log(k,item[k]);
        });
        console.log("}")
    });
