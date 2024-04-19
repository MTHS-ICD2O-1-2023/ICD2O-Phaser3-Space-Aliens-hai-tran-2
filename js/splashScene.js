/* global Phaser */

// Copyright (c) 2024 Hai Tran All rights reserved
//
// Created by: hai Tran
// Created on: April 2024
// This is the Splash Scene

/**
 * This class is the Splash Scene.
 */
class SplashScene extends Phaser.Scene {
  /**
   * This method is the constructor
   */
  constructor () {
    super({ key: 'splashScene' })
  }

  /**
   * Can be defined on your own scenes.
   * This method call by the Scene Mananger when the game start, before preload() and create()
   * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start()
   */
  init (data) {
    this.cameras.main.setBackgroundColor("ffffff")
  }

  /**
   * can be defined on your own Scenes
   * use it to load assets
   */
  preload () {
    console.log('Splash Scene')
  }

  /**
 * Can be defined on your own scenes.
 * Use it to create your own game object
 * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start()
 */
  create (data) {
    //pass
  }

  /**
   * Should be overidden by our own Scenes
   * This method is called once per game step while the scene is running
   * @param {number} time -Current time
   * @param {number} delta - Delta time in ms since the last frame
   */
  update (time, delta) {
    //pass
  }
}

export default SplashScene
