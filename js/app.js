// set time
function updateCurrentTime() {
  let now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  let formattedTime = `${padZero(hours)}:${padZero(minutes)}:${padZero(
    seconds
  )}`;

  let amPm = hours < 12 ? "صبح" : "بعدازظهر";

  document.getElementById("currentTime").innerText = formattedTime;
  document.getElementById("amPm").innerText = amPm;

  setTimeout(updateCurrentTime, 1000);
}

function padZero(number) {
  return number < 10 ? "0" + number : number;
}

updateCurrentTime();

// dashboard content
const videoContainerHTML = `
<div class="carts">
    <div style="position: relative;">
        <img class="video-img" alt="" src="public/img/hq720.webp" >
        <div style="position: absolute; bottom: 7px; right:5px; background-color: black; border-radius: 5px; padding:3px;">
            <span style="color:white" >4:57:38</span>
        </div>
    </div>
    <div class="cart-title">
        <img class="cart-titleImg" src="https://yt3.ggpht.com/EpunmP_QxObRT33gHSmoZppAf0UniOg5CiQPtxw6LGMfY13Bic_6WfT9xEzHtmODB3IbmRIS=s68-c-k-c0x00ffffff-no-rj" alt="">
        <p class="long-text">Dr Zakir Naik's Full Talk + Q&amp;A | Qatar Tour | Watch @BelievingBeingsUncut</p>
    </div>
    <div class="cart-extraInfo">
        <div class="cart-extraInfo-company">
            <p>BelievingBeings</p>
            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false">
                <g>
                    <path d="M12,2C6.5,2,2,6.5,2,12c0,5.5,4.5,10,10,10s10-4.5,10-10C22,6.5,17.5,2,12,2z M9.8,17.3l-4.2-4.1L7,11.8l2.8,2.7L17,7.4 l1.4,1.4L9.8,17.3z">
                    </path>
                </g>
            </svg>
        </div>
        <p>1.2M views • 10 months ago</p>
    </div>
</div>
`;

function repeatVideoContainers() {
  document.getElementById("mainContent").innerHTML = "";
  const contentDiv = document.querySelector(".content");

  for (let i = 0; i < 16; i++) {
    contentDiv.innerHTML += videoContainerHTML;
  }
}

repeatVideoContainers();

// handle nav click
function toggleSlide(element, typeBtn) {
  const ulElement = element.nextElementSibling,
    arrow = element.querySelector(".arrow"),
    links = document.querySelectorAll(".category-link, .subcategory-link");

  if (typeBtn == "with-child") {
    if (ulElement.classList.contains("active")) {
      ulElement.classList.remove("active");
      ulElement.classList.add("dissactive");
    } else {
      ulElement.classList.add("active");
      ulElement.classList.remove("dissactive");
    }
    arrow.classList.toggle("rotate180");
  }

  if (typeBtn == "no-child" || typeBtn == "child") {
    links.forEach(function (link) {
      if (link.matches(".select")) {
        link.classList.remove("select");
      }
    });
    element.classList.add("select");
  }
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

// change diraction / change language
function changeDir() {
  const body = document.body;

  const currentDirection = window.getComputedStyle(body).direction;

  body.style.direction = currentDirection === "rtl" ? "ltr" : "rtl";
}



// check size
function checkResponsiveSize() {
  var screenWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  const sidebar = document.getElementById("sidebar");
  const search = document.getElementsByClassName("search");

  if (screenWidth < 1000) {
    sidebar.classList.add("hide");
    search[0].style.display = "none";
  } else {
    sidebar.classList.remove("hide");
    search[0].style.display = "block";
  }
}

checkResponsiveSize();

window.addEventListener("resize", function () {
  checkResponsiveSize();
});
