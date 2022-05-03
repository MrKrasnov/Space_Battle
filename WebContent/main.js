
window.addEventListener('load', function() {

	var game = new Phaser.Game({
    "title": "Space_Battle",
    "width": 1000,
    "height": 450,
    "type": Phaser.AUTO,
    "backgroundColor": "#121212",
    "parent": "game-container",
    "render": {"pixelArt": true},
    "physics": {"default": "arcade"},
    "scale": {
        "mode": Phaser.Scale.FIT,
        "autoCenter": Phaser.Scale.CENTER_BOTH
    }
	});
	game.scene.add("Boot", Boot, true);
	
});

class Boot extends Phaser.Scene {

	preload() {
		this.load.pack("pack", "assets/pack.json");
	}

	create() {
		this.scene.start("Scene1");
	}

}
