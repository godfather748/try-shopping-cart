function fetchProducts(done) {
    $.get('/api/products', function (data) {
        done(data)
    })
}
function addProduct(name, manuf, price, done) {
    $.post('/api/products', {
        name: name,
        manufacturer: manuf,
        price: price
    }, function (data) {
        done(data)
    })
    // $.ajax({
    //     url: 'http://localhost:2678/api/products',
    //     type: "POST",
    //     data: {name: name, manufacturer: manuf, price: price},
    //     dataType: "json",
    //     beforeSend: function(x) {
    //       if (x && x.overrideMimeType) {
    //         x.overrideMimeType("application/json;charset=UTF-8");
    //       }
    //     },
    //     success: function(result) {
    //     //Write your code here
    //     }
    // });  
}
function createProduct(product) {
    return $(`  <div class="col-4 card m-2 p-3">
                    <h4 class="product-name">${product.name}</h4>
                    <div class="manufacturer-name">${product.manufacturer}</div>
                        <div class="row">
                            <div class="col-5 m-3 p-3">
                                <b>Rs. ${product.price}</b>
                            </div>
                            <button class="col-5 btn btn-primary m-3">Buy</button>
                        </div>
                </div>`)
}