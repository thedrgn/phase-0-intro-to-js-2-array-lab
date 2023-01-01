 const cats = [ "Milo", "Otis", "Garfield",]
function destructivelyAppendCat(){cats.push('Ralph');}
function destructivelyPrependCat(){cats.unshift('Bob');}
function destructivelyRemoveLastCat(){cats.pop('Ralph');}
function destructivelyRemoveFirstCat(){cats.shift('Bob');}
function appendCat (){const copyofcats=[...cats,"Broom"];return copyofcats}
function prependCat (){const copyofcats=["Arnold",...cats];return copyofcats}
function removeLastCat(){const copyofCats= cats.slice(0,cats.length-1); 
    return copyofCats
}
function removeFirstCat(){const copyofCats= cats.slice(1); 
    return copyofCats
}