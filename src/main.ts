import Phaser from "phaser";

class Demo extends Phaser.Scene {
  constructor() {
    super("demo");
  }

  preload() {}

  create() {
    this.add.text(200, 150, "Hello World!", {
      font: "40px Times New Roman",
      color: "#000000",
    });
  }
}

const config = {
  type: Phaser.AUTO,
  width: 600,
  height: 400,
  backgroundColor: "#DADDFC",
  scene: Demo,
};

const game = new Phaser.Game(config);
