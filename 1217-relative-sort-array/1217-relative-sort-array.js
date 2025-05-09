/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
function relativeSortArray(arr1, arr2) {

    return arr1.sort((a, b) => {
        
        const indexA = arr2.indexOf(a);
        const indexB = arr2.indexOf(b);

        
        if (indexA !== -1 && indexB !== -1) return indexA - indexB;

    
        if (indexA !== -1) return -1;
        if (indexB !== -1) return 1;

        
        return a - b;
    });
}