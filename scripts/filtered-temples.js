document.getElementById("currentyear").innerHTML = new Date().getFullYear();

document.getElementById("lastmodified").textContent = new Date(document.lastModified);

const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
  mainnav.classList.toggle('show');
  hambutton.classList.toggle('show');
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Atlanta Georgia",
    location: "Atlanta, Georgia",
    dedicated: "1983, June, 1",
    area: 34500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/atlanta-georgia/400x250/atlanta-georgia-mormon-temple-900182-wallpaper.jpg"
  },
  {
    templeName: "Nauvoo Illinois",
    location: "Nauvoo, Illinois",
    dedicated: "1999, October, 24",
    area: 54000,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/nauvoo-illinois/400x250/nauvoo-temple-756496-wallpaper.jpg"
  },
  {
    templeName: "Madrid Spain",
    location: "Madrid, Spain",
    dedicated: "1996, June, 11",
    area: 45800,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/madrid-spain/400x250/madrid-spain-temple-954939-wallpaper.jpg"
  },
];



const oldLink = document.querySelector("#old");

oldLink.addEventListener("click", () => {
  var filteredTemples = temples.filter(temple => {
    const year = temple.dedicated.split(",")[0].trim();
    return !isNaN(year) && parseInt(year) < 1900;
  });
  createTempleCard(filteredTemples);
});

const newLink = document.querySelector("#new");

newLink.addEventListener("click", () => {
  var filteredTemples = temples.filter(temple => {
    const year = temple.dedicated.split(",")[0].trim();
    return !isNaN(year) && parseInt(year) > 2000;
  });
  createTempleCard(filteredTemples);
});

const largeLink = document.querySelector("#large");

largeLink.addEventListener("click", () => {
  var filteredTemples = temples.filter(temple => {
    var area = temple.area;
    return !isNaN(area) && parseInt(area) > 90000;
  });
  createTempleCard(filteredTemples);
});

const smallLink = document.querySelector("#small");

smallLink.addEventListener("click", () => {
  var filteredTemples = temples.filter(temple => {
    var area = temple.area;
    return !isNaN(area) && parseInt(area) < 10000;
  });
  createTempleCard(filteredTemples);
});

const homeLink = document.querySelector("#home");

homeLink.addEventListener("click", () => {
  createTempleCard(temples);
})

createTempleCard(temples);

function createTempleCard(filteredTemples) {
  document.querySelector("#grid").innerHTML = "";
  filteredTemples.forEach(temples => {
    let card = document.createElement("section");
    let name = document.createElement("h3");
    let location = document.createElement("p");
    let dedication = document.createElement("p");
    let area = document.createElement("p");
    let img = document.createElement("img");

    name.textContent = temples.templeName;
    location.innerHTML = `<span class="label">Location:</span> ${temples.location}`;
    dedication.innerHTML = `<span class="label">Dedicated:</span> ${temples.dedicated}`;
    area.innerHTML = `<span class="label">Size:</span> ${temples.area} sq ft`;
    img.setAttribute("src", temples.imageUrl);
    img.setAttribute("alt", `${temples.templeName} Temple`);
    img.setAttribute("loading", "lazy");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    card.appendChild(img);

    document.querySelector("#grid").appendChild(card);
  });
}
