var Bomberman = Bomberman || {};

Bomberman.Remoto = function (game_state, name, position, properties) {
    "use strict";
    Bomberman.Prefab.call(this, game_state, name, position, properties);
    
    this.anchor.setTo(0.5);
    this.name=name;
    this.estado="vivo";
    //ws.jugador=this;
    
    this.walking_speed = +properties.walking_speed;
    this.bomb_duration = +properties.bomb_duration;
    this.vidas= +properties.vidas;
    this.dropping_bomb = false;
    
    this.animations.add("walking_down", [1, 2, 3], 10, true);
    this.animations.add("walking_left", [4, 5, 6, 7], 10, true);
    this.animations.add("walking_right", [4, 5, 6, 7], 10, true);
    this.animations.add("walking_up", [0, 8, 9], 10, true);
    
    this.stopped_frames = [1, 4, 4, 0, 1];

    this.game_state.game.physics.arcade.enable(this);
    this.body.setSize(14, 12, 0, 4);


    this.x=ws.rival.posicion.x;
    this.y=ws.rival.posicion.y;

    this.initial_position = new Phaser.Point(this.x, this.y);
    //this.ant=this.initial_position;
    ws.spriteRival=this;

    //this.cursors = this.game_state.game.input.keyboard.createCursorKeys();
};

Bomberman.Remoto.prototype = Object.create(Bomberman.Prefab.prototype);
Bomberman.Remoto.prototype.constructor = Bomberman.Remoto;

Bomberman.Remoto.prototype.update = function () {
    "use strict";
    this.game_state.game.physics.arcade.collide(this, this.game_state.layers.collision);
    this.game_state.game.physics.arcade.collide(this, this.game_state.groups.bombs);
    this.game_state.game.physics.arcade.overlap(this, this.game_state.groups.explosions, this.kill, null, this);
    this.game_state.game.physics.arcade.overlap(this, this.game_state.groups.enemies, this.kill, null, this);
    this.game_state.game.physics.arcade.overlap(this, this.game_state.groups.players, this.killRemoto, null, this);
    
    /*
    if (this.cursors.left.isDown && this.body.velocity.x <= 0) {
        // move left
        this.body.velocity.x = -this.walking_speed;
        if (this.body.velocity.y === 0) {
            // change the scale, since we have only one animation for left and right directions
            this.scale.setTo(-1, 1);
            this.animations.play("walking_left");
        }
    } else if (this.cursors.right.isDown && this.body.velocity.x >= 0) {
        // move right
        this.body.velocity.x = +this.walking_speed;
        if (this.body.velocity.y === 0) {
            // change the scale, since we have only one animation for left and right directions
            this.scale.setTo(1, 1);
            this.animations.play("walking_right");
        }
    } else {
        this.body.velocity.x = 0;
    }

    if (this.cursors.up.isDown && this.body.velocity.y <= 0) {
        // move up
        this.body.velocity.y = -this.walking_speed;
        if (this.body.velocity.x === 0) {
            this.animations.play("walking_up");
        }
    } else if (this.cursors.down.isDown && this.body.velocity.y >= 0) {
        // move down
        this.body.velocity.y = +this.walking_speed;
        if (this.body.velocity.x === 0) {
            this.animations.play("walking_down");
        }
    } else {
        this.body.velocity.y = 0;
    }
    ///
    
    if (this.body.velocity.x === 0 && this.body.velocity.y === 0) {
        // stop current animation
        this.animations.stop();
        this.frame = this.stopped_frames[this.body.facing];
    }
    
    if (!this.dropping_bomb && this.game_state.input.keyboard.isDown(Phaser.Keyboard.B)) {
        this.drop_bomb();
        this.dropping_bomb = true;
    }
    
    if (this.dropping_bomb && !this.game_state.input.keyboard.isDown(Phaser.Keyboard.B)) {
        this.dropping_bomb = false;
    }
    */
};

// Bomberman.Remoto.prototype.bomba=function(){
//     if (this.estado=="vivo"){
//         this.estado="herido";
//         console.log("impacto de bomba");
//         this.x=this.initial_position.x;
//         this.y=this.initial_position.y;
//         ws.jugadorHerido();
//     }

// }


Bomberman.Remoto.prototype.mover=function(operacion, posicion){


    if (operacion=="left") {
        // move left
        this.body.velocity.x = -this.walking_speed;
        if (this.body.velocity.y === 0) {
            // change the scale, since we have only one animation for left and right directions
            this.scale.setTo(-1, 1);
            this.animations.play("walking_left");
        }
    }  if (operacion=="right") {
        // move right
        this.body.velocity.x = +this.walking_speed;
        if (this.body.velocity.y === 0) {
            // change the scale, since we have only one animation for left and right directions
            this.scale.setTo(1, 1);
            this.animations.play("walking_right");
        }
    } if (operacion=="velx") {
        this.body.velocity.x = 0;
    }

    if (operacion=="up") {
        // move up
        this.body.velocity.y = -this.walking_speed;
        if (this.body.velocity.x === 0) {
            this.animations.play("walking_up");
        }
    }  if (operacion=="down") {
        console.log("c1")
        // move down
        this.body.velocity.y = +this.walking_speed;
        if (this.body.velocity.x === 0) {
            this.animations.play("walking_down");
        }
    } if (operacion=="vely"){
        this.body.velocity.y = 0;
    
    }
    
    if (operacion=="stop") {
        // stop current animation
        this.animations.stop();
        this.frame = this.stopped_frames[this.body.facing];
    }
    
    if (operacion=="dropTrue") {
        this.drop_bomb();
        this.dropping_bomb = true;
    }
    
    if (operacion=="dropFalse") {
        this.dropping_bomb = false;
    }

     if (operacion=="inicio") {
        this.x=ws.jugador.posicion.x;
        this.y=ws.jugador.posicion.y;
    }
}


Bomberman.Remoto.prototype.kill=function(){
    if (this.estado=="vivo"){
        this.estado="herido";
        this.x=this.initial_position.x;
        this.y=this.initial_position.y;
        ws.jugadorHerido();
    }
}

Bomberman.Remoto.prototype.killRemoto=function(){
        this.x=this.initial_position.x;
        this.y=this.initial_position.y;
        
       
    }


Bomberman.Remoto.prototype.volverAInicio = function(){
    this.estado="vivo";
}

Bomberman.Remoto.prototype.drop_bomb = function () {
    "use strict";
    var bomb, bomb_name, bomb_position, bomb_properties;
    // get the first dead bomb from the pool
    bomb_name = this.name + "_bomb_" + this.game_state.groups.bombs.countLiving();
    bomb_position = new Phaser.Point(this.x, this.y);
    bomb_properties = {"texture": "bomb_spritesheet", "group": "bombs", bomb_radius: 3};
    bomb = Bomberman.create_prefab_from_pool(this.game_state.groups.bombs, Bomberman.Bomb.prototype.constructor, this.game_state, bomb_name, bomb_position, bomb_properties);
};