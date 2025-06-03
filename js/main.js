var productName = document.getElementById("productName");
var productPrice = document.getElementById("productPrice");
var productCategory = document.getElementById("productCategory");
var productImage = document.getElementById("productImage");
var productDescription = document.getElementById("productDescription");
var tr = document.getElementById("tr");

var allProduct = [];

function addProduct() {
    var product = {
        pName: productName.value,
        pPrice: productPrice.value,
        pCategory: productCategory.value,
        pImage: "./images/chefs-1.jpg",
        pDescription: productDescription.value
    }
    allProduct.push(product);
    console.log(allProduct);
    // clear();
    display();
}

function clear() {
    productName.value = "";
    productPrice.value = "";
    productCategory.value = "";
    productImage.value = "";
    productDescription.value = "";
}

var cartoona;
function display() {
    for (let index = 0; index < allProduct.length; index++) {
        cartoona = `
            <tr>
            <td>${index+1}</td>
            <td>
                <img src="${allProduct[index].pImage}" alt="">
            </td>
            <td>${allProduct[index].pName}</td>
            <td>${allProduct[index].pPrice}</td>
            <td>${allProduct[index].pCategory}</td>
            <td>${allProduct[index].pDescription}</td>
        </tr> `
    }
    tr.innerHTML += cartoona;
    console.log(cartoona);
    
}