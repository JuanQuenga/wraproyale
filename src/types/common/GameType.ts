export const gameTypes: IGameTypes = {
	PvP: 'Arena',
	PvE: 'PvE',
	tournament: 'Tournament',
	friendly: 'Friendly Battle',
	clanMate: 'Clan Friendly Battle',
	challenge: 'Challenge',
	'2v2': '2 vs. 2',
	clanMate2v2: 'Clan Mate 2 vs. 2',
	challenge2v2: 'Challenge 2 vs. 2',
	touchdown2v2DraftPractice: 'Touchdown 2 vs. 2 (Draft Practice)',
	touchdown2v2Draft: 'Touchdown 2 vs. 2 (Draft)',
	unknown: 'Unknown'
};
export interface IGameTypes {
	[key: string]: string;
}