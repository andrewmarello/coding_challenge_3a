console.log(`3a Customer Records Tracker - Andrew Marello`);

// Step 2: Create Customer Records
let customers = [
    {name: "Aaron Judge",
        email: "aaronjudge@gmail.com",
        purchases: ["Jerseys", "Shoes", "Socks"]
    },
    {name: "Tiger Woods",
        email: "tigerwoords@gmail.com",
        purchases: ["Clubs", "Balls", "Hats"]
    },
    {name: "Travis Etienne",
        email: "travissetienne@gmail.com",
        purchases: ["Shirts", "Cleats", "Shorts"]
    }
];

// Step 3: Add and Remove Data
customers.push(
    {name: "Carlos Alcaraz",
        email: "carlosalcaraz@gmail.com",
        purchases: ["Racquets", "Wristbands", "Polos"]
    });
    
    customers.shift();

// Step 4: Update Customer Info
customers.forEach(customer => {
    if (customer.name === "Travis Etienne") {
        customer.email = "travetn@gmail.com";
     }
});
customers.forEach(customer => {
    if (customer.name === "Tiger Woods") {
        customer.purchases.push("Snacks");
    }
});

// Step 5: Display Customer Information
customers.forEach(customer => {
    console.log(`Name: ${customer.name}, Email: ${customer.email}, Total Purchases: ${customer.purchases.length}`
    
    );
});
