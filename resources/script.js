const hamburger = document.querySelector(".ham");

const list = document.querySelector(".list");

const toggler = () => {
    list.classList.toggle("shown")
    hamburger.innerHTML("")
};


hamburger.addEventListener("click", toggler);