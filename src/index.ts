import axios, { AxiosInstance } from 'axios';
import { Arena } from './types/common/Arena';
import { Card } from './types/common/Cards';
import { BattleLog } from './types/players/battlelog';
import { Player } from './types/players/player';
import { ArenaStorage } from './utils/ArenaStorage';
import { CardStorage } from './utils/CardStorage';

export class WrapRoyale {
	private request: AxiosInstance;
	private arenaStorage: ArenaStorage;
	private cardStorage: CardStorage;

	constructor(private token: string, private baseUrl: string = 'https://api.clashroyale.com/v1/') {
		this.request = axios.create({
			baseURL: this.baseUrl,
			headers: {
				'Authorization': `Bearer ${this.token}`,
				'Accept': 'application/json',
				"Content-Type": "application/json"
			},
		});

		this.arenaStorage = new ArenaStorage();
		this.cardStorage = new CardStorage();
	}

	public async getPlayer(playerTag: string): Promise<Player> {
		try {
			const response = await this.request.get('players/%23' + playerTag);
			const playerData: Player = {
				...response.data,
				arena: this.addArenaCSV(response.data.arena),
				cards: this.addCardsCSV(response.data.cards),
				deck: this.addCardsCSV(response.data.deck)
			}

			return playerData;
		} catch (e) {
			throw new Error('Error when getting player info.');
		}
	}

	public async getPlayerBattlelog(playerTag: string): Promise<BattleLog> {
		try {
			const response = await this.request.get('players/%23' + playerTag + '/battlelog');
			const battlelogData: BattleLog = {
				...response.data,
			}

			return battlelogData;
		} catch (e) {
			throw new Error('Error when getting player battlelog.');
		}
	}

	public async getPlayerUpcomingChests(playerTag: string): Promise<any> {
		try {
			const response = await this.request.get('players/%23' + playerTag + '/upcomingchests');
			const upcomingChestsData = {
				...response.data,
			}

			return upcomingChestsData;
		} catch (e) {
			throw new Error('Error when getting player battlelog.');
		}
	}

	public async getClan(clanTag: string): Promise<any> {
		try {
			const response = await this.request.get('clans/%23' + clanTag);
			const clanData = {
				...response.data,
			}

			return clanData;
		} catch (e) {
			throw new Error('Error when getting calnn info.');
		}
	}

	private addCardsCSV(cards: Card[]) {
		return cards.map((card: any) => {
			const cardData = this.cardStorage.cardsMap.get(card.id);
			return { ...card, csv: cardData };
		});
	}

	private addArenaCSV(arena: Arena) {
		const arenaData = this.arenaStorage.arenasMap.get(arena.id);
		return { ...arena, csv: arenaData };
	}
}

