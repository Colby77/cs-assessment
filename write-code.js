const sumZero = (numArr) => {
    for(let i = 0; i < numArr.length; i++){
        let negNum = numArr[i] * -1
        if(numArr.includes(negNum)){
            return true
        }
    }
    return false
}

let numbers = [1, 2, 3, 4, -2]

// console.log(sumZero(numbers))
// The runtime is O(n) where n is the first number in the array that has a match that adds to 0
// The for-loop stops and returns true as soon as it finds a match or it returns false after checking
// each number
// The space complexity is also O(n) because it takes space proportional to the size of the number array 
// passed in in order to check if it includes negNum

const uniqueChar = (string) => {
    let str = string.split('')
    for(let i = 0; i < str.length; i++){
        for(let j = i + 1; j < str.length; j++){
            if(str[i] === str[j]){
                return false
            }
        }
    }
    return true
}

// console.log(uniqueChar('Moonday'))
// The runtime is O(n**2) because for each letter in the array, it is looping through the whole array 
// again to check if it has only unique letters
// The space is also O(n**2) because it stores each letter of the string times the total length of the string
// or n**2, n * n

const alphabet = 'abcdefghijklmnopqrstuvwxyz'

const pangram = (sentence) => {
    let answer = []
    let newSent = sentence.toLowerCase().split(' ')
    for(let i = 0; i < newSent.length; i++){
        let word = newSent[i].split('')
        for(let j = 0; j < word.length; j++){
            if(!answer.includes(word[j])){
                answer.push(word[j])
            }
        }
    }
    answer = answer.sort().join('')
    if(answer === alphabet){
        return true
    }else {
        return false
    }
}

// console.log(pangram('I like cats, but not mice'))
// The runtime is O(n**2) because it loops twice, once for each word in the sentence and another time for each
// letter in the word.  
// The space is O(n**2) because it stores each word in the sentence and then stores each letter in every word

const findLongestWord = (wordArr) => {
    let lengths = []
    for(let i = 0; i < wordArr.length; i++){
        lengths.push(wordArr[i].length)
    }
    return Math.max(...lengths)
}

words = ['hi', 'hello', 'howareyoudoing']

console.log(findLongestWord(words))

// The runtime is O(n) because it loops through once and is dependent on n the length of the array of words passed in
// The space is O(n) because it stores each length of every word in the array passed. 