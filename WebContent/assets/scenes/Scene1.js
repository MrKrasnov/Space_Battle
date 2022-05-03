
// You can write more code here

/* START OF COMPILED CODE */

class Scene1 extends Phaser.Scene {
	
	constructor() {
	
		super("Scene1");
		
	}
	
	_create() {
	
		this.add.image(579.0547, 402.27832, "textures", "player");
		
		this.add.image(253.25748, 44.005764, "textures", "enemy");
		
		
	}
	
	/* START-USER-CODE */

	create() {
		this._create();
	}

	update() {
	}


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
