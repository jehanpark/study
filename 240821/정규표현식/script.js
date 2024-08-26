// const regexp = /\d{3}/

// console.log(regexp.test("hello"))
// console.log(regexp.test("123"))

// const str = "es2024 is powerfull"
// str.replace(/es2024/,"javascript")

// const regexp = /es/i

// console.log(str.match(/es/d-d/d/d/d))


// const hello = "hello,every one"
// console.log(/^H/.test(hello))
// console.log(/^h/.test(hello))
// console.log(/^H/i.test(hello))

// console.log(/one.$/.test(hello))
// console.log(/e.$/.test(hello))
// console.log(/one$/.test(hello))

// const str = "ES2024"

// console.log(str.match(/[^0-9]/g))

// const str = "Oooops"

// console.log(str.match(/o{2}/))
// console.log(str.match(/o{2,}/))
// console.log(str.match(/o{2,4}/))
// console.log(str.match(/o{2,4}/i))

// const str2 = "ES2024(ES8)is powerful"
// const regexp = /ES2024|ES8/

// console.log(regexp.test(str2))

//숫자만 가능한 정규표현식 패턴
const regexp = /^[0-9]+$/

//양의 정수만 가능한 정규표현식 패턴
const regexp1 = /^[1-9]\d*$/

//음의 정수만 가능한 정규표현식 패턴
const regexp2 = /^[1-9]\d*$/

//영문자를 찾아오도록 하는 정규표현식 패턴
const regexp3 = /^[a-zA-Z]+$/

//숫자와 영문자를 찾아오도록 하는 정규표현식 패턴
const regexp4 = /^[a-zA-Z0-9]+$/

//한글만 찾아오도록 하는 정규표현식 패턴
const regexp5 = /^[가-힣]+$/

//한글과 영문자만 가능한 정규표현식 패턴
const regexp6 = /^[가-힣a-zA-Z]+%/

//문자열의 길이가 5~10개 패턴
const regexp7 = /^{5,10}$/