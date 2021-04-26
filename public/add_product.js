$(function () {
    let productName = $('#productName')
    let manufacturerName = $('#manufacturerName')
    let price = $('#price')
    let btnProductAdd = $('#btnProductAdd')
    btnProductAdd.click(function () {
        addProduct(productName.val(), manufacturerName.val(), price.val(), function (addedProduct) {
            window.alert(`Added ` + addedProduct.name + ` to database`)
        })
    })
})