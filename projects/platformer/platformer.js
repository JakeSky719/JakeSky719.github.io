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

    createPlatform(0, 200, 20, 20); // done
    createPlatform(90, 200, 200, 20); // done
    createPlatform(620, 200, 200, 20); // done
    createPlatform(500, 620, 200, 20); // done
    createPlatform(700, 550, 200, 20); // done
    createPlatform(770, 666, 0, 290); // done shrink
    createPlatform(900, 490, 200, 20); // done
    createPlatform(1200, 390, 200, 20); // done
    createPlatform(900, 270, 200, 20); // done
    createPlatform(430, 300, 90, 0); // done
    createPlatform(850, 666, 0, 290);
    createPlatform(930, 666, 0, 290);
    createPlatform(1010, 666, 0, 290);
    createPlatform(1090, 666, 0, 290);
    createPlatform(1170, 666, 0, 290);
    createPlatform(1250, 666, 0, 290);
    createPlatform(1330, 666, 0, 290);
    createPlatform(1250, 530, 0, 10);
    createPlatform(1250, 490, 0, 50);
    createPlatform(1170, 566, 0, 40);
    
    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)
    createCollectable("database", 570, 500, 0 )
    createCollectable("database", 770, 400, 0 )
    createCollectable("database", 0, 250, 0, 0 )
    createCollectable("database", 700, 50, 0 )
    createCollectable("database", 1250, 300, 0 )
    createCollectable("database", 960, 350, 0 )
    createCollectable("database", 960, 100, 0 )
    createCollectable("database", 450, 100, 0 )
    createCollectable("database", 300, 600, 0 )
    createCollectable("database", 500, 500, 0 )
    createCollectable("database", 1275, 475, 0 ) // in
    createCollectable("database", 1275, 650, 0 ) // in
    createCollectable("database", 500, 500, 0 ) // in
    createCollectable("database", 500, 500, 0 ) // in
    createCollectable("database", 500, 500, 0 ) // in
    createCollectable("steve", 500, 500, 0 ) // in
    createCollectable("grace", 500, 500, 0 ) // in
    
    
    
    
    
    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay)
    createCannon("right", 400, 3000)
    createCannon("right", 200, 5000)
    createCannon("bottom",0,60000)
    createCannon("bottom",30,60000)
    createCannon("bottom",60,60000)
    createCannon("bottom",90,60000)
    createCannon("bottom",120,60000)
    createCannon("bottom",150,60000)
    createCannon("bottom",180,60000)
    createCannon("bottom",210,60000)
    createCannon("bottom",240,60000)
    createCannon("bottom",270,60000)
    createCannon("bottom",300,60000)
    createCannon("bottom",330,60000)
    createCannon("bottom",360,60000)
    createCannon("bottom",390,60000)
    createCannon("bottom",420,60000)
    createCannon("bottom",450,60000)
    createCannon("bottom",480,60000)
    createCannon("bottom",510,60000)
    createCannon("bottom",540,60000)
    createCannon("bottom",570,60000)
    createCannon("bottom",600,60000)
    createCannon("bottom",630,60000)
    createCannon("bottom",660,60000)
    createCannon("bottom",690,60000)
    createCannon("bottom",720,60000)
    createCannon("bottom",750,60000)
    createCannon("bottom",780,60000)
    createCannon("bottom",810,60000)
    createCannon("bottom",840,60000)
    createCannon("bottom",870,60000)
    createCannon("bottom",900,60000)
    createCannon("bottom",930,60000)
    createCannon("bottom",960,60000)
    createCannon("bottom",990,60000)
    createCannon("bottom",1020,60000)
    createCannon("bottom",1050,60000)
    createCannon("bottom",1080,60000)
    createCannon("bottom",1110,60000)
    createCannon("bottom",1140,60000)
    createCannon("bottom",1170,60000)
    createCannon("bottom",1200,60000)
    createCannon("bottom",1230,60000)
    createCannon("bottom",1260,60000)
    createCannon("bottom",1290,60000)
    createCannon("bottom",1320,60000)
    createCannon("top",0,60000)
    createCannon("top",30,60000)
    createCannon("top",60,60000)
    createCannon("top",90,60000)
    createCannon("top",120,60000)
    createCannon("top",150,60000)
    createCannon("top",180,60000)
    createCannon("top",210,60000)
    createCannon("top",240,60000)
    createCannon("top",270,60000)
    createCannon("top",300,60000)
    createCannon("top",330,60000)
    createCannon("top",360,60000)
    createCannon("top",390,60000)
    createCannon("top",420,60000)
    createCannon("top",450,60000)
    createCannon("top",480,60000)
    createCannon("top",510,60000)
    createCannon("top",540,60000)
    createCannon("top",570,60000)
    createCannon("top",600,60000)
    createCannon("top",630,60000)
    createCannon("top",660,60000)
    createCannon("top",690,60000)
    createCannon("top",720,60000)
    createCannon("top",750,60000)
    createCannon("top",780,60000)
    createCannon("top",810,60000)
    createCannon("top",840,60000)
    createCannon("top",870,60000)
    createCannon("top",900,60000)
    createCannon("top",930,60000)
    createCannon("top",960,60000)
    createCannon("top",990,60000)
    createCannon("top",1020,60000)
    createCannon("top",1050,60000)
    createCannon("top",1080,60000)
    createCannon("top",1110,60000)
    createCannon("top",1140,60000)
    createCannon("top",1170,60000)
    createCannon("top",1200,60000)
    createCannon("top",1230,60000)
    createCannon("top",1260,60000)
    createCannon("top",1290,60000)
    createCannon("top",1320,60000)



    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
