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
    return newArray;
  }

function prependCat(Garfield){
    cats.unshift(arrayofcats,1,2)
}
function removeFirstCat(Garfield){
    cats.shift()
}