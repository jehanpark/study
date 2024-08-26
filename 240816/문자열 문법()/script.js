// const str = "hello jehan"
// const arr = ["today","first","jehan","ddh"]


// //띄어쓰기(문자열중 빈문자열)도 포함됨
// console.log(str.length)

// console.log(arr.length)

// //1) 특정 위치의 문자에 접근 !!!charAT(위치)  index느낌~
//  console.log(str.charAt(4)) 

//  const counting = () =>{

//  }

//  const string = prompt("원하는 문자열을 입력하세요")
//  const word = prompt("그 중 찾고싶은 문자열은 무엇인가요?")

//  counting = (string, word) => {
//  let count = 0
//  for(let i = 0; i < string.length; i++){
//  if(string[i]===word) count += 1
//  }
//  return count
//  }

//  const result = counting(string,word)

//  document.write(`${string}에는 ${word}이라는 알파벳이 ${result}번 사용되었습니다`)



 //2)indexOf() : 특정문자열을 인자값을 제공 => 해당 문자열의 시작하는 인덱스 값을 찾아!!!

 // const str1 = "Good morning, every. Beautiful morning."

 // console.log(str1.indexOf("morning"))

 // let fristIndex = str1.indexOf("morning")
 // let secondIndex = str1.indexOf("morning",fristIndex +1)
 // let thirdIndex = str1.indexOf("morning",secondIndex +1)
 // console.log(thirdIndex) 

 // //없는 값은 -1로 나옴
 // console.log(str1.indexOf("hi"))



 // //3)특정 문자열로 시작하거나 끝나거나 혹은 포함하고 있거나
 // //startsWith() endsWith() includes()

 // const str2 = "Hello eveyone."
 // console.log(str2.startsWith("Hello"))
 // console.log(str2.startsWith("hello"))
 // console.log(str2.startsWith("H"))
 // console.log(str2.startsWith("Hello e"))
 
 // console.log(str2.startsWith("el",1))
 // console.log(str2.startsWith("o",4))

 // console.log(str2.endsWith("Everyone."))
 // console.log(str2.endsWith("everyone."))
 // console.log(str2.endsWith("one."))

 
 // //trim 문자열에 띄어쓰기 제거
 // let str3 = "   ab cd ef gh  . "
 // console.log(str3.trim())
 // console.log(str3.trimStart())
 // console.log(str3.trimEnd())


 // //대소문자 필터
 // const str4 = "hello, everyone"
 // console.log(str4.toUpperCase())
 // console.log(str4.toLowerCase())


//  //**문자열에서 특정 문자를 추출하는 방법!!**
//  //사용자가 올바르지 않은 정보값! substring()
// const str5 = "010 4942 9641"

// // console.log(str5.substring(5))
// console.log(str5.substring(0,4))
// console.log(str5)

// console.log(str5.slice(0, 3))

// //slice():음수 인식 (뒷자리)
// console.log(str5.slice(-2))
// console.log(str5.slice(-2,))

//split() 어떤하나를 기준으로 문자를 따로따로 인식하게함
// 5071pjh@naver.com
const str6 = "5071pjh@naver.com"

console.log(str6.split(" "))
console.log(str6.split(""))
console.log(str6.split("@"))

