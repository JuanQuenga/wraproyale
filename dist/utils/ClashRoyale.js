"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cardImageURL = exports.getGameTypeName = exports.isValidHashtag = exports.normalizeHashtag = void 0;
const GameType_1 = require("../types/common/GameType");
/**
 * Helper functions for handling hashtags from the game.
 */
const characterSet = '0289PYLQGRJCUV';
/**
 * Converts Hashtag (player or clantag) to a normalized version without # or common pitfalls
 * @param hashtag Player- or clantag
 */
function normalizeHashtag(hashtag) {
    return hashtag.trim().toUpperCase()
        .replace('#', '')
        .replace(/O/g, '0'); // replace capital O with zero
}
exports.normalizeHashtag = normalizeHashtag;
/**
 * Checks if a hashtag is potentially valid. Hashtags will be normalized before running through the test.
 * @param hashtag The to be checked hashtag
 */
function isValidHashtag(hashtag) {
    // Simple validation first before doing computationally more expensive stuff
    if (hashtag === undefined || hashtag === null)
        return false;
    if (hashtag.length > 14 || hashtag.length < 3)
        return false;
    const tagNormalized = normalizeHashtag(hashtag);
    const tagCharacters = characterSet.split('');
    for (const char of tagNormalized) {
        if (tagCharacters.indexOf(char) === -1)
            return false;
    }
    return true;
}
exports.isValidHashtag = isValidHashtag;
/**
 * Returns a user friendly game type name for a given gameType id
 * @param gameType The gametype to be resolved
 */
function getGameTypeName(gameType) {
    return GameType_1.gameTypes[gameType];
}
exports.getGameTypeName = getGameTypeName;
function cardImageURL(cardName, gold = false) {
    const cardSlug = cardName.toLocaleLowerCase().replace(/ /g, "-").replace(/\./g, "");
    return `/images/${gold ? 'cards-gold' : 'cards'}/${cardSlug}.png`;
}
exports.cardImageURL = cardImageURL;
