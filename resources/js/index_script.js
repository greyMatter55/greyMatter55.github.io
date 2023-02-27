// document.body.getElementById("pg1").addEventListener("click", page_link("pg1"));
// document.body.getElementById("pg2").addEventListener("click", page_link("pg2"));
document.getElementById("pg2").addEventListener("click", test);


function test(){
    window.open("./webpages/projects.html", "_self");
}



// function page_link(page_num){
//     if(page_num === "pg1"){
//         window.open("./webpages/resume.html", "_blank");
//     } else if(page_num === "pg2"){
//         window.open("./webpages/projects.html", "_self");
//     } else if(page_num === "pg3"){
//         window.open("./webpages/about.html", "_self");
//     }    
// }
