var canvas = new fabric.Canvas("myCanvas");
var PlayerX = 10;
var PlayerY = 10;
var BlockImageWidth = 30;
var BlockImageHeight = 30;
var PlayerObject = "";
var BlockImageObject = "";

function PlayerUpdate() {
    fabric.Image.fromURL("CombinedHero.JPG", function (Img) {
        PlayerObject = Img;
        PlayerObject.scaleToWidth(150);
        PlayerObject.scaleToHeight(140);
        PlayerObject.set({
            top: PlayerY,
            left: PlayerX
        });
        canvas.add(PlayerObject)
    })
}

function NewImage(getImage) {
    fabric.Image.fromURL(getImage, function (Img) {
        BlockImageObject = Img;
        BlockImageObject.scaleToWidth(BlockImageWidth);
        BlockImageHeight.scaleToHeight(BlockImageHeight);
        BlockImageObject.set({
            top: PlayerY,
            left: PlayerX
        });
        canvas.add(BlockImageObject)
    })
}
window.addEventListener("keydown", myKeyDown);

function myKeyDown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (e.shiftKey == true && keyPressed == '80') {
        console.log("p&shift pressed together");
        BlockImageWidth = BlockImageWidth + 10;
        BlockImageHeight = BlockImageHeight + 10;
        document.getElementById("span_width").innerHTML = BlockImageWidth;
        document.getElementById("span_height").innerHTML = BlockImageHeight;
    }
    if (e.shiftKey == true && keyPressed == '77') {
        console.log("shift and M pressed together");
        BlockImageWidth = BlockImageWidth - 10;
        BlockImageHeight = BlockImageHeight - 10;
        document.getElementById("span_width").innerHTML = BlockImageWidth;
        document.getElementById("span_height").innerHTML = BlockImageHeight;
    }
    if (keyPressed == '38') {
        up();
        console.log("up")
    };
    if (keyPressed == '40') {
        down();
        console.log("down")
    };
    if (keyPressed == '37') {
        left();
        console.log("left")
    };
    if (keyPressed == '39') {
        right();
        console.log("right")
    }
    if (keyPressed == '90') {
        NewImage("spiderman_face");
        console.log("Z");
    }
    if (keyPressed = '77') {
            NewImage("spiderman_left_hand");
            console.log("M");
    }
            if (keyPressed == '86') {
                NewImage("ironman_right_hand.png")
           
            console.log("v");
    }
            if (keyPressed == '70') {
                NewImage("spiderman_face.png")
         
            console.log("F");
        }
            if (keyPressed = '71') {

                NewImage("spiderman_left_hand.png")
            
            console.log("71");
        }
            if (keyPressed =='122') {
                NewImage("spiderman_right_hand");
                console.log("z")

            }

     if (keyPressed == '87') {
    NewImage("spiderman_legs.png");
    console.log("w");
}
if (keyPressed =='71') {
    NewImage("thor_right_hand.png");
    console.log("g");
}
if (keyPressed == '76') {
    NewImage("hulk_legs.png");
    console.log("l");
}
if (keyPressed == '84') {
    NewImage("trunk.jpg");
    console.log("t");
}
if (keyPressed == '82') {
    NewImage("thor_face.png");
    console.log("r");
}
    if (keyPressed == '85') {
        NewImage("ironman_body.png");
        console.log("u");
    }
        if (keyPressed == '67') {
            NewImage("spiderman_face.png");
            console.log("c")
        }
        if (keyPressed == '76') {
            NewImage("hulk_legs.png");
            console.log("L");
        }
        if (keyPressed == '72') {
            NewImage("captain_america_left_hand.png");
            console.log("H")
        } 
    }

//C88 1 LINE CODE
function Up() {
    if (PlayerY >= 0); {
        PlayerY = PlayerY - BlockImageHeight;
        console.log("BlockImageHeight = " + BlockImageHeight);
        console.log("WhenUpIsPressed x=" + PlayerX + "Y=" + PlayerY);
        canvas.remove(PlayerObject);
        PlayerUpdate();
    }
};

function Down() {
    if (PlayerY <= 534); {
        PlayerY = PlayerY + BlockImageHeight;
        console.log("BlockImageHeight = " + BlockImageHeight);
        console.log("WhenDownIsPressed x=" + PlayerX + "Y=" + PlayerY);
        canvas.remove(PlayerObject);
        PlayerUpdate();
    }
};

function Left() {
    if (PlayerX >= 0) {
        PlayerX = PlayerX - BlockImageHeight;
        console.log("BlockImageHeight = " + BlockImageHeight);
        console.log("WhenLeftIsPressed x=" + PlayerX + "Y=" + PlayerY);
        canvas.remove(PlayerObject);
        PlayerUpdate();
    }
};

function Right() {
    if (PlayerX <= 850) {
        PlayerX = PlayerX + BlockImageHeight;
        console.log("BlockImageHeight = " + BlockImageHeight);
        console.log("WhenRightIsPressed x=" + PlayerX + "Y=" + PlayerY);
        canvas.remove(PlayerObject);
        PlayerUpdate();
    }}