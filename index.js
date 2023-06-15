let cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(Ralph){
    cats.push('Ralph');
 }
function destructivelyPrependCat(Bob){
    cats.unshift('Bob')
}
function destructivelyRemoveLastCat(Garfield){
    cats.pop('Garfied')
}
function destructivelyRemoveFirstCat(Milo){
    cats.shift("Milo")
}

function appendCat(Broom) {
    const newArray = [...cats, Broom];
} 
cats = appendCat(cats);
console.log(cats);

function prependCat(Garfield){
    const newArray=([Garfield,...cats])
}
cat = prependCat(cats);
console.log(cats);

function removeFirstCat(Garfield){
    cats.shift()
}