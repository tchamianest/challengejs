// interface Admin {
//   name: string;
//   phone: string;
//   age: number;
//   sex: string;
// }
function Typesome(obj) {
    ///we can read data from it
    console.log("prop have the value " + obj.name);
    ////but here we can not reassign
    // obj.name = "kalisa ";
}
var People = {
    name: "kalisa daniel",
    age: 32,
};
console.log(People);
var Peopleread = People;
Peopleread = {
    name: "kajuga",
    age: 43,
};
console.log(Peopleread);
