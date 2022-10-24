 var text = ["Velkommen", "Welcome"];
    var counter = 0;
    var elem = document.getElementById("greeting");
    setInterval(change, 3000);
    function change() {
     elem.innerHTML = text[counter];
        counter++;
        if(counter >= text.length) { counter = 0; }
    } 

   /* var text = ["Velkommen"];
    var counter = 0;
    var elem = $("#greeting");
    setInterval(change, 3000);
    function change() {
        elem.fadeOut(function(){
            elem.html(text[counter]);
            counter++;
            if(counter >= text.length) { counter = 0; }
            elem.fadeIn();
        });
    }

function change() {
   // Fade out
   $("#greeting").fadeOut(100, function() {
      // Increment the counter
      counter++;
      if(counter >= text.length) { counter = 0; }
      // Update the text and fade in
      $("#greeting").text(text[counter]).fadeIn(100);
   })
}*/