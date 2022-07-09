var Bomberman = Bomberman || {};

Bomberman.LifeItem = function (game_state, name, position, properties) {
    "use strict";
    Bomberman.Item.call(this, game_state, name, position, properties);
};

Bomberman.LifeItem.prototype = Object.create(Bomberman.Item.prototype);
Bomberman.LifeItem.prototype.constructor = Bomberman.LifeItem;

Bomberman.LifeItem.prototype.collect_item = function (item, player) {
    "use strict";
    Bomberman.Item.prototype.collect_item.call(this);
    player.number_of_lives += 1;
    ws.sumarVida();
};