var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
var tablink = document.getElementsByClassName("tab-link");
var tabcontent = document.getElementsByClassName("tab-content");


var opentab = (tabname) => {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}




let sidemenu = document.getElementById('sidemenu');

function openMenu() {
    sidemenu.style.right = "0";
}

function closeMenu() {
    sidemenu.style.right = "-200px";
}

let typed = new Typed('.auto-input', {
    strings: ['Web Develope!','Freelancer!', 'Blogger!'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 2000,
    loop: true,
})