// Add a random integer to Math, as it should be.
Math.randInt = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  
  
  // Get a string back from the input where all characters not including spaces are replaced by a random character.
  function getRandStringFrom(chars, string) {
    var random_string = "";
  
    for (var char = 0; char < string.length + 1; char++) {
      if (string[char] == " ") random_string += " ";
      else random_string += chars.charAt(Math.randInt(0, chars.length));
    }
  
    return random_string;
  }
  
  
  // Run a script when the window is loaded.
  window.onload = function() {
    // The randomised string of text to be displayed.
    var random_appear = document.querySelector(".animated-text.glitched.random-appear");
    // The notmal text string to be displayed.
    var text_appear = document.querySelector(".animated-text.glitched.text-appear");
  
    // Create a timed loop that runs every 5 seconds.
    (function loop() {
      var original_content = text_appear.innerText;
      var current_length = 0;
  
      // This is the update loop that updates for every character in the original string.
      var appearUpdate = setInterval(function() {
        // Get the current length substring from the orifinal content.
        var substring_section = original_content.substring(0, current_length);
        
        // If the first or last characters are spaces, make them non-breaking so the text doesn't stagger.
        substring_section = substring_section.replace(/^ /, "\xa0").replace(/ $/, "\xa0");
        
        // Get the randomised version of the substring above.
        var random_string = getRandStringFrom("@#$%^", substring_section);
  
        // Set the respective elements.
        // random_appear.innerText = random_string;
        text_appear.innerText = substring_section;
  
        // Increase the length and prepare for the next update.
        current_length++;
  
        // If the current string length is as long as the final message, it must be done.
        if (current_length > original_content.length) clearInterval(appearUpdate);
      }, 100);
  
      // Run this current loop again.
     // setTimeout(loop, 7000);
    })();
  };
  