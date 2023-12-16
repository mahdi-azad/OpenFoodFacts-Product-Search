 //input 
 const inputProduct = document.getElementById("searchInput")
 //ul
 const resultList = document.getElementById("results")

 //event listener for inputProduct
 inputProduct.addEventListener("input", () => {
     const query = inputProduct.value;
     
     if (query) {
        resultList.innerHTML = "Loading..."
        fetch(`https://world.openfoodfacts.org/api/v0/product/${query}.json`)
            .then(response => response.json())
            .then(data => {
                const product = data.product
                const productName = data.product.product_name
                const productDescription = data.product.generic_name

                resultList.innerHTML = `<li><strong>${productName}</strong><br/> <strong>${productDescription}</strong></li> `
            })
            .catch(error => console.log(error))
     } else {
        resultList.innerHTML = "Please search a product code or name"
     }
 })

    
