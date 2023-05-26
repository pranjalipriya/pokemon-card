"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const routes_type_1 = require("../routes/routes.type");
const pokemon_routes_1 = __importDefault(require("../pokemon/pokemon.routes"));
exports.routes = [
    new routes_type_1.Route("/pokemon", pokemon_routes_1.default)
];
//# sourceMappingURL=routes.data.js.map