import {all_products} from '../products/all_products2.js';


let id = localStorage.getItem('id');
let name = localStorage.getItem('name');
let category = localStorage.getItem('category');
let image = localStorage.getItem('image');
let brand_product = localStorage.getItem('brand');
let sku = localStorage.getItem('sku');
let price = localStorage.getItem('price');
let inventory = localStorage.getItem('inventory');
let size = localStorage.getItem('size');
let color = localStorage.getItem('color');
let description = localStorage.getItem('description');
let inCart = localStorage.getItem('inCart');
let type = localStorage.getItem('type');
let totalCost = localStorage.getItem('totalCost');

const app = { 
    // Format price thành currency
    formatter: function(amount) {
        return new Intl.NumberFormat('vi-VN', {
          style: "currency",
          currency: "VND",
        }).format(amount);
    },

    // Render phần Breadcrumbs
    renderBreadcrumbs: function(){
        const breadcrumb = document.querySelector('.breadcrumb');
        let html = '';
        all_products.map(function(item, index){
            item = all_products[index];
            if (item.id == id && item.category == category){
                    html = `
                    <li itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
                        <a href="/" target="_self" itemprop="item"><span itemprop="name">Trang chủ</span></a>
                        <meta itemprop="position" content="1">		
                    </li>

                    <li itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
                    <a href="/" target="_self" itemprop="item"><span itemprop="name">Tất cả sản phẩm</span></a>
                    <meta itemprop="position" content="2">		
                    </li>
                                    
                    <li itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
                        <a href="#" target="_self" itemprop="item">
                        <span itemprop="name">${item.category}</span>
                        </a>
                        <meta itemprop="position" content="3">
                    </li>
                        
                    <li class="active" itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
                        <span itemprop="item" content="https://hol.com.vn/products/vali-keo-varro">
                        <span itemprop="name">${item.name}</span>
                        </span>
                        <meta itemprop="position" content="4">
                    </li>
                            `
            }   
            breadcrumb.innerHTML = html;
        });
    },

    // Render đúng hình ảnh sản phẩm
    renderImageProduct: function(){
        const productGalary = document.querySelector('.product-galary');
        productGalary.innerHTML = 
        `
            <div class="product-image">
                <img src="${image}" alt="" />
            </div>
        `;
    },

    renderDetailProduct: function(){
        const _this = this;
        let priceFormat = _this.formatter(price);
        const detaiProduct = document.getElementById('detail-product');
        detaiProduct.innerHTML = 
        `
            <div class="product-title"> 
                <div class="product-brand">
                    <a class="link" title="Show Vendor">
                        ${brand_product}
                    </a>
                </div> 
                <h1>${name}</h1>
                <span class="pro_sku">SKU: ${sku}</span>
                <div class="content-price">
                    <div class="product-price product-height">
                        <span class="pro-price">
                            ${priceFormat}
                        </span>
                        <del>${priceFormat}</del>
                    </div>
                    <span class="pro-soldold">
                        ${inventory}
                    </span>
                </div>   
            </div>
            <form id="add-item-form" action="/cart/add" method="post" class="variants clearfix">
                <div class="select-swatch clearfix">
                    <div id="variant-swatch-0" class="swatch clearfix" data-option="option1" data-option-index="0">
                        <div class="header">
                            Chọn kích thước
                        </div>
                        <div class="select-swap">
                            <div class="n-sd swatch-element">
                                <input type="radio" name="option1" value="${size}" data-vhandle="cabin" checked="">
                                <label htmlFor="" class="sd">
                                    <span>
                                        ${size}
                                    </span>
                                </label>
                                <img class="icon-variant" src="${image}" alt="" />
                            </div>
                        </div>
                    </div>

                    <div id="variant-swatch-1" class="swatch clearfix" data-option="option2" data-option-index="1">
                        <div class="header">
                            Chọn màu sắc
                        </div>
                        <div class="select-swap color">
                            <div data-value="${color}" data-image="${color}" class="n-sd swatch-element color">
                                <input type="radio" name="option2" value="${color}" data-vhandle="den" checked="">
                            </div>
                            <label class="sd" htmlFor="swatch-1-den">
                                <span style="background-color: ${color}!important;"></span>
                            </label>
                        </div>
                    </div>
                </div>

                <div class="selector-actions">
                    <div class="quantity-area clearfix">
                        <span>
                            Số lượng:
                        </span>
                        <input type="button" value="-" class="qty-btn minus"/>
                        <input type="text" id="quantity" name="quantity" value="1" min="1" class="quantity-selector"/>
                        <input type="button" value="+" class="qty-btn plus"/>
                    </div>

                    <div class="wrap-addcart">

                    </div>
                </div>
            </form>
        `;
    },
    
    // Add to cart, buy now and out of stock
    addCart : function(){
        const wrap_cart = document.querySelector('.wrap-addcart')
        // Trường hợp còn hàng
        if(inventory === "Còn hàng") {
            wrap_cart.innerHTML = 
            `
                <div class="row-flex">
                    <button type="button" id="add-to-cart" class="add-to-cartProduct button btn-addtocart addtocart-modal" name="add"><span>Thêm vào giỏ</span></button>
                    <button type="button" id="buy-now" class="buy-now button" style="display: block;"><span>Mua ngay</span></button>
                </div>
            `;
        }
        // Trường hợp hết hàng
        if (inventory === "Hết hàng"){
            wrap_cart.innerHTML = 
            `
                <div class="row-flex">
                    <button type="button" id="disable-to-cart" disabled="disabled" class="disabled disable-to-cart button" name="disable"><span>Hết hàng</span></button>
                </div>
            `;
        }
    },

    // Minus or plus quantity
    btnQuantity: function(){
        const btnMinus = document.querySelector('.minus');
        const btnPlus = document.querySelector('.plus');
        var quantity = document.querySelector('.quantity-selector');
        var result;
        btnMinus.onclick = function (){
            if (result > 1) {
                result = --(quantity.value);
            }
        }
        btnPlus.onclick = function (){
            if (result == all_products.length){
                result == all_products.length;
            } else {
                result = ++(quantity.value);
            }
        }
        quantity.innerHTML = result;
    },

    // Description product
    descriptionProduct: function(){
        const productDescription = document.querySelector('.product-description');
        productDescription.innerHTML = 
        `
            <div class="title-bl">
                <h2>Mô tả sản phẩm</h2>
            </div>
            <div class="content-product">
                <p>${description}</p>
            </div>
        `;
    },

    // Related Products
    relatedProducts: function(){
        const _this = this;
        let priceFormat = _this.formatter(price);
        const relatedProducts = document.querySelector('.related-product-list');
        let html = '';
        all_products.map(function(item, index){
            // let {id1, name, price, brand, description, image, category1} = item;
            // item.price = _this.formatter(price);
            // Trường hợp category là gì thì mới show sẩn phẩm đó
            if (item.category == category && item.id != id) {
                html += `
                    <div class="col-md-3 col-sm-6 col-xs-6 pro-loop">
                        <div class="product-block product-resize fixheight style="height: 345px;">
                            <div class="product-image">
                                <div class="product-sale">
                                    <span>-20%</span>
                                </div>
                                <a title="${item.name}" class="image-resize" style="height: 214px;">
                                    <picture style="
                                    cursor: pointer;">
                                        <img data-image="${item.image}" src="${item.image}" alt="${item.name}"/>
                                    </picture>
                                </a>	
                                <div class="button-add">
                                    <button type="submit" title="Mua ngay" class="action" onclick="buy_now('1096108588')">Mua ngay</button>
                                    <button type="submit" title="Thêm vào giỏ" class="action add-to-cart" data-variantid="1096108588">Thêm vào giỏ</button>
                                </div>	
                            </div>

                            <div class="product-detail clear-fix">
                                <div class="box-pro-detail">
                                    <div class="product-brand" >
                                        <a class="link" title="Show vendor" href="">${item.brand}</a>
                                        </div>
                                    <h3 class="pro-name">
                                        <a href="#" title="${item.name}">
                                            ${item.name}
                                        </a>
                                    </h3>
                                    <div class="box-pro-prices">	
                                        <p class="pro-price highlight">${priceFormat}
                                            <span class="pro-price-del"><del class="compare-price">${priceFormat}</del></span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            }

        });
        relatedProducts.innerHTML = html;
    },

    //////////  Shopping cart function  ////////// 
    // Khi khởi động web sẽ lưu số của giỏ hàng
    onloadCartNumbers: function() {
        let productNumbers = localStorage.getItem('cartNumbers');
        productNumbers = parseInt(productNumbers);
        if (productNumbers) {
          document.querySelector('.count-holder .count').textContent = productNumbers;
        }
    },
  
      // Lấy số giỏ hàng
    cartNumbers: function(product) { 
        const _this = this;
        let productNumbers = localStorage.getItem('cartNumbers');
        productNumbers = parseInt(productNumbers);
        if (productNumbers) {
          localStorage.setItem('cartNumbers', productNumbers + 1);
          document.querySelector('.count-holder .count').textContent = productNumbers + 1;
        } else {
          localStorage.setItem('cartNumbers', 1);
          document.querySelector('.count-holder .count').textContent = 1;
        }
        // Product lúc này là all_products[index];
        // _this.setItem(product);
    },
  
    setItem: function(product) {
        let cartItems = localStorage.getItem('productsInCart');
        cartItems = JSON.parse(cartItems);
        // Nếu như object carItems khác null thì hàm sẽ chạy + 1
        if (cartItems != null) {
          // Khi click cùng sản phẩm thì số lượng sản phẩm tăng nhưng khi click vào sản phẩm khác sẽ là undefined. Vì vậy khi xảy ra == undefined thì cho nó nối thêm vào object bằng cách sử dụng rest operator. Cái này sẽ giúp thêm object vừa chọn vào object đang có
          if (cartItems[product.name] == undefined){
            cartItems = {
              ...cartItems,
              [product.name]: product
            }
          }
            cartItems[product.name].inCart += 1;
            product.inCart = 1;
        // Nếu như object carItems == null thì hàm sẽ chạy sẽ giữ nguyên 1 và không cộng thêm
        } else {
            product.inCart = 1;
            cartItems = {
            [product.name]: product
          }
        }
        // cartItems lúc này là một object, trong đó có key là [product.name] và value là product(product lúc này là all_products[index]);
        // lúc này để chuyển dữ liệu lên máy chủ thành dạng chuỗi thì dùng stringtify
        localStorage.setItem('productsInCart', JSON.stringify(cartItems));
    },
  
    btnAddToCart: function() {
        inCart = parseInt(inCart);
        let product = {
            id,
            name,
            image,
            type,
            price,
        }
        let productNumbers = localStorage.getItem('cartNumbers');
        productNumbers = parseInt(productNumbers);
        let cartItems = localStorage.getItem('productsInCart');
        cartItems = JSON.parse(cartItems);
        const cart = document.getElementById('add-to-cart');
        const _this = this;
          cart.onclick = function(){
            if (cartItems != null) {
                if (cartItems[name] == undefined){
                    cartItems = {
                      ...cartItems,
                      [name]: product
                }
            }
                    productNumbers += 1;
                    cartItems[product.name].inCart += 1;
                    totalCost = parseInt(totalCost) + parseInt(price);
            }
            if (cartItems == null){
                cartItems = {};
                if (cartItems[name] == undefined){
                    cartItems = {
                      ...cartItems,
                      [name]: product
                    }}
                totalCost = parseInt(price);
                productNumbers = 1;
                cartItems[product.name].inCart = 1;
            }
            document.querySelector('.count-holder .count').textContent = productNumbers;
            localStorage.setItem('productsInCart', JSON.stringify(cartItems));
            localStorage.setItem('cartNumbers', JSON.stringify(productNumbers));
            localStorage.setItem('totalCost', JSON.stringify(totalCost));
            _this.setItem(product);
            }         

     },
  
    totalCost: function(product) {
        // Đầu tiên dùng local set để tạo ra total cost, sau đó dùng điều kiện nếu totalcost != null cho nó chuyển thành dạng number bằng cách sử dụng parseInt, sau đó cho set + để bỏ lên trên local.
        let totalCost = localStorage.getItem('totalCost');
        if (totalCost != null) {
          totalCost = parseInt(totalCost);
          localStorage.setItem('totalCost', totalCost + product.price);
        } else {
          localStorage.setItem('totalCost', product.price)
        }
      },

    start: function(){
        this.renderBreadcrumbs();
        this.renderImageProduct();
        this.renderDetailProduct();
        this.addCart();
        this.btnQuantity();
        this.descriptionProduct();
        this.relatedProducts();    
        this.btnAddToCart();
        this.onloadCartNumbers();
    },
}
app.start();
