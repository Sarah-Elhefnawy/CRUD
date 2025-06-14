var productName = document.getElementById("productName");
var productPrice = document.getElementById("productPrice");
var productCategory = document.getElementById("productCategory");
var productImage = document.getElementById("productImage");
var productDescription = document.getElementById("productDescription");
var tr = document.getElementById("tr");
var addBtn = document.getElementById("addBtn");
var updateBtn = document.getElementById("updateBtn");

var allProduct = [];
if (localStorage.getItem("all") != null) {
    allProduct = JSON.parse(localStorage.getItem("all"));
    display();
}
// localStorage.removeItem("all")

function addProduct() {
    var product = {
        pName: productName.value,
        pPrice: productPrice.value,
        pCategory: productCategory.value,
        pImage: productImage.files[0]?.name,
        pDescription: productDescription.value
    };
    if (product.pImage == undefined) {
        product.pImage = "./chefs-1.jpg";
    }
    allProduct.push(product);
    localStorage.setItem("all", JSON.stringify(allProduct))
    clear();
    display();
}

function clear() {
    productName.value = "";
    productPrice.value = "";
    productCategory.value = "";
    productImage.value = "";
    productDescription.value = "";
}

function display() {
    var cartoona = "";
    for (let index = 0; index < allProduct.length; index++) {
        cartoona += `
            <tr>
            <td>${index + 1}</td>
            <td>
                <img src="./images/${allProduct[index].pImage}" alt="">
            </td>
            <td>${allProduct[index].pName}</td>
            <td>${allProduct[index].pPrice}</td>
            <td>${allProduct[index].pCategory}</td>
            <td>${allProduct[index].pDescription}</td>
            <td><button onclick="deleteProduct(${index})" class="btn btn-danger">delete</button></td>
            <td><button onclick="preUpdate(${index})" class="btn btn-warning">update</button></td>
        </tr> `
    }
    tr.innerHTML = cartoona;
    // console.log(cartoona);
}

function deleteProduct(index) {
    allProduct.splice(index, 1);
    localStorage.setItem("all", JSON.stringify(allProduct));
    display();
}

function searchByName(term) {
    var cartoona = "";
    for (let index = 0; index < allProduct.length; index++) {
        var productItem = allProduct[index].pName;
        if (productItem.trim().toLowerCase().includes(term.toLowerCase().trim())) {
            cartoona += `
            <tr>
            <td>${index + 1}</td>
            <td>
                <img src="./images/${allProduct[index].pImage}" alt="">
            </td>
            <td>${allProduct[index].pName}</td>
            <td>${allProduct[index].pPrice}</td>
            <td>${allProduct[index].pCategory}</td>
            <td>${allProduct[index].pDescription}</td>
            <td><button onclick="deleteProduct(${index})" class="btn btn-danger">delete</button></td>
            <td><button onclick="preUpdate(${index})" class="btn btn-warning">update</button></td>
        </tr> `
        }
    }
    tr.innerHTML = cartoona;
}

mainIndex;
function preUpdate(index) {
    productName.value = allProduct[index].pName;
    productPrice.value = allProduct[index].pPrice;
    productCategory.value = allProduct[index].pCategory;
    // productImage.value = allProduct[index].pImage;
    productDescription.value = allProduct[index].pDescription;

    addBtn.classList.replace("d-block", "d-none");
    updateBtn.classList.replace("d-none", "d-block");
    mainIndex = index;
}

function updateProduct() {
    var product = {
        pName: productName.value,
        pPrice: productPrice.value,
        pCategory: productCategory.value,
        pImage: "./chefs-1.jpg",
        pDescription: productDescription.value
    };
    allProduct.splice(mainIndex, 1, product);
    localStorage.setItem("all", JSON.stringify(allProduct))
    clear();
    display();

    addBtn.classList.replace("d-none", "d-block");
    updateBtn.classList.replace("d-block", "d-none");
}

