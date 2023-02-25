// DOM Elements

//Set theme on reload
window.onload = set_theme();

function set_theme(){
  const cur_theme = window.localStorage.getItem("theme");

  if(cur_theme !== null && cur_theme === "dark_theme"){
    document.body.className = "dark_theme";
    document.getElementById("theme_btn").innerHTML = "<img src='./resources/img/theme_icon_dark.png'>"
  } else if(cur_theme !== null && cur_theme === "light_theme"){
    document.body.className = "light_theme";
    document.getElementById("theme_btn").innerHTML = "<img src='./resources/img/theme_icon_light.png'>"
  }
}


//Setting the theme
const themeButton = document.getElementById("theme_btn");
const theme_mode = "";

// Theme button Event Handlers
themeButton.onclick = () => {
    var theme_mode = document.body.className;

    if (theme_mode === "light_theme") {
        document.body.className = "dark_theme";
        document.getElementById("theme_btn").innerHTML = "<img src='./resources/img/theme_icon_dark.png'>"
        window.localStorage.setItem('theme', 'dark_theme');

    } else if (theme_mode === "dark_theme") {
        document.body.className = "light_theme";
        document.getElementById("theme_btn").innerHTML = "<img src='./resources/img/theme_icon_light.png'>"
        window.localStorage.setItem('theme', 'light_theme');
    }
};
