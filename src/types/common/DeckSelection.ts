export enum DeckSelection {
	/**
	 * This is the default, i.e. the player's current selected deck
	 */
	Collection = 'collection',
	/**
	 * The player starts the battle with the draft, selecting from 2 cards in pairs
	 */
	Draft = 'draft',
	/**
	 * The deck is predefined for the player
	 */
	Predefined = 'predefined',
	/**
	 * The player chooses a deck specifically for a challenge event
	 */
	EventDeck = 'eventDeck',
	Pick = 'pick'
}