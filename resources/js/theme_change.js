// DOM Elements

//Setting the theme
const themeButton = document.getElementById("theme_btn");
const theme_mode = "";

// Theme button Event Handlers
themeButton.onclick = () => {
  var theme_mode = document.body.className;

  if (document.body.id === "homepage") {
    if (theme_mode === "light_theme") {
      document.body.className = "dark_theme";
      document.getElementById("theme_btn").innerHTML = "<img src='./resources/img/theme_icon_dark.png'>";

      window.localStorage.setItem('theme', 'dark_theme');

    } else if (theme_mode === "dark_theme") {
      document.body.className = "light_theme";
      document.getElementById("theme_btn").innerHTML = "<img src='./resources/img/theme_icon_light.png'>";

      window.localStorage.setItem('theme', 'light_theme');
    }

  } else {
    if (theme_mode === "light_theme") {
      document.body.className = "dark_theme";
      document.getElementById("theme_btn").innerHTML = "<img src='../resources/img/theme_icon_dark.png'>";

      window.localStorage.setItem('theme', 'dark_theme');

    } else if (theme_mode === "dark_theme") {
      document.body.className = "light_theme";
      document.getElementById("theme_btn").innerHTML = "<img src='../resources/img/theme_icon_light.png'>";

      window.localStorage.setItem('theme', 'light_theme');
    }

  }
}
