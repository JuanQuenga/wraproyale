"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeckSelection = void 0;
var DeckSelection;
(function (DeckSelection) {
    /**
     * This is the default, i.e. the player's current selected deck
     */
    DeckSelection["Collection"] = "collection";
    /**
     * The player starts the battle with the draft, selecting from 2 cards in pairs
     */
    DeckSelection["Draft"] = "draft";
    /**
     * The deck is predefined for the player
     */
    DeckSelection["Predefined"] = "predefined";
    /**
     * The player chooses a deck specifically for a challenge event
     */
    DeckSelection["EventDeck"] = "eventDeck";
    DeckSelection["Pick"] = "pick";
})(DeckSelection = exports.DeckSelection || (exports.DeckSelection = {}));
