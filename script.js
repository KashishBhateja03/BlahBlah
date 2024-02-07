var jsonData = {
  "msg1": "Roses are red, Violets are blue, I'm not a poet, But I'm falling for you.",
  "msg2": "Roses are red, Violets are blue, Sugar is sweet, But not as sweet as you.",
  "msg3": "Roses are red, My face is too, That only happens, When I'm around you.",
  "msg4": "Roses are red, Violets are blue, My heart's racing fast, Whenever I'm with you.",
  "msg5": "Roses are red, Violets are blue, You're the missing piece, To my life's puzzle, it's true.",
  "msg6": "Roses are red. My lips are blue. My heart began to beat again when I saw you.",
  "msg7": "Roses are red, violets are blue, if love were a game of hide and seek, I would always find you.",
  "msg8": "Roses are red, violets are blue, if love was a marathon, I'd want to run it with you.",
  "msg9": "Roses are red, violets are blue, if love was a game, I'd choose to play it with you."
};

// Initialize message index
var currentMsgIndex = 1;

// Function to update message and display in HTML
function showMessage() {
  // Get the current message based on index
  var currentMsgKey = "msg" + currentMsgIndex;
  var message = jsonData[currentMsgKey];
  
  // Display the message in the HTML element
  document.getElementById("output").innerHTML = "<p>" + message + "</p>";
}

// Initial display of message
showMessage();

// Button click event
document.getElementById("showStringBtn").addEventListener("click", function() {
  // Increment the message index for the next click
  currentMsgIndex++;
  
  // Reset the message index if it exceeds the number of messages
  if (currentMsgIndex > Object.keys(jsonData).length) {
      currentMsgIndex = 1;
  }
  
  // Update and display the message
  showMessage();
});

// Button to navigate to second page
document.getElementById("goToSecondPage").addEventListener("click", function() {
  window.location.href = "rose.html"; // Change "second_page.html" to the path of your second page
});
