/*var Bomberman = Bomberman || {};

Bomberman.Goal = function (game_state, name, position, properties) {
    "use strict";
    Bomberman.Prefab.call(this, game_state, name, position, properties);

    this.onetimegoal=false;
    this.delay=5000;

    this.anchor.setTo(0.5);
    this.scale.setTo(0.5);
    
    this.game_state.game.physics.arcade.enable(this);
    this.body.immovable = true;
};

Bomberman.Goal.prototype = Object.create(Bomberman.Prefab.prototype);
Bomberman.Goal.prototype.constructor = Bomberman.Goal;

Bomberman.Goal.prototype.update = function () {
    "use strict";
    
    if(this.game_state.game.physics.arcade.overlap(this, this.game_state.groups.players, this.reach_goal, null, this)) this.onetimegoal=true;

};

Bomberman.Goal.prototype.reach_goal = function () {
    "use strict";
   
    //Bomberman.Goal.prototype.reach_goal.call(this);
    if(this.onetimegoal==true){
    this.onetimegoal=false;
    console.log("SOLO 1 Por dios");
     /*ws.muereEnemigo("enemy0");
     ws.muereEnemigo("enemy1");
     ws.muereEnemigo("enemy2");
     ws.muereEnemigo("enemy3");*/

   // }


    //setTimeout(function(){ ws.muereEnemigo("enemy1");ws.muereEnemigo("enemy2");ws.muereEnemigo("enemy3"); }, 1);
    //this.game_state.next_level();
    //ws.enviarResultado();
   // ws.crearPartida();


//};

var Bomberman = Bomberman || {};

Bomberman.Goal = function (game_state, name, position, properties) {
    "use strict";
    Bomberman.Prefab.call(this, game_state, name, position, properties);
    
     this.anchor.setTo(0.5);
    this.scale.setTo(0.5);

    this.onetimegoal=true;
    
    this.game_state.game.physics.arcade.enable(this);
    this.body.immovable = true;
};

Bomberman.Goal.prototype = Object.create(Bomberman.Prefab.prototype);
Bomberman.Goal.prototype.constructor = Bomberman.Goal;

Bomberman.Goal.prototype.update = function () {
    "use strict";
    this.game_state.game.physics.arcade.overlap(this, this.game_state.groups.players, this.kill, null, this);
};

Bomberman.Goal.prototype.kill = function () {
    "use strict";
    var goal_position, goal_properties, goal;
    Phaser.Sprite.prototype.kill.call(this);
    
    if (this.game_state.groups.goals.countLiving() === 0) {
    ws.muereEnemigo("enemy0");
    ws.muereEnemigo("enemy1");
    ws.muereEnemigo("enemy2");
    ws.muereEnemigo("enemy3");
       }

        //create goal
        //ws.enviarResultado();
        
        /*goal_position = new Phaser.Point(this.game_state.game.world.width / 2, this.game_state.game.world.height / 2);
        goal_properties = {texture: "goal_image", group: "goals"};
        goal = new Bomberman.Goal(this.game_state, "goal", goal_position, goal_properties);*/
    //}
};
