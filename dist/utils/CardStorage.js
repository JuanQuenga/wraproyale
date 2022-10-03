"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardStorage = void 0;
const Axios = __importStar(require("axios"));
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
/**
 * Card Storage
 */
class CardStorage {
    constructor() {
        this.cardsMap = new Map();
        this.filePath = path.join(__dirname, '../../json/cards.json');
        this.load();
    }
    /**
     * Downlaod and load CSV data.
     */
    load() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('Loading Cards JSON data.');
            // Fetch latest CSV file.
            yield this.download();
            // Read and store the CSV data into memory.
            yield this.read();
            console.log('Arenas JSON data was successfully loaded.');
            return true;
        });
    }
    /**
     * Download JSON file.
     */
    download() {
        return __awaiter(this, void 0, void 0, function* () {
            const arenasJsonUrl = 'https://royaleapi.github.io/cr-api-data/json/cards.json';
            const writer = fs.createWriteStream(this.filePath);
            const response = yield Axios.default({
                method: 'get',
                url: arenasJsonUrl,
                responseType: 'stream'
            });
            response.data.pipe(writer);
            return new Promise((resolve, reject) => {
                writer.on('finish', resolve);
                writer.on('error', reject);
            });
        });
    }
    /**
     * Read JSON file.
     */
    read() {
        try {
            const rawJsonData = fs.readFileSync(this.filePath, 'utf-8');
            const cardJsonData = JSON.parse(rawJsonData);
            for (const card of cardJsonData) {
                this.cardsMap.set(card.id, card);
            }
        }
        catch (e) {
            console.error('Error when reading Cards JSON file.', e);
        }
        return this.cardsMap;
    }
}
exports.CardStorage = CardStorage;
