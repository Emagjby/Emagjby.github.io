fetch("https://bored-api.appbrewery.com/random")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error fetching activity:", error));
