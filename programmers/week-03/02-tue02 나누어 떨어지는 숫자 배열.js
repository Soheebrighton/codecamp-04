function solution(arr, divisior){

    const answer = [];

    for(let i = 0; i < arr.length; i++){
        if( arr[i] % === 0){
            answer.push(arr[i])
        }
    } 
return answer.length === 0
? [-1] 
: answer.sort()
};

function solution(arr. divisior) {
    const answer = arr.filter (numb => {
        return num% divisior;
    })

    return answer.length === 0
    ?[-1]
    :answer.sort((a, b) => a - b)
}