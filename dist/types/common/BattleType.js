"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BattleTypeUserFriendly = exports.BattleTypeFriendlyReversed = exports.BattleTypeFriendly = exports.BattleType = void 0;
var BattleType;
(function (BattleType) {
    BattleType["PvP"] = "PvP";
    BattleType["PvE"] = "PvE";
    BattleType["Tournament"] = "tournament";
    BattleType["Friendly"] = "friendly";
    BattleType["ClanFriendly"] = "clanMate";
    BattleType["Challenge"] = "challenge";
    BattleType["TwoVsTwo"] = "2v2";
    BattleType["ClanMateTwoVsTwo"] = "clanMate2v2";
    BattleType["ChallengeTwoVsTwo"] = "challenge2v2";
    BattleType["TouchdownTwoVsTwoDraftpractice"] = "touchdown2v2DraftPractice";
    BattleType["TouchdownTwoVsTwoDraft"] = "touchdown2v2Draft";
    BattleType["Unknown"] = "unknown";
})(BattleType = exports.BattleType || (exports.BattleType = {}));
/**
 * The URL friendly verison of BattleType
 */
var BattleTypeFriendly;
(function (BattleTypeFriendly) {
    BattleTypeFriendly["PvP"] = "pvp";
    BattleTypeFriendly["PvE"] = "pve";
    BattleTypeFriendly["Tournament"] = "tournament";
    BattleTypeFriendly["Friendly"] = "friendly";
    BattleTypeFriendly["ClanFriendly"] = "clan-mate";
    BattleTypeFriendly["Challenge"] = "challenge";
    BattleTypeFriendly["TwoVsTwo"] = "2v2";
    BattleTypeFriendly["ClanMateTwoVsTwo"] = "clan-mate-2v2";
    BattleTypeFriendly["ChallengeTwoVsTwo"] = "challenge-2v2";
    BattleTypeFriendly["TouchdownTwoVsTwoDraftpractice"] = "touchdown-2v2-draft-practice";
    BattleTypeFriendly["TouchdownTwoVsTwoDraft"] = "touchdown-2v2-draft";
    BattleTypeFriendly["Unknown"] = "unknown";
})(BattleTypeFriendly = exports.BattleTypeFriendly || (exports.BattleTypeFriendly = {}));
/**
 * Resolve the actual BattleType value from a BattleTypeFriendly value using this enum.
 * (e. g. BattleTypeFriendlyReversed['clan-mate-2v2'] resolves to 'clanMate2v2')
 *
 * Additional string enum is needed as they can't be reverse mapped to get the original enum member name.
 */
var BattleTypeFriendlyReversed;
(function (BattleTypeFriendlyReversed) {
    BattleTypeFriendlyReversed["pvp"] = "PvP";
    BattleTypeFriendlyReversed["pve"] = "PvE";
    BattleTypeFriendlyReversed["tournament"] = "tournament";
    BattleTypeFriendlyReversed["friendly"] = "friendly";
    BattleTypeFriendlyReversed["clan-mate"] = "clanMate";
    BattleTypeFriendlyReversed["challenge"] = "challenge";
    BattleTypeFriendlyReversed["2v2"] = "2v2";
    BattleTypeFriendlyReversed["clan-mate-2v2"] = "clanMate2v2";
    BattleTypeFriendlyReversed["challenge-2v2"] = "challenge2v2";
    BattleTypeFriendlyReversed["touchdown-2v2-draft-practice"] = "touchdown2v2DraftPractice";
    BattleTypeFriendlyReversed["touchdown-2v2-draft"] = "touchdown2v2Draft";
    BattleTypeFriendlyReversed["unknown"] = "unknown";
})(BattleTypeFriendlyReversed = exports.BattleTypeFriendlyReversed || (exports.BattleTypeFriendlyReversed = {}));
/**
 * The user friendly version of battle types
 */
var BattleTypeUserFriendly;
(function (BattleTypeUserFriendly) {
    BattleTypeUserFriendly["PvP"] = "Arena";
    BattleTypeUserFriendly["PvE"] = "Co-Op";
    BattleTypeUserFriendly["Tournament"] = "Tournament";
    BattleTypeUserFriendly["Friendly"] = "Friendly";
    BattleTypeUserFriendly["ClanFriendly"] = "Clan Friendly";
    BattleTypeUserFriendly["Challenge"] = "Challenge";
    BattleTypeUserFriendly["TwoVsTwo"] = "2vs2";
    BattleTypeUserFriendly["ClanMateTwoVsTwo"] = "Clan Friendly 2vs2";
    BattleTypeUserFriendly["ChallengeTwoVsTwo"] = "Challenge 2vs2";
    BattleTypeUserFriendly["TouchdownTwoVsTwoDraftpractice"] = "Touchdown 2vs2 Draft Practice";
    BattleTypeUserFriendly["TouchdownTwoVsTwoDraft"] = "Touchdown 2vs2 Draft";
    BattleTypeUserFriendly["Unknown"] = "Unknown";
})(BattleTypeUserFriendly = exports.BattleTypeUserFriendly || (exports.BattleTypeUserFriendly = {}));
