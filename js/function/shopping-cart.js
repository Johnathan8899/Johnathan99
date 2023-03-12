const layoutCart = document.querySelector(".layout-cart");
let cartNumbers = localStorage.getItem("cartNumbers");
let cartItems = localStorage.getItem("productsInCart");
let totalCost = localStorage.getItem("totalCost");

cartItems = JSON.parse(cartItems);

const app = {
  // Format price thành currency
  formatter: function (amount) {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(amount);
  },

  // Render phần Breadcrumbs
  renderBreadcrumbs: function (html) {
    const breadcrumb = document.querySelector(".breadcrumb");
    html = `
                <li itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
                    <a href="/" target="_self" itemprop="item"><span itemprop="name">Trang chủ</span></a>
                        <meta itemprop="position" content="1">		
                </li>

                <li itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
                    <span itemprop="name">Giỏ hàng</span>
                    <meta itemprop="position" content="2">		
                </li>
                            `;
    breadcrumb.innerHTML = html;
  },

  //  Render layout cart
  renderLayoutCart: function () {
    document.querySelector('.count-holder .count').textContent = cartNumbers;
    const _this = this;
    let html = "";
    const tableCart = document.querySelector(".table-cart");
    // Dùng object.values để lấy những phần tử name, price trong objet cartItem
    if (cartItems) {
      Object.values(cartItems).map((item) => {
        var {name, price, type, image, inCart} = item;
        // Tổng tiền của sản phẩm có nhiều số lượng
        totalPerpage = _this.formatter(price * inCart);
        price = _this.formatter(price);
            html += `
            <div class="item line-item line-item-container">
            <div class="left">
              <div class="item-img">
                <a>
                  <img src="${image}" alt="">
                </a>
              </div>
            </div>
            <div class="right">
              <div class="item-info">
                <a>
                  <h3>${name}</h3>
                  <div class="item-desc">
                    <span class="variant_title">${type}</span>
                  </div>
                </a>
              </div>
              <div class="item-quantity">
                <div class="qty quantity-parent qty-click clearfix">
                  <div class="qty-minus qty-btn">
                    -
                  </div>
                  <input type="text" size="4" min="1" value="${inCart}" class="tc line-item-qty item-quantity">
                  <div class="qty-plus qty-btn">
                    +
                  </div>
                </div>
              </div>
              <div class="item-price">
                <p>
                  <span>${price}</span>
                </p>
              </div>
              <div class="item-total-price">
                <div class="price">
                  <span class="text">Thành tiền</span>
                  <span class="line-item-total">${totalPerpage}</span>
                </div>
                <div class="remove-product" style="cursor: pointer;">
                  <a>
                    <img src="https://theme.hstatic.net/200000117085/1000913765/14/ic_close.png?v=387" alt="Xóa sản phẩm">
                  </a>
                </div>
              </div>
            </div>
          </div>
            `;
    });
    tableCart.innerHTML = html;
    document.querySelector('.numberCarts').innerHTML = `Bạn đang có ${cartNumbers} sản phẩm trong giỏ hàng`;
    } else {
      _this.renderTotalCash();
      document.querySelector('.numberCarts').innerHTML = `Bạn đang có 0 sản phẩm trong giỏ hàng`;
    }
  },

    // Render total Cash: 
  renderTotalCash: function() {
        const _this = this;
        let totalCash = _this.formatter(totalCost);
        let payment = document.querySelector('.payment');
        payment.innerHTML = `
            <a href="/layout/category/all-products.html" class="continute">Tiếp tục mua hàng →</a>
            <div class="order-summary-block">
                <h2>Thông tin đơn hàng</h2>
                <div class="summary-total">
                    <p>
                        Tổng tiền: <span>${totalCash}</span>
                    </p>
                </div>
                <div class="summary-payment">
                    <p>
                        Bạn có thể nhập mã giảm giá ở trang thanh toán
                    </p>
                    <button class="action-pay">
                        thanh toán
                    </button>
                </div>
            </div>
        `;
        
  },

  // Btn remove product
  removeProduct: function() {
    const _this = this
    btnsRemoveProduct = document.querySelectorAll('.remove-product');
    let cartItemsArr =  Object.values(cartItems);
    btnsRemoveProduct.forEach((btn, index) => {
      btn.onclick = () => {
        $(btn).parent().parent().parent().remove();
        let nameProuct = ($(btn).parent().parent().find('h3').text());
        cartItemsArr.forEach((item, index) => {
          
          const {name, price, inCart} = item
          if (nameProuct == name) {
            cartItemsArr.splice(index, 1)
            localStorage.setItem('productsInCart', JSON.stringify(cartItemsArr));
            cartNumbers = cartNumbers - inCart;
            totalCost = totalCost - (price * inCart)

            localStorage.setItem('cartNumbers', JSON.stringify(cartNumbers));
            localStorage.setItem('totalCost', JSON.stringify(totalCost));
            _this.renderTotalCash();

            document.querySelector('.numberCarts').innerHTML = `Bạn đang có ${cartNumbers} sản phẩm trong giỏ hàng`;
          }
        });
      }
    });
  },

  // Btn minus plus 
  quantityProduct: function() {
    const _this = this;
    let cartItemsArr =  Object.values(cartItems);
    console.log(cartItems);
    console.log(cartItemsArr);
    const btnsMinus = document.querySelectorAll('.qty-minus.qty-btn');
    const btnsPlus = document.querySelectorAll('.qty-plus.qty-btn');
    
    btnsMinus.forEach(function(btn, index) {
      var quantityProduct = $(btn).parent().find('input').val(); 
      btn.onclick = function() {
        console.log(cartItemsArr[index].inCart--);
        // _this.renderLayoutCart();
      localStorage.setItem('inCart', JSON.stringify(cartItemsArr[index].inCart));

      }
    })

    

  },

  start: function () {
    this.renderBreadcrumbs();
    this.renderLayoutCart();
    this.renderLayoutCart();
    this.renderTotalCash();
    this.removeProduct();
    // this.quantityProduct();
  },
};
app.start();
