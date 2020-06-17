var message = "hello world";
console.log(message);
var Site = /** @class */ (function () {
    function Site() {
    }
    Site.prototype.name = function () {
        console.log('Simon');
    };
    return Site;
}());
var obj = new Site();
obj.name();
function add(x, y) {
    return x + y;
}
// 可选参数使用问号标识 ？
console.log(add(1, 2));
function buildName(firstName, lastName) {
    return firstName + " " + lastName;
}
// let result1 = buildName("Bob");                  // 错误，缺少参数
// let result2 = buildName("Bob", "Adams", "Sr.");  // 错误，参数太多了
var result3 = buildName("Bob", "Adams"); // 正确
// 默认参数
function calculate_discount(price, rate) {
    if (rate === void 0) { rate = 0.50; }
    var discount = price * rate;
    console.log("计算结果: ", discount);
}
calculate_discount(1000);
calculate_discount(1000, 0.30);
// 剩余参数
function buildName1(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join(" ");
}
var employeeName = buildName1("Joseph", "Samuel", "Lucas", "MacKinzie");
console.log(employeeName);
// 匿名函数
var msg = function () {
    return "hello world";
};
console.log(msg());
var res = function (a, b) {
    return a * b;
};
console.log(res(12, 2));
(function () {
    var x = "Hello!!";
    console.log(x);
})();
function factorial(number) {
    if (number <= 0) {
        return 1;
    }
    else {
        return (number * factorial(number - 1));
    }
}
;
console.log(factorial(6));
