
/*
If we try to execute the increment(1) function, we will have an execution time equal
to X. If we try to execute the increment function again with a different parameter
(let's say num is 2), the execution time will also be X. The parameter does not matter,
the performance of the function increment will be the same. For this reason, we can
say the preceding function has a complexity of O(1) (constant).
*/
//*************** o(1)
function increment(num){
    console.log('cost for increment with input ' + num + ' is 1');
    return  ++num;
}

increment(1);
increment(2);

/*
The sequentialSearch function has a complexity
of O(n), n being the size of the array (input).
*/
//*************** o(n)
function createNonSortedArray(size){
    var array = [];

    for (var i = size; i> 0; i--){
        array[i] = i;
    }

    return array;
}

function sequentialSearch(array, item){
    var cost = 0;
    for (var i=0; i<array.length; i++){
        cost++;
        if (item === array[i]){ //{1}
            return i;
        }
    }
    console.log('cost for sequentialSearch with input size ' + array.length + ' is ' + cost);
    return -1;
}

var array = createNonSortedArray(99);
sequentialSearch(array, -1);

/*
O(nˆ2) has two nested for loops. If the algorithm has three
for loops iterating through the array, it will probably be O(nˆ3).
*/    
//*************** o(nˆ2)
function swap(array, index1, index2){
    var aux = array[index1];
    array[index1] = array[index2];
    array[index2] = aux;
}

function bubbleSort(array){
    var length = array.length;
    var cost = 0;
    for (var i=0; i<length; i++){ //{1}
        cost++;
        for (var j=0; j<length-1; j++ ){ //{2}
            cost++;
            if (array[j] > array[j+1]){
                swap(array, j, j+1);
            }
        }
    }
    console.log('cost for bubbleSort with input size ' + length + ' is ' + cost);
}

var array1 = createNonSortedArray(99);
var array2 = createNonSortedArray(999);
var array3 = createNonSortedArray(9999);
bubbleSort(array1);
bubbleSort(array2);
bubbleSort(array3);