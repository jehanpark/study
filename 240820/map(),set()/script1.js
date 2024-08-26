let numSet1 = new Set()


numSet1.add("one").add("two")
console.log(numSet1)

let numSet2 = new Set([1,2,3]) 
console.log(numSet2)

let numSet3 = new Set([1,2,1,5,6,2,3]) 
console.log(numSet3)

const languages = new Set(["js","ts","css"])

for(let language of languages.values()){
 console.log(languages)
}