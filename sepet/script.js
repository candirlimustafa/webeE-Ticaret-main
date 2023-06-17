document.addEventListener("DOMContentLoaded", function() {
    // Product data
    var products = [
      { name: "Product 1", price: 10 },
      { name: "Product 2", price: 20 },
      { name: "Product 3", price: 30 }
      // Add more products here
    ];
    
    // Generate product list
    var productList = document.getElementById("product-list");
    products.forEach(function(product) {
      var listItem = document.createElement("div");
      listItem.className = "list-group-item";
      listItem.dataset.price = product.price;
      
      var productDetails = document.createElement("div");
      productDetails.className = "d-flex justify-content-between";
      
      var productName = document.createElement("h5");
      productName.textContent = product.name;
      
      var quantityContainer = document.createElement("div");
      quantityContainer.className = "quantity-container";
      
      var minusBtn = document.createElement("button");
      minusBtn.className = "btn btn-sm btn-secondary minus-btn";
      minusBtn.textContent = "-";
      
      var quantity = document.createElement("span");
      quantity.className = "quantity";
      quantity.textContent = "0";
      
      var plusBtn = document.createElement("button");
      plusBtn.className = "btn btn-sm btn-secondary plus-btn";
      plusBtn.textContent = "+";
      
      productDetails.appendChild(productName);
      quantityContainer.appendChild(minusBtn);
      quantityContainer.appendChild(quantity);
      quantityContainer.appendChild(plusBtn);
      
      
      //listItem.appendChild(productDetails);
      
      var price = document.createElement("span");
      price.className = "price";
      price.textContent = product.price.toFixed(2) + "TL";
      
      quantityContainer.appendChild(price);
      productDetails.appendChild(quantityContainer);

      listItem.appendChild(productDetails);
      
      productList.appendChild(listItem);
    });
  
    // Function to handle minus button click
    function handleMinusClick(quantityElement) {
      var quantity = parseInt(quantityElement.textContent);
      if (quantity > 0) {
        quantity--;
        quantityElement.textContent = quantity;
        updateTotalPrice();
      }
    }
  
    // Function to handle plus button click
    function handlePlusClick(quantityElement) {
      var quantity = parseInt(quantityElement.textContent);
      quantity++;
      quantityElement.textContent = quantity;
      updateTotalPrice();
    }
  
    // Function to update the total price
    function updateTotalPrice() {
      var total = 0;
      var items = document.querySelectorAll(".list-group-item");
      items.forEach(function(item) {
        var quantity = parseInt(item.querySelector(".quantity").textContent);
        var price = parseFloat(item.dataset.price);
        total += quantity * price;
      });
      document.getElementById("total-price").textContent = total.toFixed(2);
    }
  
    // Add event listeners to minus and plus buttons
    document.querySelectorAll(".minus-btn").forEach(function(button) {
      button.addEventListener("click", function() {
        var quantityElement = button.nextElementSibling;
        handleMinusClick(quantityElement);
      });
    });
  
    document.querySelectorAll(".plus-btn").forEach(function(button) {
      button.addEventListener("click", function() {
        var quantityElement = button.previousElementSibling;
        handlePlusClick(quantityElement);
      });
    });
  
    // Initialize the total price
    updateTotalPrice();
  });
    