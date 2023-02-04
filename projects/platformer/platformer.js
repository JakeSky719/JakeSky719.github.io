$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    //create walls
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)

    createPlatform(0, 300, 20, 20); // done
    createPlatform(90, 300, 200, 20); // done
    createPlatform(620, 300, 200, 20); // done
    createPlatform(500, 620, 200, 20); // done
    createPlatform(700, 550, 200, 20); // done
    createPlatform(770, 666, 10 ,290); // done shrink
    createPlatform(900, 490, 200, 20); // done
    createPlatform(1200, 490, 200, 20); // done
    createPlatform(900, 351, 200, 20); // done
    createPlatform(433, 100, 40, 40); // done
    createPlatform(430, 300, 100, 0); // done
    createPlatform(850, 666, 10 ,290)
    createPlatform(930, 666, 10 ,290)
    createPlatform(1010, 666, 10 ,290)
    createPlatform(1090, 666, 10 ,290)
    createPlatform(1170, 666, 10 ,290)
    createPlatform(1250, 666, 10 ,290)
    createPlatform(850, 666, 10 ,290)

    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)
    
    
    
    
    
    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay)
    createCannon("right", 500, 3000)





    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
