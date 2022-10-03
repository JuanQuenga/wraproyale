"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccessType = exports.Role = void 0;
var Role;
(function (Role) {
    Role["Member"] = "member";
    Role["Elder"] = "elder";
    Role["CoLeader"] = "coLeader";
    Role["Leader"] = "leader";
})(Role = exports.Role || (exports.Role = {}));
var AccessType;
(function (AccessType) {
    AccessType["InviteOnly"] = "inviteOnly";
    AccessType["Closed"] = "closed";
    AccessType["Open"] = "open";
})(AccessType = exports.AccessType || (exports.AccessType = {}));
