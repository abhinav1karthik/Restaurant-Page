import "../styles/about.css";

function loadAboutPage() {
  const content = document.getElementById("content");
  const aboutDiv = document.createElement("div");
  aboutDiv.classList.add("about-container");

  const heading = document.createElement("h1");
  heading.textContent = "About Us";
  aboutDiv.appendChild(heading);

  const story = document.createElement("p");
  story.textContent =
    "Founded in 1990 by the Smith family, our restaurant began as a small bistro with a passion for great food and warm hospitality. Over the years, we have grown into a beloved dining destination.";
  aboutDiv.appendChild(story);

  const missionHeading = document.createElement("h2");
  missionHeading.textContent = "Our Mission";
  aboutDiv.appendChild(missionHeading);

  const mission = document.createElement("p");
  mission.textContent =
    "We are dedicated to providing an exceptional culinary experience by using fresh, locally sourced ingredients while combining tradition with innovation.";
  aboutDiv.appendChild(mission);

  const valuesHeading = document.createElement("h2");
  valuesHeading.textContent = "Our Values";
  aboutDiv.appendChild(valuesHeading);

  const valuesList = document.createElement("ul");
  const values = ["Quality", "Integrity", "Hospitality", "Innovation"];
  values.forEach((value) => {
    const li = document.createElement("li");
    li.textContent = value;
    valuesList.appendChild(li);
  });
  aboutDiv.appendChild(valuesList);

  const historyHeading = document.createElement("h2");
  historyHeading.textContent = "Our History";
  aboutDiv.appendChild(historyHeading);

  const history = document.createElement("p");
  history.textContent =
    "For over 30 years, our restaurant has been a cornerstone of the community, evolving from a quaint family-run eatery into a premier dining establishment known for its exceptional service and unforgettable flavors.";
  aboutDiv.appendChild(history);

  content.appendChild(aboutDiv);
}

export default loadAboutPage;
