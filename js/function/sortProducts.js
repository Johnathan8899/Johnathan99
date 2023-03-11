// export default sortProducts
import loadProducts from "./load_product";
function sortProducts(n) {
    if (n == "price-ascending") {
        all_products.sort((a, b) => Number(a.price) - Number(b.price));
        console.log(n);
      }
      else if (n == "title-ascending") {
        all_products.sort((a, b) => a.name.localeCompare(b.name));
        console.log(n);
      } else if (n == "title-descending"){
        all_products.sort((a, b) => b.name.localeCompare(a.name));
      }
    loadProducts();
}

sortProducts(n);