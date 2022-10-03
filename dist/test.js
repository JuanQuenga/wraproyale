"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjE1NzJlMzVkLTY3NzgtNDE3OS04YjAzLWM2M2FiNTNhYjgxNCIsImlhdCI6MTY2Mzg0MDEzNSwic3ViIjoiZGV2ZWxvcGVyL2ViYWM2OWVjLWMzY2ItMjViMC05YTg3LTExYTViYWQ1YmVhMiIsInNjb3BlcyI6WyJyb3lhbGU6Kjp2ZXJpZnl0b2tlbiJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXYvbWFnaWNhbCIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIyMy4yOC41Ny4yMTkiXSwidHlwZSI6ImNsaWVudCJ9XX0.c9PwWgQDHtle9zHgT0JIhjD5W7OGgld9MJJPdIh5Ab9FTa23P8ro-LRdtJe8umtyNZNhOkiFsJQRlmEA6izhcw";
const wrapRoyale = new _1.WrapRoyale(token);
wrapRoyale.getPlayer('2YGY')
    .then((player) => {
    console.log(player.cards);
});
