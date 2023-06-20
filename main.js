

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


//burger

let burger = document.querySelector('.navBurger');
let menu = document.querySelector('#menu');




// burger.addEventListener('click', () => {
//   menu.classList.toggle('disp');
// });



burger.addEventListener('click', () => {
  if (menu.classList.contains('disp')) {
    menu.classList.remove('disp');
    void menu.offsetWidth;
    menu.classList.add('animate-in');
  } else {
    menu.classList.remove('animate-in');
    menu.classList.add('animate-out');
  }
});

menu.addEventListener('animationend', () => {
  if (menu.classList.contains('animate-out')) {
    menu.classList.remove('animate-out');
    menu.classList.add('disp');
  }
});




/*search*/

document.getElementById('search-button').addEventListener('click', function() {
  var searchInput = document.getElementById('search-input').value;
  
  
  removeHighlights();
  
  
  if (searchInput.trim() !== '') {
    
    var regex = new RegExp(searchInput, 'gi');
    
    
    var textNodes = getTextNodes(document.body);
    textNodes.forEach(function(node) {
      var text = node.nodeValue;
      
      
      var matches = text.match(regex);
      
      if (matches && matches.length > 0) {
        
        var fragment = document.createDocumentFragment();
        
       
        var highlightedText = text.replace(regex, function(match) {
          var span = document.createElement('span');
          span.className = 'highlight';
          span.textContent = match;
          return span.outerHTML;
        });
        
        
        var tempElement = document.createElement('div');
        tempElement.innerHTML = highlightedText;
        
       
        while (tempElement.firstChild) {
          fragment.appendChild(tempElement.firstChild);
        }
        
        
        node.parentNode.replaceChild(fragment, node);
      }
    });
  }
});

function getTextNodes(node) {
  var textNodes = [];
  
  if (node.nodeType === Node.TEXT_NODE) {
    textNodes.push(node);
  } else {
    var children = node.childNodes;
    for (var i = 0; i < children.length; i++) {
      textNodes.push.apply(textNodes, getTextNodes(children[i]));
    }
  }
  
  return textNodes;
}

function removeHighlights() {
  var highlights = document.getElementsByClassName('highlight');
  while (highlights.length > 0) {
    var parentElement = highlights[0].parentNode;
    while (highlights[0].firstChild) {
      parentElement.insertBefore(highlights[0].firstChild, highlights[0]);
    }
    parentElement.removeChild(highlights[0]);
  }
}

