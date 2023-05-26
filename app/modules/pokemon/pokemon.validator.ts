import {body, validate, checkNumberOfAttacks,checkDuplicateName } from "../../utility/validators";


export const requestValidator=[
    body("name"),
    body("type"),
    body("evolutionCycle"),
    body("attacks"),
    body("weakness"),
    body("url"),
    checkNumberOfAttacks,
    checkDuplicateName,
    validate
]