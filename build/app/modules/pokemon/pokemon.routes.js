"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pokemon_service_1 = __importDefault(require("./pokemon.service"));
const pokemon_constants_1 = require("./pokemon.constants");
const response_handler_1 = require("../../utility/response-handler");
const pokemon_validator_1 = require("./pokemon.validator");
const router = (0, express_1.Router)();
router.get('/', (req, res, next) => {
    const result = pokemon_service_1.default.getRandom();
    res.send(result);
});
router.post("/", pokemon_validator_1.requestValidator, (req, res, next) => {
    pokemon_service_1.default.create(req.body);
    res.send(new response_handler_1.Response(pokemon_constants_1.POKEMON_MESSAGE.POKEMON_CREATED));
});
router.delete("/:id", (req, res, next) => {
    const { id } = req.params;
    const didDelete = pokemon_service_1.default.deleteOne(id);
    if (didDelete) {
        return res.status(404).send(new response_handler_1.Response(pokemon_constants_1.POKEMON_MESSAGE.POKEMON_DELETED));
    }
    next(pokemon_constants_1.POKEMON_MESSAGE.NOT_FOUND);
});
exports.default = router;
//# sourceMappingURL=pokemon.routes.js.map