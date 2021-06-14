const v = {
    radius: 50,
    pi: 3.14,
    h : 10,

    volume : function() {
        return (2*this.pi*this.h*this.radius)
        
    }
}

console.log(v.volume().toFixed(4))