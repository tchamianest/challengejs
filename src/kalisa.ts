// interface Admin {
//   name: string;
//   phone: string;
//   age: number;
//   sex: string;
// }

// export const Object []: Admin = [];

// function Kalisa(param: Admin): Admin {
//   let ob = {
//     name: "kalisa daniel",
//     phone: "kibam",
//     age: 21,
//     sex: "male",
//     kibaruma: "fatakumavuta",
//   };
//   Object.push(ob)
//   return ob;
// }

// console.log(Kalisa);

// /////////////////////////////////////////////////////////////////////
// // check docs
// let obj:any={x:0};// for this type we can not have any error
// obj.foo();
// obj.kalisa='daniel';

//// do function that have the
// const greet = function (name: string): string {
//   let final = `the first name is ` + name.toUpperCase();
//   return final;
// };

// greet("tchami anest");

///////////////////////////////////////////////////////////////////
//////////if you want to return the promise

// async function kalisadan(): Promise<number> {
//   return 23;
// }

// const names: string[] = ["dani", "samusure", "kigwede"];
// names.forEach(function (s) {
//   console.log(s.toUpperCase());
// });

//////////////////////////////////////////////////////////////////
////////print card
function Printnum(pts: { x: string; y: number }): void {
  console.log(`kalisa number ` + pts.x);
  console.log(`nammes is the ${pts.y}`);
}

Printnum({ x: "32", y: 56 });

////////THE LAST FUNCTION

function Primitive(ob: { firstname: string; last?: string }) {
  console.log(ob.firstname.toUpperCase());

  ///CHECK FIRST
  if (ob.last !== undefined) {
    console.log(ob.last.toUpperCase());
  }

  console.log(ob.last?.toUpperCase());
}
