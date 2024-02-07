interface Admin {
  name: string;
  phone: string;
  age: number;
  sex: string;
}

export const Object []: Admin = [];

function Kalisa(param: Admin): Admin {
  let ob = {
    name: "kalisa daniel",
    phone: "kibam",
    age: 21,
    sex: "male",
    kibaruma: "fatakumavuta",
  };
  Object.push(ob)
  return ob;
}

console.log(Kalisa);
