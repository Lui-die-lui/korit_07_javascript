let data = {
  employees: [
    { firstName: "John", lastName: "Doe" },
    { firstName: "Anna", lastName: "Smith" },
    { firstName: "peter", lastName: "Parker" },
  ],
};

console.log(data)
// 객체를 문자열로 변환
let stringValue = JSON.stringify(data);
console.log(stringValue)
// git 보기