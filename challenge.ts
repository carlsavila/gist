//chalenge.ts
interface user {
    name:string, 
    age?:number,
    birthday?: string
}

const prettyPrintWilder = (users:user[])=> {
    users.map((user:user)=>{
        console.log(`${user.name} is ${user.age} years old`);
    });
}

const wilders:user[] = [];
const user01 = { name:"Pierre", age:33};
const user02 = { name:"Paul", birthday:"10/02/1990"};
const user03 = { name:"Jacques", age:25};

wilders.push(user01);
wilders.push(user02);
wilders.push(user03);

prettyPrintWilder(wilders)