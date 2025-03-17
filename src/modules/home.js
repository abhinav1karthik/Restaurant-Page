import "../styles/home.css";
import RestaurantImage from "../images/rest.jpg";

function loadHomePage() {
  const content = document.getElementById("content");
  const homeDiv = document.createElement("div");
  homeDiv.classList.add("home-container");

  const textContainer = document.createElement("div");
  textContainer.classList.add("home-text");

  const heading = document.createElement("h1");
  heading.textContent = "Welcome to Our Restaurant";

  const subheading = document.createElement("h3");
  subheading.textContent = "A Culinary Journey Like No Other";

  const description1 = document.createElement("p");
  description1.textContent =
    "Experience an unforgettable dining experience with world-class flavors and a welcoming atmosphere.";

  const description2 = document.createElement("p");
  description2.textContent =
    "Our chefs craft every dish with passion, using the freshest local ingredients to create culinary masterpieces.";

  textContainer.appendChild(heading);
  textContainer.appendChild(subheading);
  textContainer.appendChild(description1);
  textContainer.appendChild(description2);

  homeDiv.appendChild(textContainer);

  const imageContainer = document.createElement("div");
  imageContainer.classList.add("image-container");

  const image = document.createElement("img");
  image.src = RestaurantImage;
  image.alt = "Restaurant Ambiance";
  imageContainer.appendChild(image);

  homeDiv.appendChild(imageContainer);

  const featuredSection = document.createElement("div");
  featuredSection.classList.add("featured-section");

  const featuredHeading = document.createElement("h2");
  featuredHeading.textContent = "Featured Dishes";

  const featuredList = document.createElement("ul");
  const dishes = [
    "Grilled Salmon with Herbs",
    "Ribeye Steak with Truffle Butter",
    "Vegan Buddha Bowl",
    "Homemade Pasta Delight",
  ];
  dishes.forEach((dish) => {
    const li = document.createElement("li");
    li.textContent = dish;
    featuredList.appendChild(li);
  });

  featuredSection.appendChild(featuredHeading);
  featuredSection.appendChild(featuredList);

  homeDiv.appendChild(featuredSection);
  content.appendChild(homeDiv);
}

export default loadHomePage;
