var Bomberman = Bomberman || {};

Bomberman.Lives = function (game_state, name, position, properties) {
    "use strict";
    var lives_text_position, lives_text_style, lives_text_properties;
   //
       var bombs_text_position, bombs_text_style, bombs_text_properties;
   //
    Bomberman.Prefab.call(this, game_state, name, position, properties);
    
    this.fixedToCamera = true;
    
    this.anchor.setTo(0.5);
    this.scale.setTo(0.70);
    
    // create a text prefab to show the number of lives
    lives_text_position = new Phaser.Point(this.position.x + 10.5, this.position.y + 4);
    lives_text_style = {font: "12px Arial", fill: "#fff"};
    lives_text_properties = {group: "hud", text: this.number_of_lives, style: lives_text_style};
    this.lives_text = new Bomberman.TextPrefab(this.game_state, "lives_text", lives_text_position, lives_text_properties);
    this.lives_text.anchor.setTo(0.5);

    bombs_text_position = new Phaser.Point(this.position.x -9, this.position.y + 5);
    bombs_text_style = {font: "12px Arial", fill: "#fff"};
    bombs_text_properties = {group: "hud", text: this.number_of_bombs, style: bombs_text_style};
    this.bombs_text = new Bomberman.TextPrefab(this.game_state, "bombs_text", bombs_text_position, bombs_text_properties);
    this.bombs_text.anchor.setTo(0.5);


};

Bomberman.Lives.prototype = Object.create(Bomberman.Prefab.prototype);
Bomberman.Lives.prototype.constructor = Bomberman.Lives;

Bomberman.Lives.prototype.update = function () {
    "use strict";
    // update to show current number of lives
    this.lives_text.text = this.game_state.prefabs.player.number_of_lives;
    this.bombs_text.text = this.game_state.prefabs.player.number_of_bombs;
    
};

