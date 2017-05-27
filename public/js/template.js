function main() {
          var menubutton = document.getElementById("menubutton");
          var nav = document.getElementsByTagName("nav")[0];
    
    
    menubutton.onclick = function(){
        
        console.log("U clicked the menu button.");
        
        if(nav.style.display === "none"){
            nav.style.display = "block";
            nav.style.opacity = "1";
            return;
        }else{
            nav.style.display = "none";
            nav.style.opacity = "0";
            return;
        }
    }
}

window.onload = function() {
       main();
}
