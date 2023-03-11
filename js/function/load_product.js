export default loadProducts;


let itemPerPage = 12;  
let currentPage = 1;
// let start = 0;
// let end = itemPerPage;
const btnNextPage = document.querySelector(".btn-next-page");
const btnPrevPage = document.querySelector(".btn-prev-page");
const productsList = document.querySelector(".product-list");
const choice = document.getElementById('choice');
const search = document.getElementById('search');

function loadProducts(all_products) {
  const totalPages = Math.ceil(all_products.length / itemPerPage);

  const app = {

    // Toggle subMenu:
    toggle_subMenu: function() {
      const btns_iconPlus = document.querySelectorAll('.icon-plus-submenu');
      const subsMenu = document.querySelectorAll('.submenu-links');

      btns_iconPlus.forEach((btn_iconPlus, index) => {
        const subMenu = subsMenu[index];
    
        btn_iconPlus.onclick = () => {
            subMenu.classList.toggle('opened');
        }
    });
    },

    // Format price thành currency
    formatter: function(amount) {
      return new Intl.NumberFormat('vi-VN', {
        style: "currency",
        currency: "VND",
      }).format(amount);
    },
    
    // Render sản phẩm trên danh mục
    renderProducts: function () {
      const _this = this;
      let html = "";
      all_products.map((item, index) => {
      var {id, name, image, brand, price, category, SKU, inventory, size, color, description, status, incart, type} = item;
      let priceFormat = _this.formatter(price);
        html += `
                <div class="col-md-3 col-sm-6 col-xs-6 pro-loop col-4 current-product">
                  <div class="product-block product-resize fixheight" 
                  data-id="${id}" 
                  data-category="${category}" 
                  data-brand="${brand}"   
                  data-name="${name}" 
                  data-sku="${SKU}"
                  data-price="${price}"
                  data-inventory="${inventory}"
                  data-size="${size}"
                  data-color="${color}"
                  data-description="${description}"
                  data-incart="${incart}"
                  data-type="${type}"
                  style="height: 350px;">
                    <div class="product-image">
                          <div class="product-sale">
                              <span>-20%</span>
                          </div>                     
                          <div class="label-product">
                          
                          </div>
                          <a title="${name}" class="image-resize" style="height: 214px;">
                              <picture style="
                              cursor: pointer;">
                                  <img data-image="${image}" src="${image}" alt="${name}"/>
                              </picture>
                          </a>	
                          <div class="button-add">
                                <button type="submit" title="Mua ngay" class="action buy-now">Mua ngay</button>
                                <button type="submit" title="Thêm vào giỏ" class="action add-to-cart" data-variantid="1096108588">Thêm vào giỏ</button>
                            </div>	
                    </div>
                    <div class="product-detail clear-fix">
                          <div class="box-pro-detail">
                              <div class="product-brand" >
                                  <a class="link" title="Show vendor" href="">${brand}</a>
                                  </div>
                              <h3 class="pro-name">
                                  <a href="#" title="${name}">
                                      ${name}
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
          `;

      });
      productsList.innerHTML = html;
    },

    // Hiển thị sản phẩm trong 1 trang
    itemPerPage: function(){
      const currentProduct = document.querySelectorAll('.current-product');
          let start = (currentPage - 1) * itemPerPage;
          let end = currentPage * itemPerPage - 1;
          currentProduct.forEach(function (product, index) {
          if (index >= start && index <= end) {
            product.style.display = 'block';
          } else {
            product.style.display = 'none';
          }
        });
    },

    // Render pagination
    renderPagination: function () {
      let html = "";
      html += `<li class="page-node current">1</li>`;
      for (let i = 2; i <= totalPages; i++) {
        html += `<li class="page-node">${i}</li>`;
      }
      document.querySelector(".list-page").innerHTML = html;
    },

    // Click nút next hiển danh sách sản phẩm tiếp theo
    btnNextPage: function () {
      const _this = this;
      btnNextPage.onclick = function () {
        currentPage++;
        if (currentPage > totalPages) {
          currentPage = totalPages;
        }
        if (currentPage === totalPages) {
          btnNextPage.classList.add("active");
        }
        btnPrevPage.classList.remove("active");
        // Click nút tiếp trang tiếp sẽ sáng
        // Viết theo ngôn ngữ jQuery
        $('.pagination li').removeClass("current");
        $(`.pagination ul li:eq(${currentPage})`).addClass("current");
        // End Jquery
        _this.renderProducts();
        _this.itemPerPage();
        _this.btnDetailProduct();
        _this.btnAddToCart();

      //   _this.iconNewSale();

      };
    },

    // Click nút prev hiển danh sách sản phẩm trước đó
    btnPrevPage: function () {
      const _this = this;
      if (currentPage === 1) {
        btnPrevPage.classList.add("active");
      }
      btnPrevPage.onclick = function () {
        currentPage--;
        if (currentPage <= 1) {
          currentPage = 1;
        }
        if (currentPage === 1) {
          btnPrevPage.classList.add("active");
        }
        btnNextPage.classList.remove("active");
        // Click nút trước trang sau sẽ sáng
        // Viết theo ngôn ngữ jQuery
        $('.pagination li').removeClass("current");
        $(`.pagination ul li:eq(${currentPage})`).addClass('current');
        // End Jquery
        _this.renderProducts();
        _this.itemPerPage();
        _this.btnDetailProduct();
        _this.btnAddToCart();
        // _this.iconNewSale();
      };
    },

    // // Click số trang
    btnChangePage: function () {
      const _this = this;
      const pagesNode = document.querySelectorAll(".page-node");
      pagesNode.forEach(function (pageNode, index) {
        pageNode.onclick = function () {
          const currentNode = index + 1;
          currentPage = currentNode;
          _this.renderProducts();
          _this.itemPerPage();
          _this.btnDetailProduct();
          _this.iconNewSale();
          _this.btnAddToCart();

          document.querySelector(".page-node.current").classList.remove("current");
          this.classList.add("current");
        if (currentPage >= 1 && currentPage <= totalPages) {
            btnPrevPage.classList.remove("active");
            btnNextPage.classList.remove("active");
        };
        if (currentPage === 1) {
          btnPrevPage.classList.add("active");
        };
        if (currentPage === totalPages) {
          btnNextPage.classList.add("active");
        }
        };
      });
    },

    // Sort sản phẩm:
    sortProducts: function() {
      const _this = this;
      choice.onchange = function() {
        if(choice.value === 'manual') {
          // this.renderProducts();
        } else if (choice.value === "price-ascending") {
          all_products.sort((a, b) => a.price - b.price);         
        } else if (choice.value === "price-descending") {
          all_products.sort((a, b) => b.price - a.price);       
        } else if (choice.value === "title-ascending") {
          var x = all_products.sort((a, b) => a.name.localeCompare(b.name));  
        } else if (choice.value === "title-descending") {
          all_products.sort((a, b) => b.name.localeCompare(a.name));   
        }
        // alert(this.value);
        _this.renderProducts();  
        _this.btnDetailProduct();
        _this.itemPerPage();
      };
    },

    // Tìm kiếm sản phẩm
    searchProduct: function(){
      const _this = this;
      const search_bx2 = document.querySelector(".search_bx2");
      let html = '';
      window.addEventListener('load', function(){
        all_products.forEach(item => {
          const {image, name, price} = item;
          var formatPrice = _this.formatter(price);
          html += `
                  <div class="item-search">
                      <div class="thumbs">
                        <a href="#">
                          <img src="${image}" alt="">
                        </a>
                      </div>
                      <div class="title2">
                        <a href="#" class="nameSearch">
                          ${name}
                        </a>
                        <div class="box-pro-prices">	
                                <p class="pro-price highlight"><strong>${formatPrice}</strong>
                                    <span class="pro-price-del"><del class="compare-price">${formatPrice}</del></span>
                                </p>
                          </div>
                      </div>
                  </div>`
        })
        
        search_bx2.innerHTML = html;
        _this.btnDetailProduct();
        _this.btnAddToCart();
      });

      // Click chuột ra ngoài thì sẽ ẩn thanh search:
      search.onblur = function() {
        search_bx2.style.visibility = 'hidden';
        search_bx2.style.opacity = 0;
      }

      // Nhập ký tự tìm kiếm:
      search.onkeyup = function() {
        let filter = search.value.toLowerCase();
        let a = document.querySelectorAll('.item-search');
        // console.log(filter, a);
        for (let i = 0; i < a.length; i++) {
          let b = a[i].querySelector('.title2');
          let c = b.getElementsByClassName('nameSearch')[0];
          // console.log(c);
          let textValue = c.textContent || c.innerText;
          if (textValue.toLowerCase().indexOf(filter) >-1){
            a[i].style.display = '';
            search_bx2.style.visibility = 'visible';
            search_bx2.style.opacity = 1;
          } else {
            a[i].style.display = 'none';
          }
          if (search.value == 0) {
             search_bx2.style.visibility = 'hidden';
             search_bx2.style.opacity = 0;
          }
        }
      };
    },

    // Click detail sản phẩm
    btnDetailProduct: function() {
      $('.product-list').map(function() {
        $('.product-block .product-image a').click(function(){
          let id = $(this).parent().parent().data('id');
          let category = $(this).parent().parent().data('category');
          let image = $(this).children().children().data('image');
          let brand = $(this).parent().parent().data('brand');
          let name = $(this).parent().parent().data('name');
          let sku = $(this).parent().parent().data('sku');
          let price = $(this).parent().parent().data('price');
          let inventory = $(this).parent().parent().data('inventory');
          let size = $(this).parent().parent().data('size');
          let color = $(this).parent().parent().data('color');
          let description = $(this).parent().parent().data('description');
          let inCart = $(this).parent().parent().data('incart');
          let type = $(this).parent().parent().data('type');

          localStorage.setItem('id', id);
          localStorage.setItem('category', category);
          localStorage.setItem('image', image);
          localStorage.setItem('brand', brand);
          localStorage.setItem('name', name);
          localStorage.setItem('sku', sku);
          localStorage.setItem('price', price);
          localStorage.setItem('inventory', inventory);
          localStorage.setItem('size', size);
          localStorage.setItem('color', color);
          localStorage.setItem('description', description);
          localStorage.setItem('inCart', inCart);
          localStorage.setItem('type', type);
          window.location = '/layout/detail.html';
        });
      })
    },

    // Hiển thị nhãn mới, sale
    iconNewSale: function(){
      const _this = this;
      const labelProduct = document.querySelectorAll('.label-product');
      
      all_products.map(function(product, index){
      const {status, inventory} = product;
      var s = labelProduct[index];
    
      if (status === 'new'){
        s.classList.add('new')
      } else if (status === 'sale') {
        s.classList.add('sale')
      } else if (inventory === "Hết hàng") {
        s.classList.add('sold-out')
      }
      });
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
      _this.setItem(product);
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
      const carts = document.querySelectorAll('.action.add-to-cart');
      const _this = this;
      carts.forEach((cart, index) => {
        cart.onclick = function(){
          _this.cartNumbers(all_products[index]);
          _this.totalCost(all_products[index])
        }
      });
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
    
    // Chỗ này cần xem lại, vì sao hàm ở đây không chạy được nhưng ở bên shopping carts thì lại chạy được
    // displayCart: function() {
    //   let cartItems = localStorage.getItem('productsInCart');
    //   cartItems = JSON.parse(cartItems);
    //   console.log(cartItems);
    // },
    

    // Hàm để gọi các phương thức
    start: function () {
      this.renderProducts();
      this.toggle_subMenu();
      this.itemPerPage();
      this.btnDetailProduct();
      this.renderPagination();
      this.btnNextPage();
      this.btnPrevPage();
      this.btnChangePage();
      this.sortProducts();
      this.searchProduct();
      this.iconNewSale();
      this.btnAddToCart();
      this.onloadCartNumbers();
    },
  };
  app.start();
}




