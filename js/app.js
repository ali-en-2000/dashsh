// handle nav click
function toggleSlide(element, typeBtn) {
  const ulElement = element.nextElementSibling,
    arrow = element.querySelector(".arrow");

  if (ulElement.classList.contains("active")) {
    ulElement.classList.remove("active");
    ulElement.classList.add("dissactive");
  } else {
    ulElement.classList.add("active");
    ulElement.classList.remove("dissactive");
  }
  arrow.classList.toggle("rotate180");
}

// handle habbergur click
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const search = document.getElementsByClassName("search");

  if (sidebar.classList.contains("hide")) {
    sidebar.classList.remove("hide");
    search[0].style.display = "block";
  } else {
    sidebar.classList.add("hide");
    search[0].style.display = "none";
  }
}
