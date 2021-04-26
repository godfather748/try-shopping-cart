$(function () {
    let productlist = $('#product-list')
    fetchProducts(function(products) {
        productlist.empty()
        for(p of products) {
            productlist.append(createProduct(p))
        }
    })
})