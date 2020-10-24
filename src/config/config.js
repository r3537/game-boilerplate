// Module Start
// Scene Configuration
// JS imports
import Phaser from 'phaser';

// Module Export
export default {
  type: Phaser.AUTO,
  parent: 'stack',
  // Retina support
  width: window.innerWidth * window.devicePixelRatio,
  height: window.innerHeight * window.devicePixelRatio,
  // Responsive
  scale: {
    parent: '.game',
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.NO_CENTER,
    width: '100%',
    height: '100%'
  },
  title: 'Stack',
  transparent: true,
  url: 'https://',
  version: '1.0.0',
  fps: 60,
  dom: {
    createContainer: true
  }
};
