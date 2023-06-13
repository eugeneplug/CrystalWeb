

let buttons = document.querySelectorAll('li');

buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    
    let activeButton = document.querySelector('li.active');
    
    
    if (activeButton && activeButton !== button) {
      activeButton.classList.remove('active');
    }
    
   
    button.classList.add('active');
  });
});




function showImage(imageNumber) {
 
  var imageBlocks = document.getElementsByClassName("image-block");
  for (var i = 0; i < imageBlocks.length; i++) {
    imageBlocks[i].style.display = "none";
  }
  
  
  var selectedImage = document.getElementById("image" + imageNumber);
  if (selectedImage) {
    selectedImage.style.display = "block";
  }
}

