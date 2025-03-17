import "../styles/menu.css";

function loadMenuPage() {
  const content = document.getElementById("content");
  const menuDiv = document.createElement("div");
  menuDiv.classList.add("menu-container");

  const heading = document.createElement("h1");
  heading.textContent = "Our Menu";
  menuDiv.appendChild(heading);

  const menuSections = [
    {
      title: "Appetizers",
      items: [
        {
          name: "Bruschetta",
          description: "Toasted bread with fresh tomatoes and basil.",
          price: "$8",
        },
        {
          name: "Calamari",
          description: "Lightly fried calamari with lemon aioli.",
          price: "$12",
        },
      ],
    },
    {
      title: "Main Courses",
      items: [
        {
          name: "Spaghetti Carbonara",
          description: "Classic Italian pasta with pancetta and egg.",
          price: "$15",
        },
        {
          name: "Grilled Ribeye Steak",
          description: "Served with roasted vegetables and mashed potatoes.",
          price: "$25",
        },
      ],
    },
    {
      title: "Desserts",
      items: [
        {
          name: "Tiramisu",
          description: "Coffee-flavored Italian dessert.",
          price: "$7",
        },
        {
          name: "Chocolate Lava Cake",
          description: "Warm cake with a molten chocolate center.",
          price: "$8",
        },
      ],
    },
  ];

  menuSections.forEach((section) => {
    const sectionDiv = document.createElement("div");
    sectionDiv.classList.add("menu-section");

    const sectionTitle = document.createElement("h2");
    sectionTitle.textContent = section.title;
    sectionDiv.appendChild(sectionTitle);

    section.items.forEach((item) => {
      const itemDiv = document.createElement("div");
      itemDiv.classList.add("menu-item");

      const itemName = document.createElement("h3");
      itemName.textContent = item.name;

      const itemDesc = document.createElement("p");
      itemDesc.textContent = item.description;

      const itemPrice = document.createElement("span");
      itemPrice.textContent = item.price;
      itemPrice.classList.add("price");

      itemDiv.appendChild(itemName);
      itemDiv.appendChild(itemDesc);
      itemDiv.appendChild(itemPrice);

      sectionDiv.appendChild(itemDiv);
    });

    menuDiv.appendChild(sectionDiv);
  });

  content.appendChild(menuDiv);
}

export default loadMenuPage;
