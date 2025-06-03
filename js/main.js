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
        pImage: productImage.files[0]?.name,
        pDescription: productDescription.value
    }
    if (product.pImage==undefined) {
        product.pImage = "./chefs-1.jpg"
    }
    allProduct.push(product);
    // console.log(allProduct);
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
                <img src="./images/${allProduct[index].pImage}" alt="">
            </td>
            <td>${allProduct[index].pName}</td>
            <td>${allProduct[index].pPrice}</td>
            <td>${allProduct[index].pCategory}</td>
            <td>${allProduct[index].pDescription}</td>
        </tr> `
    }
    tr.innerHTML += cartoona;
    // console.log(cartoona);
}