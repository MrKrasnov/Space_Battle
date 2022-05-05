
// You can write more code here

/* START OF COMPILED CODE */

class Scene1 extends Phaser.Scene {

	constructor() {

		super("Scene1");

	}

	_create() {

		var player = this.add.image(579.0547, 402.27832, "textures", "player");

		var enemy = this.add.image(253.25748, 44.005764, "textures", "enemy");

		this.fPlayer = player;
		this.fEnemy = enemy;

	}



	/* START-USER-CODE */


	create() {
		this._create();

		this.canvas = this.sys.game.canvas;
		this.key = this.input.keyboard.createCursorKeys();
		this.enemyTarget = Phaser.Math.Between(0, this.canvas.width - 15);

		this.playerFire = this.physics.add.group({
			maxSize: 3
		});

		this.enemyFire = this.physics.add.group({
			maxSize: 3
		});
	}

	playerDrive() {
		if (this.key.right.isDown && this.fPlayer.x < this.canvas.width - 10) {
			this.fPlayer.x += 2;
		} else if (this.fPlayer.x > 10 && this.key.left.isDown) {
			this.fPlayer.x -= 2;
		}
	}

	enemyDrive() {
		if (this.fEnemy.x == this.enemyTarget) {
			this.enemyTarget = Phaser.Math.Between(0, this.canvas.width - 15);
		}
		if (this.fEnemy.x > this.enemyTarget) {
			this.fEnemy.x -= 1;
			this.fEnemy.x = Math.floor(this.fEnemy.x);
		} else if (this.fEnemy.x < this.enemyTarget) {
			this.fEnemy.x += 1;
			this.fEnemy.x = Math.floor(this.fEnemy.x);
		}
	}

	shootLaser(spriteGroup, shootingSprite, sptireImage, velocityX, velocityY) {
		spriteGroup.create(
			shootingSprite.x - 6,
			shootingSprite.y,
			sptireImage,
		).setVelocity(velocityX, velocityY);
	}

	update() {
		this.playerDrive();

		if (Phaser.Input.Keyboard.JustDown(this.key.space) && this.playerFire.getChildren().length < 3) {
			this.shootLaser(this.playerFire, this.fPlayer, 'playerFire', 0, -200);
		}

		if (this.enemyFire.getChildren().length < 3) {
			this.shootLaser(this.enemyFire, this.fEnemy, 'enemyFire', 0, 200);
		}

		this.playerFire.getChildren().forEach(laser => {
			if (laser.body.y <= 0) {
				laser.destroy();
			}
		})

		this.enemyFire.getChildren().forEach(laser => {
			if (laser.body.y >= 900) {
				laser.destroy();
			}
		})

		this.enemyDrive();
	}


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
