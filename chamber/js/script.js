function toggleMenu() {
    document.getElementById("mainnav").classList.toggle("open");
    document.getElementById("hamburger").classList.toggle("open");
}

const x = document.getElementById("hamburger");
x.onclick = toggleMenu;


// current date with format: Wednesday, 24 July 2020.

const date = new Date();
const currentTime = document.getElementById('currentTime')

const fulldate = new Intl.DateTimeFormat('en-Us',{
    dateStyle: "full"
}).format(date);

currentTime.innerHTML = fulldate;

