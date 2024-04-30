var prettyPrintWilder = function (users) {
    users.map(function (user) {
        console.log("".concat(user.name, " is ").concat(user.age, " years old"));
    });
};
var wilders = [];
var user01 = { name: "Pierre", age: 33 };
var user02 = { name: "Paul", birthday: "10/02/1990" };
var user03 = { name: "Jacques", age: 25 };
wilders.push(user01);
wilders.push(user02);
wilders.push(user03);
prettyPrintWilder(wilders);
