const product = [{
        id: 1,
        p_img: `./images/products/product-1-1.jpg`,
        p_Categori: "Clothing",
        p_Name: "Colorful Pattern  Shirts",
        p_rating: `<i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i>`,
        p_Prise: 800,
    },

    {
        id: 2,
        p_img: `./images/products/product-2-1.jpg`,
        p_Categori: "Clothing",
        p_Name: "Plain Color Pocket Shirts",
        p_rating: `<i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i>`,
        p_Prise: 599,
    },

    {
        id: 3,
        p_img: `./images/products/product-3-1.jpg`,
        p_Categori: "Shirts",
        p_Name: "Vintage Floral Oil Shirts",
        p_rating: `<i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i>`,
        p_Prise: 1299,
    },

    {
        id: 4,
        p_img: `./images/products/product-4-1.jpg`,
        p_Categori: "Clothing",
        p_Name: "Colorful Hawaiian Shirts",
        p_rating: `<i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i>`,
        p_Prise: 450,
    },

    {
        id: 5,
        p_img: `./images/products/product-5-1.jpg`,
        p_Categori: "Shirt",
        p_Name: "Flowers Sleeve Lopel Shirts",
        p_rating: `<i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i>`,
        p_Prise: 350,
    },

    {
        id: 6,
        p_img: `./images/products/product-6-1.jpg`,
        p_Categori: "Shirts",
        p_Name: "Ethnic Floral Causual Shirts",
        p_rating: `<i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i>`,
        p_Prise: 950,
    },

    {
        id: 7,
        p_img: `./images/products/product-7-1.jpg`,
        p_Categori: "Shoes",
        p_Name: "Stitching Hole Sandals ",
        p_rating: `<i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i>`,
        p_Prise: 3450,
    },

    {
        id: 8,
        p_img: `./images/products/product-8-1.jpg`,
        p_Categori: "Shirt",
        p_Name: "Mens Porcelain  Shirt",
        p_rating: `<i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i>`,
        p_Prise: 899,
    },
];

let wrapper = document.getElementById("wrapper")

wrapper.innerHTML = product.map((x) => {
        return `   <div class="products">

                        <img src="${x.p_img}" alt="">
                    <div class="payment">


                        <div class="carts">
                        <div class="qick-view tooltip1">
                        <a href=""><button><i class="fa-regular fa-eye"></i></a>
                        <span class="tooltiptext1">Qick View</span></button>

                    </div>
                                <div class="wishlist tooltip2">
                                    <button onclick=addToWishlist(${x.id})><i class="fa-regular fa-heart"></i>
                                    <span class="tooltiptext2">Add To Wishlist</span></button>

                                </div>

                                <div class="compare tooltip2">
                                        <a href=""><button><i class="fa-solid fa-shuffle"></i></a>
                                        <span class="tooltiptext2">Compare</span></button>
                                </div>
                        </div>
                    </div>
                        <div class="p-text">
                                <p class="categori">${x.p_Categori}</p>
                                <h3 class="p-name"><a href="">${x.p_Name}</a></h3>
                                <h3 class="p-rating">${x.p_rating}</h3>
                        </div>
                        <div class="priseandbtn">
                            <div class="p-prise">
                                <h4>${x.p_Prise}</h4>
                            </div>
                            <div class="btnp tooltip">
                                <button onclick=addToCart(${x.id})><i class="fa-solid fa-cart-shopping"></i>
                                <span class="tooltiptext">Add To Cart</span></button>
                            </div>
                        </div>
                    </div>`;
    })
    .join("");



//!Add to cart in the localstorage



function addToCart(selectedProduct) {
    // Find the product from the list based on its ID
    const findProduct = product.find((allProducts) => allProducts.id == selectedProduct);
    console.log(findProduct);
    if (findProduct) {
        // Retrieve the cart data from local storage
        let local = JSON.parse(localStorage.getItem("cartData")) || [];

        // Check if the product already exists in the cart
        const isProductInCart = local.some(item => item.id === findProduct.id);
        let popup = document.querySelector(".addproductPopup ")
        if (!isProductInCart) {
            // If the product is not already in the cart, add it
            local.push(findProduct);
            localStorage.setItem("cartData", JSON.stringify(local));
            popup.innerHTML = "product aedded"
            popup.classList.add("addproductPopupActive")
            setTimeout(() => {
                popup.classList.remove("addproductPopupActive")

            }, 2000);


        } else {
            // If the product is already in the cart, show an alert
            alert("Product already added to cart");
        }
    }

    // You may want to render the cart after adding the product
    renderCart();
}

function renderCart() {
    const cartData = JSON.parse(localStorage.getItem("cartData"))


    let rendercart = document.querySelector(".rendercart1")
    rendercart.innerHTML = cartData.map((item, index) => {
        return `
        <div class="rendercaeddetails">
            <div class="renddata">
                <div class="row-images">
                    <img src="${item.p_img}">
                </div>
                <div class="productName">
                    <p style="font-size:15px;">${item.p_Name}</p>
                    <h2 style="font-size:15px;">${item.p_Prise}</h2>
                    <i class="fa-solid fa-trash" onclick="delElement(${index})"></i>
              
                </div>
            </div>
        </div>
        
        
        `
    }).join("")


}

renderCart()



function delElement(index) {
    const cartData = JSON.parse(localStorage.getItem("cartData"))
    cartData.splice(index, 1)
    localStorage.setItem("cartData", JSON.stringify(cartData));
    renderCart();
    updateCount()

    totalitem(cartData);
}


function updateCount() {
    const cartData = JSON.parse(localStorage.getItem("cartData"))
    let countItem = cartData ? cartData.length : 0;
    document.querySelector(".count").textContent = countItem;
    totalitem(cartData);
}

function totalitem(cartData) {
    let total = cartData.reduce((t, x) => t + parseFloat(x.p_Prise), 0).toFixed(2);
    document.getElementById("total").innerHTML = total;
}
totalitem(cartData);