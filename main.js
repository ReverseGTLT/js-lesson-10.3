const array = [1, 2, 3, 4, 5, 6, 7];
function removeElement(array, item) {
    return array.filter((element) => {
        return element !== item;
    });
}
const result = removeElement(array, 5);
console.log(result.join(', '));
