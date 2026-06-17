// var a=10;
// var b=20;
// var c=a+b;

// console.log(`sum of of ${a} and ${b} is ${c}`);

const r=require('readline');
const rl=r.createInterface({
input:process.stdin,
output:process.stdout});
rl.question('enter first number:',(a)=>{
    rl.question('enter second number:',(b)=>{
        const sum=Number(a)+Number(b);
        console.log(`sum of ${a} and ${b} is ${sum}`);
    });
});