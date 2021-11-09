
function findMinAndRemove(arr_1, arr_2) {
    let min_1 = arr_1[0]
    let min_2 = arr_2[0]

    if (min_1 < min_2)
        return arr_1.shift()

    return arr_2.shift()
}

function findMinAndRemoveSorted(arr) {
    return arr.shift()
}

function merge(arr_1, arr_2) {
    let sorted = []
    while (arr_1.length !== 0 && arr_2.length !== 0) {
        let min = findMinAndRemove(arr_1, arr_2)
        sorted.push(min)
    }

    return sorted.concat(arr_1).concat(arr_2)
}

function mergeSort(arr) {
    if (arr.length < 2) return arr

    let mid = arr.length / 2
    let start = arr.slice(0, mid)
    let end = arr.slice(mid, arr.length)

    return merge(mergeSort(start), mergeSort(end))
}

