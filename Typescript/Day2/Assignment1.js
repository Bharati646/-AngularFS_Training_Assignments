var Customer = /** @class */ (function () {
    function Customer(id, name, city) {
        if (id === void 0) { id = 0; }
        if (name === void 0) { name = ""; }
        if (city === void 0) { city = ""; }
        this.id = 0;
        this.name = "";
        this.city = "";
        this.id = id;
        this.name = name;
        this.city = city;
    }
    Customer.prototype.Details = function () {
        console.log("Customer Details :: " + "ID :" + this.id + " " + ", Name :" + this.name + " " + ", City: " + this.city);
    };
    return Customer;
}());
/*
let s11:Student3 = new Student2(46545);
let s22:Student3 = new Student2(46545, "Scott");
let s33:Student3 = new Student2(46545, "Scott", 25);
*/
var c1 = new Customer();
var c2 = new Customer(10256);
var c3 = new Customer(10256, "Scott");
var c4 = new Customer(10256, "Scott", "Hyderabad");
c4.Details();