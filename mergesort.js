
let inputArray= [4,2,5,2,9,1,7]


function mergeSort(inputArray){

    if(inputArray.length<2){
        return inputArray
    }

    let middle=Math.floor(inputArray.length/2)

    let leftSideArray=inputArray.slice(0,middle)

    let rightSideArray=inputArray.slice(middle,inputArray.length)


    let resultLeftMerge=mergeSort(leftSideArray)

    let resultrightMerge=mergeSort(rightSideArray)

    

    return merge(resultLeftMerge,resultrightMerge)
}

// merging fuction

function merge(leftHalf,rightHalf){

    let leftArrayLength=leftHalf.length
    let rightArrayLength=rightHalf.length

    let mergedArray=[]

    let a =0;
    let b=0;

    while(a<leftArrayLength && b<rightArrayLength){

        if(leftHalf[a]<=rightHalf[b]){
            mergedArray.push(leftHalf[a])
            a++
        }else{
            mergedArray.push(rightHalf[b])
            b++
        }

    }

    return mergedArray.concat(leftHalf.slice(a)).concat(rightHalf.slice(b))
}


console.log(mergeSort(inputArray));