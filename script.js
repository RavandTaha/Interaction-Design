const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

const loadingSpinner = document.getElementById('loading-spinner');

// Define the URL of the external API
const apiUrl = "https://api.noroff.dev/api/v1/gamehub";

// Get the product-list container element
const productList = document.getElementById("product-list");
const productList2 = document.getElementById("product-list2");


if (bar) {
  bar.addEventListener('click',() =>{
    nav.classList.add('active');
  })
}

if (close) {
  close.addEventListener('click',() =>{
    nav.classList.remove('active');
  })
}


// Fetch data from the API for homepage pages
fetch(apiUrl)
.then((response) => response.json())
.then((data) => {
  // Process the data and display it in the product-list container
  data.forEach((product) => {
    const productItem = document.createElement("div");
    productItem.classList.add("product-item");
          const productLink = document.createElement('a')
          productLink.href = "product2.html";
          productLink.textContent = product.title;
          productItem.appendChild(productLink);
          productList2.appendChild(productItem);
    const image = document.createElement("img");
    image.src = product.image;
    productItem.append(image);
    image.href = "product2.html";
    productList2.append(productItem);

  });
 })

  // catch error
  .catch((error) => {
  productList2.innerHTML = '<div class="error">There was an error fetching the games</div>';
  console.error("Error fetching data:", error);
  });


// Fetch data from the API for categories pages
fetch(apiUrl)
	.then((response) => response.json())
	.then((data) => {
		// Process the data and display it in the product-list container
		data.forEach((product) => {
			const productItem = document.createElement("div");
			productItem.classList.add("product-item");
            const productLink = document.createElement('a')
            productLink.href = "product2.html";
            productLink.textContent = product.title;
            productItem.appendChild(productLink);
            productList.appendChild(productItem);
			const description = document.createElement("p");
			description.innerText = product.description;
			productItem.append(description);
			const image = document.createElement("img");
			image.src = product.image;
			productItem.append(image);
			productList.append(productItem);

		});
	})

       // catch error
	.catch((error) => {
		productList.innerHTML = '<div class="error">There was an error fetching the games</div>';
		console.error("Error fetching data:", error);
	});



 






