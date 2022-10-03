import { gameTypes } from '../types/common/GameType';

/**
 * Helper functions for handling hashtags from the game.
 */

const characterSet = '0289PYLQGRJCUV';

/**
 * Converts Hashtag (player or clantag) to a normalized version without # or common pitfalls
 * @param hashtag Player- or clantag
 */
export function normalizeHashtag(hashtag: string): string {
	return hashtag.trim().toUpperCase()
		.replace('#', '')
		.replace(/O/g, '0'); // replace capital O with zero
}

/**
 * Checks if a hashtag is potentially valid. Hashtags will be normalized before running through the test.
 * @param hashtag The to be checked hashtag
 */
export function isValidHashtag(hashtag: string): boolean {
	// Simple validation first before doing computationally more expensive stuff
	if (hashtag === undefined || hashtag === null) return false;
	if (hashtag.length > 14 || hashtag.length < 3) return false;

	const tagNormalized = normalizeHashtag(hashtag);
	const tagCharacters = characterSet.split('');

	for (const char of tagNormalized) {
		if (tagCharacters.indexOf(char) === -1) return false;
	}

	return true;
}

/**
 * Returns a user friendly game type name for a given gameType id
 * @param gameType The gametype to be resolved
 */
export function getGameTypeName(gameType: string): string {
	return gameTypes[gameType] as string;
}

export function cardImageURL(cardName: string, gold = false): string {
	const cardSlug = cardName.toLocaleLowerCase().replace(/ /g, "-").replace(/\./g, "");

	return `/images/${gold ? 'cards-gold' : 'cards'}/${cardSlug}.png`;
}
