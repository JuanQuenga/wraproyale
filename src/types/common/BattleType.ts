export enum BattleType {
	PvP = 'PvP',
	PvE = 'PvE',
	Tournament = 'tournament',
	Friendly = 'friendly',
	ClanFriendly = 'clanMate',
	Challenge = 'challenge',
	TwoVsTwo = '2v2',
	ClanMateTwoVsTwo = 'clanMate2v2',
	ChallengeTwoVsTwo = 'challenge2v2',
	TouchdownTwoVsTwoDraftpractice = 'touchdown2v2DraftPractice',
	TouchdownTwoVsTwoDraft = 'touchdown2v2Draft',
	Unknown = 'unknown'
}

/**
 * The URL friendly verison of BattleType
 */
export enum BattleTypeFriendly {
	PvP = 'pvp',
	PvE = 'pve',
	Tournament = 'tournament',
	Friendly = 'friendly',
	ClanFriendly = 'clan-mate',
	Challenge = 'challenge',
	TwoVsTwo = '2v2',
	ClanMateTwoVsTwo = 'clan-mate-2v2',
	ChallengeTwoVsTwo = 'challenge-2v2',
	TouchdownTwoVsTwoDraftpractice = 'touchdown-2v2-draft-practice',
	TouchdownTwoVsTwoDraft = 'touchdown-2v2-draft',
	Unknown = 'unknown'
}

/**
 * Resolve the actual BattleType value from a BattleTypeFriendly value using this enum.
 * (e. g. BattleTypeFriendlyReversed['clan-mate-2v2'] resolves to 'clanMate2v2')
 *
 * Additional string enum is needed as they can't be reverse mapped to get the original enum member name.
 */
export enum BattleTypeFriendlyReversed {
	'pvp' = 'PvP',
	'pve' = 'PvE',
	'tournament' = 'tournament',
	'friendly' = 'friendly',
	'clan-mate' = 'clanMate',
	'challenge' = 'challenge',
	'2v2' = '2v2',
	'clan-mate-2v2' = 'clanMate2v2',
	'challenge-2v2' = 'challenge2v2',
	'touchdown-2v2-draft-practice' = 'touchdown2v2DraftPractice',
	'touchdown-2v2-draft' = 'touchdown2v2Draft',
	'unknown' = 'unknown'
}

/**
 * The user friendly version of battle types
 */
export enum BattleTypeUserFriendly {
	PvP = 'Arena',
	PvE = 'Co-Op',
	Tournament = 'Tournament',
	Friendly = 'Friendly',
	ClanFriendly = 'Clan Friendly',
	Challenge = 'Challenge',
	TwoVsTwo = '2vs2',
	ClanMateTwoVsTwo = 'Clan Friendly 2vs2',
	ChallengeTwoVsTwo = 'Challenge 2vs2',
	TouchdownTwoVsTwoDraftpractice = 'Touchdown 2vs2 Draft Practice',
	TouchdownTwoVsTwoDraft = 'Touchdown 2vs2 Draft',
	Unknown = 'Unknown'
}