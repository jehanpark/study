// let bag = new Map()

// bag.set("color","red")
// console.log(bag)

let maCup = new Map([
 ["color","blue"],["material","ceramic"],["300ml","capacity"]
])



maCup.set("type")
maCup.set("purpose")


console.log(maCup)

//메서드 체이닝
maCup.set("type","mini").set("purpose").set("toy")

console.log(maCup)

console.log(maCup.get("color"))
console.log(maCup)

console.log(maCup.size)
console.log(maCup)

console.log(maCup.has("type"))
console.log(maCup)

console.log(maCup.delete("type"))
console.log(maCup)

console.log(maCup.clear())
console.log(maCup)

console.log(maCup.keys())
console.log(maCup.values())
console.log(maCup.entries())


for(let key of maCup.keys()){
 console.log(key)
}
for(let key of maCup.values()){
 console.log(key)
}
for(let key of maCup.entries()){
 console.log(key)
}