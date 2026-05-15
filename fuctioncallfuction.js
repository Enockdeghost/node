
function juicemixer(mango,orange){
    const mngos = fruitsclleicart(mango);
    const oranges = fruitsclleicart(orange);

    if(mango === 0){
        return `We have juice of orange only and the pieceses is ${oranges} `;
    }
    if(orange === 0){
        return `We have juice of mango only and the pieceses is ${mngos} `;
    }
    return `We have juice of mango ${mngos} pieces and juice of orange ${oranges} pieces`;
}

function fruitsclleicart(fruit){
    return fruit * 4;
}

console.log(juicemixer(1,3));