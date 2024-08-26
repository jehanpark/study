fetch(productInfo)
.then((response)=>response.json())
.then((data)=>{
 let idCounter = Data.now()
 const product = {
  data:data.data.map((item)=>({
 ...item,
 id: idCounter++, 
  }))
 }

 const params = new URLSearchParams(window.location.search)
 const category = params.get("category")
 const name = params.get("name")
 

 const product = products.data.find((product)=>{
  product.category === category && product.name === name 
 })

 if (product) {
  const productDetailDiv = document.querySelector("#product-detail")
  productDetailDiv.innerHTML = `
  <div class="product-category">
  <h3>현재 카테고리 ${product.category} > ${product.name}</h3>.
  </div>
  <div class="product-img>
  img src="${product}" alt="${product.name}"/>
  </div>
  <div calss="product-info>
  <h1>${product.name}</h1>
  <p>Category: ${product.category}<p>
  <p>Price: ${price} 원<p>
 }

 const productDetailDiv = document.querySelector("#product-detail")

 productDetailDiv.innerHTML = `
 <dov class="product-category">
 <h3>현재 카테고리 ${product.data[0].category}<h3>
 </div>`
})
.catch((error)=>{
})