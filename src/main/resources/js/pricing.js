const prices = {
    "chocolate" : {small: 14.99, medium: 19.98, large: 24.97},
    "vanilla" : {small: 14.99, medium: 19.98, large: 24.97},
    "strawberry" : {small: 14.99, medium: 19.98, large: 24.97},
    "cheese" : {small: 14.99, medium: 19.98, large: 24.97}
}
function processOrder(e) {
    e.preventDefault();
    const elements = Array.from(e.currentTarget);
    let orderDetail = {};
    for(let element of elements) {
        if (element.name) {
           orderDetail[element.name] = element.value;
        }
    }
    let type =  orderDetail["type"];
    let size = orderDetail["size"];
    let quantity = +orderDetail["quantity"];
    let unitPrice = prices[type][size];
    let total = unitPrice * quantity;
    document.getElementById("order-type").innerHTML = type;
    document.getElementById("order-size").innerHTML = size;
    document.getElementById("order-quantity").innerHTML = quantity;
    document.getElementById("order-email").innerHTML = orderDetail["email"]
    document.getElementById("order-unit-price").innerHTML = unitPrice
    document.getElementById("order-total").innerHTML = total;
    console.log(orderDetail);

}
function onLoad() {
    document.getElementById("order-form").addEventListener("submit", processOrder);
}
onLoad();
