import { Arena } from "../common/Arena";
import { BattleType } from "../common/BattleType";
import { ParticipantCard } from "../common/Cards";
import { DeckSelection } from "../common/DeckSelection";
import { PlayerClan } from "./player";


export interface BattleLog {
	type: BattleType;
	battleTime: string;
	isLadderTournament: boolean;
	gameMode: GameMode
	arena: Arena;
	deckSelection: DeckSelection;
	team: BattleParticipant[];
	opponent: BattleParticipant[];
}

export interface BattleParticipant {
	tag: string;
	name: string;
	startingTrophies: number;
	crowns: number;
	kingTowerHitPoints: number;
	princessTowersHitPoints: number;
	clan?: PlayerClan;
	cards: ParticipantCard[];
	elixirLeaked: number;
}

export interface GameMode {
	id: number;
	name: string;
}
