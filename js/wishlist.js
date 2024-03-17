function addToWishlist(selectedWishlist) {
    const findWishlis = product.find((allWishlist) => allWishlist.id == selectedWishlist)
    console.log(findWishlis);

    let localWishlist = JSON.parse(localStorage.getItem("wishlistData")) || []
    console.log(localWishlist);
    localWishlist.push(findWishlis)
    localStorage.setItem("wishlistData", JSON.stringify(localWishlist))

    allWishlist()
    renderCart();
}


function allWishlist() {
    const getCartData = JSON.parse(localStorage.getItem("wishlistData"));
    document.getElementById("renderCartData").innerHTML = getCartData.map((item, index) => {
        return `
        <div class="tabels">
            <table border="1">
                <tr>
                    <td>
                        <div class="images">
                            <img src="${item.p_img}" alt="">
                        </div>
                    </td>
                    <td>
                        <div class="products2">
                            <p class="text">${item.p_Name}</p>
                        </div>
                    </td>
                    <td>
                        <div class="tabeleprise">
                            <h3>${item.p_Prise}</h3>
                        </div>
                    </td>
                    <td>
                        <div class="addbtn">
                            <button onclick="addToCart(${item.id})"><span class="span"><i class="fa-solid fa-bag-shopping"></i></span>Add To Cart</button>
                        </div>
                    </td>
                    <td>
                        <i class="fa-solid fa-trash" onclick="delElement1(${index})"></i>
                    </td>
                </tr>
            </table>
        </div>`;
    }).join("");
    totalitem(cartData)
    updateCount();

}

allWishlist()



function delElement1(index) {
    const wishlistData = JSON.parse(localStorage.getItem("wishlistData"));
    wishlistData.splice(index, 1);
    localStorage.setItem("wishlistData", JSON.stringify(wishlistData));
    updateCount()
    allWishlist(); // Refresh the wishlist display after deletion
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