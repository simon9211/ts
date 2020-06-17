var message:string = "hello world"
console.log(message);

class Site {
    name():void {
        console.log('Simon');
    }
}

var obj = new Site();
obj.name()


function add(x: number, y: number): number {
    return x + y;
}

// 可选参数使用问号标识 ？
console.log(add(1,2))

function buildName(firstName: string, lastName: string) {
    return firstName + " " + lastName;
}
 
// let result1 = buildName("Bob");                  // 错误，缺少参数
// let result2 = buildName("Bob", "Adams", "Sr.");  // 错误，参数太多了
let result3 = buildName("Bob", "Adams");         // 正确

// 默认参数
function calculate_discount(price:number,rate:number = 0.50) { 
    var discount = price * rate; 
    console.log("计算结果: ",discount); 
} 
calculate_discount(1000) 
calculate_discount(1000,0.30)

// 剩余参数
function buildName1(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}
  
let employeeName = buildName1("Joseph", "Samuel", "Lucas", "MacKinzie");
console.log(employeeName);


// 匿名函数
var msg = function() { 
    return "hello world";  
} 
console.log(msg())

var res = function(a:number,b:number) { 
    return a*b;  
}; 
console.log(res(12,2));

(function () { 
    var x = "Hello!!";   
    console.log(x)     
 })()

// 递归函数
function factorial(number) {
    if (number <= 0) {
        return 1
    } else {
        return (number * factorial(number - 1));
    }
};

console.log(factorial(6));

// Lambda 函数
var foo = (x:number) => 10 + x
console.log(foo(1000));

// 函数重载

// 参数类型不同：
// function disp(string):void; 
// function disp(number):void;

// 参数数量不同：
// function disp(n1:number):void; 
// function disp(x:number,y:number):void;

// 参数类型顺序不同：
// function disp(n1:number,s1:string):void; 
// function disp(s:string,n:number):void;

// 函数重载
function disp(s1:string):void; 
function disp(n1:number,s1:string):void; 
function disp(s:string,n:number):void;
 
function disp(x:any,y?:any):void { 
    console.log(x); 
    console.log(y); 
} 
disp("abc") 
disp(1,"xyz");
disp('xx', 2)


// number





