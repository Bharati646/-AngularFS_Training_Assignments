var ProcessOrderObj = (function () {
    function ProcessOrderObj() {
        this.productId = 0;
        this.productName = "";
        this.unitPrice = 0;
        this.quantity = 0;
    }
    Object.defineProperty(ProcessOrderObj.prototype, "PId", {
        get: function () {
            return this.productId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProcessOrderObj.prototype, "PName", {
        get: function () {
            return this.productName;
        },
        set: function (value) {
            this.productName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProcessOrderObj.prototype, "UPrice", {
        get: function () {
            return this.unitPrice;
        },
        set: function (value) {
            this.unitPrice = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProcessOrderObj.prototype, "Qty", {
        get: function () {
            return this.quantity;
        },
        set: function (value) {
            this.quantity = value;
        },
        enumerable: false,
        configurable: true
    });
    ProcessOrderObj.prototype.initalPrice = function (unitPrice, quantity) {
        return unitPrice * quantity;
    };
    return ProcessOrderObj;
})();
var pObj = new ProcessOrderObj();
console.log("Product Id: " + pObj.PId);
pObj.PName = "Scott";
console.log("Product Name: " + pObj.PName);
pObj.UPrice = 1000;
console.log("Product price: " + pObj.UPrice);
pObj.Qty = 2;
console.log("Product quantity" + pObj.Qty);
var totalPPrice = pObj.initalPrice(pObj.UPrice, pObj.Qty);
console.log("Total product price id : " + totalPPrice);