window.onscroll = function() {onScrollChange()};
            
function onScrollChange(){
let getSmall = "0.3";
let getBig = "0.2";
//document.body.scrollTop > 1 || 
if (document.documentElement.scrollTop > 1){
    
    // document.getElementById("logoBackground").setAttribute("Style", "height: 12vh;width:20%;");
    document.getElementById("logoBackground").className = "scrolled";
    
    document.getElementById("logoBackground").setAttribute("Style", "animation-name: scrolled; animation-duration: " + getSmall +"s;");
    // setTimeout(int(animationLength)*1000)
    // document.getElementById("logoBackground").setAttribute("Style", "height: 12vh;width:20%;");
    
    

} else{
    
    // document.getElementById("logoBackground").setAttribute("Style", "height:inherit;width:26%;"); 
    document.getElementById("logoBackground").className = "notScrolled";
    document.getElementById("logoBackground").setAttribute("Style", "animation-name: notScrolled; animation-duration: " + getBig +"s;");
    
} 
}