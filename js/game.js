/* global Phaser */

// Copyright (c) 2024 Hai Tran All rights reserved
//
// Created by: Hai Tran
// Created on: April 2024
// This is the Phaser3 configuration file

// scene import statements
import SplashScene from "./splashScene.js"
import TitleScene from "./titleScene.js"
import MenuScene from './menuScene.js'

// create new scenes
const splashScene = new SplashScene()
const titleScene = new TitleScene()
const menuScene = new MenuScene()

/**
 * start Phaser Game.
 */

//* Game scene */
const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  physics: {
    default: "arcade",
    arcade: {
      debug: true,
    },
  },
  // set background color
  backgroundColor: 0x5f6e7a,
  scale: {
    mode: Phaser.Scale.FIT,
    // we place it in the middle of the page.
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
}

const game = new Phaser.Game(config)
// console.log(game)

//load scenes
game.scene.add("splashScene", splashScene)
game.scene.add("titleScene", titleScene)
game.scene.add('menuScene', menuScene)

// the start scene
game.scene.start("splashScene")
