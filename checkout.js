function add(a,b) {
    if(typeof a !=='number' || typeof b !== 'number') {
        throw('error')
    
    }
    return a + b
}

console.log(add(1,4))
//