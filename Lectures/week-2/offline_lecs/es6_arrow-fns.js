// map
const array = [1,2,3,4,5];

function transform(i) {
    return i*2;
}

const update = array.map(transform);

console.log(update);

// filter

const arr = [1,2,3,4,5];

const ans = arr.filter(function (n) {
    if (n%2==0){
        return true;
    } else {
        return false;
    }
});

console.log(ans);