// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    let isRegistered = false; // Track if the user has registered
    let cartItems = []; // Store added items in an array

    // Create a modal form for registration
    const modal = document.createElement("div");
    modal.id = "registerModal";
    modal.style.position = "fixed";
    modal.style.top = "50%";
    modal.style.left = "50%";
    modal.style.transform = "translate(-50%, -50%)";
    modal.style.padding = "20px";
    modal.style.backgroundColor = "#fff";
    modal.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.5)";
    modal.style.borderRadius = "8px";
    modal.style.zIndex = "1000";
    modal.style.display = "none"; // Hidden by default

    // Form content
    modal.innerHTML = `
        <h2>Register</h2>
        <form id="registerForm">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required><br><br>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required><br><br>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required><br><br>
            <button type="submit">Submit</button>
        </form>
    `;

    // Add the modal to the body
    document.body.appendChild(modal);

    // Select all "Add To Cart" buttons
    const addToCartButtons = document.querySelectorAll(".btn");

    // Add click event listeners to each button
    addToCartButtons.forEach(button => {
        button.addEventListener("click", function () {
            if (!isRegistered) {
                // Show the modal if the user is not registered
                modal.style.display = "block";
            } else {
                // Add the item to the cart
                const productElement = button.parentElement.querySelector("p").innerText;
                
                // Extract product name and price using regular expressions for better accuracy
                const match = productElement.match(/^(.*):\s*ksh:\s*(\d+(?:\.\d{1,2})?)$/i);

                if (match) {
                    const productName = match[1].trim();
                    const itemPrice = parseFloat(match[2]);

                    cartItems.push({ name: productName, price: itemPrice });
                    alert(`${productName} added to cart!`);
                } else {
                    console.error("Failed to extract product name and price from:", productElement);
                }
            }
        });
    });

    // Handle form submission
    document.getElementById("registerForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the page from refreshing
        alert("Thank you for registering!");
        isRegistered = true; // Set the registration flag to true
        modal.style.display = "none"; // Hide the modal after submission
    });

    // Create the "Show Cart" button
    const showCartButton = document.createElement("button");
    showCartButton.textContent = "Show Cart";
    showCartButton.style.marginTop = "20px";
    document.body.appendChild(showCartButton);

    // Create the cart modal
    const cartModal = document.createElement("div");
    cartModal.id = "cartModal";
    cartModal.style.position = "fixed";
    cartModal.style.top = "50%";
    cartModal.style.left = "50%";
    cartModal.style.transform = "translate(-50%, -50%)";
    cartModal.style.padding = "20px";
    cartModal.style.backgroundColor = "#fff";
    cartModal.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.5)";
    cartModal.style.borderRadius = "8px";
    cartModal.style.zIndex = "1000";
    cartModal.style.display = "none";

    document.body.appendChild(cartModal);

    // Show the cart when "Show Cart" is clicked
    showCartButton.addEventListener("click", function () {
        let cartContent = "<h2>Cart Items</h2>";
        let total = 0;

        if (cartItems.length === 0) {
            cartContent += "<p>Your cart is empty.</p>";
        } else {
            cartContent += "<ul>";
            cartItems.forEach(item => {
                cartContent += `<li>${item.name} - Ksh ${item.price.toFixed(2)}</li>`;
                total += item.price;
            });
            cartContent += "</ul>";
            cartContent += `<p>Total: Ksh ${total.toFixed(2)}</p>`;
        }

        cartContent += `<button id="closeCartButton">Close</button>`;
        cartModal.innerHTML = cartContent;
        cartModal.style.display = "block";

        // Add event listener to close the cart modal
        document.getElementById("closeCartButton").addEventListener("click", function () {
            cartModal.style.display = "none";
        });
    });
});
