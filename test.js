const fs = require("fs");

//读数据
const userString = fs.readFileSync("./db/users.json");
const userArray = JSON.parse(userString);
console.log(userArray);

//写数据
const user3 = { id: 3, name: "tom", pwd: "yyy" };
userArray.push(user3);
const string = JSON.stringify(userArray);
fs.writeFileSync("./db/users.json", string);
