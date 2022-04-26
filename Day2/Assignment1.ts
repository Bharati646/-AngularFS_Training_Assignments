class Customer{
    public id:number=0;
    public name:string ="";
    public city:string ="";

    constructor(id:number=0,name:string="",city:string="")
    {
        this.id=id;
        this.name=name;
        this.city=city;
    }
   

    public Details():void{
        console.log("Customer Details :: "+"ID :"+this.id+" "+", Name :"+this.name+" "+", City: "+this.city);
    }

   
}
/*
let s11:Student3 = new Student2(46545);
let s22:Student3 = new Student2(46545, "Scott");
let s33:Student3 = new Student2(46545, "Scott", 25);
*/

let c1:Customer =new Customer();
let c2:Customer = new Customer(10256);

let c3:Customer = new Customer(10256, "Scott");

let c4:Customer = new Customer(10256, "Scott", "Hyderabad");


c4.Details();