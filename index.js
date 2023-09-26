// let greenCharacter = document.createElement('img')
// greenCharacter.src = 'assets/green-character.gif'
// greenCharacter.style.position = 'fixed'
// greenCharacter.style.left = '100px'
// greenCharacter.style.bottom = '100px'
// document.body.append(greenCharacter)

const newImage = (source, lef, bot) => {
  let imgObject = document.createElement("img");
  imgObject.src = source;
  imgObject.style.position = "fixed";
  imgObject.style.left = lef;
  imgObject.style.bottom = bot;
  document.body.append(imgObject);
  return imgObject;
};

const newItem = (source, lef, bot) => {
  // let itemObject = document.createElement('img')
  // itemObject.src = source
  // itemObject.style.position = 'fixed'
  // itemObject.style.left = lef
  // itemObject.style.bottom = bot
  // document.body.append(itemObject)
  let itemObject = newImage(source, lef, bot);

  itemObject.addEventListener("dblclick", function () {
    itemObject.remove();
  });
  return itemObject;
};

const tileBackground = (tile, isItSky) => {
  for (let i = 0; i < window.innerWidth; i += 100) {
    if (!isItSky) {
      for (let j = 0; j < window.innerHeight / 2; j += 100) {
        newImage(tile, window.innerWidth - 100 - i + "px", j + "px");
      }
    } else {
      for (let j = 0; j < window.innerHeight / 2; j += 100) {
        newImage(
          tile,
          window.innerWidth - 100 - i + "px",
          window.innerHeight - 100 - j + "px"
        );
      }
    }
  }
};

tileBackground("assets/sky.png", true);
tileBackground("assets/grass.png", false);

newImage("assets/green-character.gif", "100px", "100px");
newImage("assets/pine-tree.png", "450px", "200px");
newImage("assets/tree.png", "200px", "300px");
newImage("assets/pillar.png", "350px", "100px");
newImage("assets/crate.png", "150px", "200px");
newImage("assets/well.png", "500px", "425px");

newItem("assets/sword.png", "500px", "405px");
newItem("assets/shield.png", "165px", "185px");
newItem("assets/staff.png", "600px", "100px");

