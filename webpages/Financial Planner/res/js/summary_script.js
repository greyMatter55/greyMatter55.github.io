// DOM Elements

//Set theme on reload
window.onload = set_theme();

function set_theme(){
  const cur_theme = window.localStorage.getItem("theme");
  

  if(cur_theme !== null && cur_theme === "dark_theme"){
    document.body.className = "dark_theme";
  } else if(cur_theme !== null && cur_theme === "light_theme"){
    document.body.className = "light_theme";
  }
}


//Setting the theme
const darkButton = document.getElementById("dm_button");
const lightButton = document.getElementById("lm_button");
const body = document.body;


// Theme button Event Handlers
darkButton.onclick = () => {
  document.body.className = "dark_theme";
  window.localStorage.setItem('theme', 'dark_theme');
};

lightButton.onclick = () => {
  document.body.className = "light_theme";
  window.localStorage.setItem('theme', 'light_theme');
};



//Current Date
function current_time() {
  const cur_date = new Date()
  document.getElementById("cur_date").textContent = cur_date.toDateString();
}
setInterval(current_time,1000);