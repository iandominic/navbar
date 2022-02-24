const section_createDrop = document.querySelector('#create');
const section_homeDrop = document.querySelector('#home');
const section_homeDrop_desc = document.querySelector('#description');
const section_sideNav = document.querySelector('#sideNav');

const btn_dropDown = document.querySelector('#btn');
const btn_goUp = document.querySelector('#btn_two');

const btn_closeSideNav = document.querySelector('#close-side-nav');
const btn_openSideNav = document.querySelector('#open-side-nav');

btn_dropDown.onclick = function() {
    myFunction()
};

btn_goUp.onclick = function() {
    myFunction_two()
};

btn_closeSideNav.onclick = function() {
    closeSideNav()
};

btn_openSideNav.onclick = function() {
    openSideNav()
};


function myFunction() {
    btn_dropDown.classList.add("hidden");
    btn_goUp.classList.remove("hidden");

    section_createDrop.classList.remove("hidden");
}

function myFunction_two() {
    btn_dropDown.classList.remove("hidden");
    setTimeout(timer, 500);
}

function timer() {
    btn_goUp.classList.add("hidden");
    section_createDrop.classList.add("hidden");
}

function closeSideNav() {
    section_sideNav.style.transition = "all .3s";
    section_sideNav.style.right = "-75%";

    section_homeDrop.classList.remove("blurred");
    section_createDrop.classList.remove("blurred");
}

function openSideNav() {
    section_sideNav.style.transition = "all .3s";
    section_sideNav.style.right = "0%";

    section_homeDrop.classList.add("blurred");
    section_createDrop.classList.add("blurred");
}


