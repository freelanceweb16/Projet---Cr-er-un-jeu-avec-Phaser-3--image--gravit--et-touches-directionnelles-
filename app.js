console.log('Demarrage du serveur Phaser 3');

const config = {
    width:500,
    height:300,
    type: Phaser.AUTO,
    physics:{
        default:'arcade',
        arcade:{
            gravity:{y:400}
        }
    },
    scene:{
        preload: preload,
        create: create,
        update: update
    }
}

let game = new Phaser.Game(config);
let duck;
let cursors;

function preload(){
    this.load.image('duck', 'assets/duck.png');
}

function create(){
    duck = this.physics.add.image(100,100,'duck');
    duck.body.collideWorldBounds = true;

    cursors =  this.input.keyboard.createCursorKeys();
    console.log(cursors);
}

function update(){

    duck.setVelocityX(0);

    if(cursors.up.isDown){
        duck.setVelocity(0,-300);
    }

    if(cursors.right.isDown){
        duck.setVelocity(250,0);
    }

    if(cursors.left.isDown){
        duck.setVelocity(-250,0);
    }
}