function lightMode() {
    document.body.classList.remove('dark-mode');
    // Ensure the sun icon is active
    document.querySelector('.togglemenu .fa-sun').classList.add('active-mode');
    document.querySelector('.togglemenu .fa-moon').classList.remove('active-mode');
    localStorage.setItem('theme', 'light'); // Save preference
}

function darkMode() {
    document.body.classList.add('dark-mode');
    // Ensure the moon icon is active
    document.querySelector('.togglemenu .fa-moon').classList.add('active-mode');
    document.querySelector('.togglemenu .fa-sun').classList.remove('active-mode');
    localStorage.setItem('theme', 'dark'); // Save preference
}

let sidebarOpen = false;

function sidemenushow() {
    const sideBar = document.getElementById('sideBar'); // Main sidebar
    const aside = document.getElementById('aside1'); // mobile navbar
    const backshadow = document.getElementById('close-sidebar');

    //adding animations
    sideBar.classList.remove('slide-out');
    sideBar.classList.add('slide-in');
    aside.classList.add('slide-out');
    aside.classList.remove('slide-in');

    // Show the sidebar and toggle icons
    sideBar.style.display = 'block';
    sideBar.style.opacity ='1';
    aside.style.opacity = '0';
    backshadow.style.display = 'block';
}

function sidemenunone() {
    const sideBar = document.getElementById('sideBar'); // Main sidebar
    const aside = document.getElementById('aside1'); //mobile navbar
    const backshadow = document.getElementById('close-sidebar');

    //adding animations
    sideBar.classList.remove('slide-in');
    sideBar.classList.add('slide-out');
    aside.classList.remove('slide-out');
    aside.classList.add('slide-in');

    // Hide the sidebar and toggle icons
    sideBar.style.opacity = '0';
    aside.style.display = 'block';
    aside.style.opacity ='1';
    backshadow.style.display = 'none'; 
}

function activelink(){
    const navLinks = document.querySelectorAll('.linkpages a, .linkpages1 a');
    const currentPage = window.location.pathname.split("/").pop();

    navLinks.forEach(lin => {
        const href = lin.href.split("/").pop();
        if (href === currentPage){
            lin.classList.add('active');
        }
    });
}

activelink();
    

document.addEventListener('DOMContentLoaded', function() {
    // Handles active theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        document.querySelector('.togglemenu .fa-moon').classList.add('active-mode');
        document.querySelector('.togglemenu .fa-sun').classList.remove('active-mode');
    } else {
        document.body.classList.remove('dark-mode');
        document.querySelector('.togglemenu .fa-sun').classList.add('active-mode');
        document.querySelector('.togglemenu .fa-moon').classList.remove('active-mode');
    }

    // Including continues typing of vital-go
    new Typed("#motto", {
        strings: ["Our Motto:", "Connected Health.", "Empowered Lives.", "Your Health.", "Anywhere.", "Anytime."],
        typeSpeed: 250,
        loop: true
    });
});

// Generate time labels for 24 hours
// function generateTimeLabels() {
//     const labels = [];
//     const now = new Date();
//     for (let hour = 0; hour < 24; hour++) {
//         const time = new Date(now);
//         time.setHours(hour);
//         labels.push(time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }));
//     }
//     return labels;
// }

// Update current time display
// function updateCurrentTime() {
//     const now = new Date();
//     const timeString = now.toLocaleTimeString('en-US', { 
//         hour: '2-digit', 
//         minute: '2-digit', 
//         second: '2-digit',
//         hour12: true
//     });
//     document.getElementById('currentTime').textContent = timeString;
//     setTimeout(updateCurrentTime, 1000);
// }

// updateCurrentTime();



// function updateChart() {
function fluctuate(current, min, max, step = 1, decimals = 0) {
  const change = (Math.random() > 0.5 ? 1 : -1) * step * Math.random();
  let next = parseFloat(current) + change;
  next = Math.max(min, Math.min(next, max));
  return decimals ? next.toFixed(decimals) : Math.round(next);
}

let heartRate = 72;
let bloodPressure = { sys: 120, dia: 80 };
let oxygen = 98;
let temperature = 36.7;
let respiratory = 16;
let sugar = 97;
let weight = 70.5;

// Heart Rate (1 sec)
setInterval(() => {
  heartRate = fluctuate(heartRate, 60, 100, 2);
  document.getElementById("heart-rate").textContent = heartRate;
}, 5000);

// Blood Pressure (5 sec)
setInterval(() => {
  bloodPressure.sys = fluctuate(bloodPressure.sys, 110, 130, 2);
  bloodPressure.dia = fluctuate(bloodPressure.dia, 70, 90, 2);
  document.getElementById("blood-pressure").textContent = `${bloodPressure.sys}/${bloodPressure.dia}`;
}, 5000);

// Oxygen (3 sec)
setInterval(() => {
  oxygen = fluctuate(oxygen, 95, 100, 1);
  document.getElementById("oxygen").textContent = oxygen;
}, 5000);

// Temperature (4 sec)
setInterval(() => {
  temperature = fluctuate(temperature, 36.5, 37.5, 0.1, 1);
  document.getElementById("temperature").textContent = temperature;
}, 5000);

// Respiratory Rate (2 sec)
setInterval(() => {
  respiratory = fluctuate(respiratory, 12, 20, 1);
  document.getElementById("respiratory").textContent = respiratory;
}, 5000);

// Blood Sugar (6 sec)
setInterval(() => {
  sugar = fluctuate(sugar, 90, 110, 2);
  document.getElementById("sugar").textContent = sugar;
}, 5000);

// Weight (10 sec)
setInterval(() => {
  weight = fluctuate(weight, 69.5, 72.0, 0.1, 1);
  document.getElementById("weight").textContent = weight;
}, 5000);
// }
