//**change webpack.common.js============================== and take restart npm run dev--------
/* new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'assets'),
          to: path.resolve(__dirname, 'build/assets'),
        },
      ],
    }), */

//**config============================
const config = {
  width: 800,
  height: 600,
  pixelArt: true, //remove sprite sheet blur effect
  physics: {
    default: 'arcade',
    arcade: {
      debug: true,
      gravity: { y: 400 },
    },
  },
  scene: { preload: preload, create: create, update: update },
};

//**instantiate phaser game===============================
new Phaser.Game(config);

//Parcel-bundler load images by this way====
import images from './../../assets/*.png';

//**load image in preload() method===========================
this.load.image('sky', 'assets/sky.png');

//**add image in create() method==============================
this.add.image(0, 0, 'sky').setOrigin(0);

//** add text into create() method */
this.add.text(100, 100, 'I am just ck', { fontSize: 30, fill: '#000' });

//**create group=================================
let pipes = this.physics.add.group();
pipes.create(0, 0, 'pipe').setOrigin(0, 1);
pipes.create(0, 0, 'pipe').setOrigin(0);

/* stop pipe move option top-bottom */
pipes.setImmovable(true);

//**get all objects from group===============================
pipes.getChildren().forEach((pipe) => {});

//**getBounds() on pipes group===============================
pipes.getChildren().forEach((pipe) => {
  if (pipe.getBounds().right <= 0) {
  }
});

//**collider with 2 objects=========================
this.physics.add.collider(this.bird, this.pipes, this.gameOver, null, this);

//**collide with boundary=============================
this.bird.setCollideWorldBounds(true); //write it in create() method

//**setTimeout()/setInterval() alternative method==================
this.time.addEvent({
  delay: 1000,
  callback: () => {
    this.scene.restart();
  },
  loop: false,
});

//**pause game
this.physics.pause();

//**restart game
this.scene.restart();

//**add click event on an objects=============================
//(first setInteractive() on that object)
const pauseButton = this.add
  .image(this.config.width - 10, this.config.height - 10, 'pause')
  .setOrigin(1)
  .setScale(2)
  .setInteractive();

pauseButton.on('pointerdown', callback);

//**start new scene=================================
//in create() method of MenuScene
this.scene.start('PlayScene');

//**use setText() to change text===================
this.scoreText.setText(`Score: ${this.score}`);

//**mouse hover event add==============================
//(first add setInteractive() which object want to add event)
textGO.on('pointerover', () => {
  textGO.setStyle({ fill: '#f00', fontSize: '40px' });
});

//**mouse out event add==============================
//(first add setInteractive() which object want to add event)
textGO.on('pointerout', () => {
  textGO.setStyle({ fill: '#cd00ff', fontSize: '34px' });
});

//**mouse up event add==============================
//(first add setInteractive() which object want to add event)
textGO.on('pointerup', () => {
  console.log(123);
});

//**destroy canvas========================= */
this.game.destroy(true);

//** stop current scene=========================== */
this.scene.stop();

//** stop specific scene=========================== */
this.scene.stop('PlayScene');

//** resumed previous scene======================== */
this.scene.resume('PlayScene');

//**(Global) events fire when 'resume' the game============== */
this.events.on('resume', callback);

//** add time event, it works like setInterval() ===================== */
this.timedEvent = this.time.addEvent({
  delay: 1000,
  callback: this.countDown,
  callbackScope: this,
  loop: true,
});

//remove time event============================
this.timedEvent.remove();

//** resume physics======================= */
this.physics.resume();

//** add event on full canvas============ */
this.input.on('pointerdown', callback);
this.input.keyboard.on('keydown-SPACE', this.ck, this);
this.input.keyboard.on('keyup-SPACE', this.ck, this);

//** image flip another direction================== */
this.add
  .image(this.config.width - 10, this.config.height - 10, 'pause')
  .setFlipX(true);

//** animation spritesheet========================== */
//3 step for animation
//1:: load spritesheet into preload() method---------
this.load.spritesheet('bird', 'assets/birdSprite.png', {
  frameWidth: 16,
  frameHeight: 16,
});
//2:: add spritesheet into create() method-------------
this.bird = this.physics.add
  .sprite(this.config.startPosition.x, this.config.startPosition.y, 'bird')
  .setFlipX(true)
  .setScale(3)
  .setOrigin(0);
//3:: anims code into create() method--------------------
this.anims.create({
  key: 'fly',
  frames: this.anims.generateFrameNumbers('bird', { start: 8, end: 15 }),
  frameRate: 8, //per seconds 8 frames will be shown, default is 24fps
  repeat: -1, // repeat unlimited times
});
this.bird.play('fly');

//** change spritesheet size into create() method======================= */
this.bird.setBodySize(16, 10);

/* ** change cursor  */
this.add.image.setInteractive({ cursor: 'pointer' });
