import { IconUrls } from "../common/IconUrls";

export interface Card {
	name: string;
	id: number;
	maxLevel: number;
	iconUrls: IconUrls;
}

export interface PlayerCard extends Card {
	name: string;
	id: number;
	maxLevel: number;
	iconUrls: IconUrls;
	count: number;
	level: number;
}

export interface ParticipantCard extends Card {
	level: number;
}

export enum Rarity {
	Common = 'Common',
	Rare = 'Rare',
	Epic = 'Epic',
	Legendary = 'Legendary',
	Hero = 'Hero'
}