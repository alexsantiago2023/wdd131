const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

function displayProducts(data) {
    const selectElement = document.querySelector("#product")
    data.forEach(product => {
        let name = document.createElement("option");

        name.textContent = product.name;
        name.value = product.name;

        selectElement.appendChild(name)
    })
}

displayProducts(products)

//Click Count * * * * * * * * *//
// Get the button and the span that displays the click count
const button = document.getElementById('button');

// Get the stored value from localStorage or initialize to 0
let clickCount = localStorage.getItem('clickCount') ? parseInt(localStorage.getItem('clickCount')) : 0;

// Add a click event listener to the button
button.addEventListener('click', () => {
    // Increment the click count
    clickCount++;

    // Store the updated click count in localStorage
    localStorage.setItem('clickCount', clickCount);
});


//Footer * * * * * * * * * * * //
document.getElementById("currentyear").innerHTML = new Date().getFullYear();

document.getElementById("lastmodified").textContent = new Date(document.lastModified);