"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WrapRoyale = void 0;
const axios_1 = __importDefault(require("axios"));
const ArenaStorage_1 = require("./utils/ArenaStorage");
const CardStorage_1 = require("./utils/CardStorage");
class WrapRoyale {
    constructor(token, baseUrl = 'https://api.clashroyale.com/v1/') {
        this.token = token;
        this.baseUrl = baseUrl;
        this.request = axios_1.default.create({
            baseURL: this.baseUrl,
            headers: {
                'Authorization': `Bearer ${this.token}`,
                'Accept': 'application/json',
                "Content-Type": "application/json"
            },
        });
        this.arenaStorage = new ArenaStorage_1.ArenaStorage();
        this.cardStorage = new CardStorage_1.CardStorage();
    }
    getPlayer(playerTag) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.request.get('players/%23' + playerTag);
                const playerData = Object.assign(Object.assign({}, response.data), { arena: this.addArenaCSV(response.data.arena), cards: this.addCardsCSV(response.data.cards), deck: this.addCardsCSV(response.data.deck) });
                return playerData;
            }
            catch (e) {
                throw new Error('Error when getting player info.');
            }
        });
    }
    getPlayerBattlelog(playerTag) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.request.get('players/%23' + playerTag + '/battlelog');
                const battlelogData = Object.assign({}, response.data);
                return battlelogData;
            }
            catch (e) {
                throw new Error('Error when getting player battlelog.');
            }
        });
    }
    getPlayerUpcomingChests(playerTag) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.request.get('players/%23' + playerTag + '/upcomingchests');
                const upcomingChestsData = Object.assign({}, response.data);
                return upcomingChestsData;
            }
            catch (e) {
                throw new Error('Error when getting player battlelog.');
            }
        });
    }
    getClan(clanTag) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.request.get('clans/%23' + clanTag);
                const clanData = Object.assign({}, response.data);
                return clanData;
            }
            catch (e) {
                throw new Error('Error when getting calnn info.');
            }
        });
    }
    addCardsCSV(cards) {
        return cards.map((card) => {
            const cardData = this.cardStorage.cardsMap.get(card.id);
            return Object.assign(Object.assign({}, card), { csv: cardData });
        });
    }
    addArenaCSV(arena) {
        const arenaData = this.arenaStorage.arenasMap.get(arena.id);
        return Object.assign(Object.assign({}, arena), { csv: arenaData });
    }
}
exports.WrapRoyale = WrapRoyale;
