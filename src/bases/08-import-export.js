// import {heroes} from './data/heroes';
// import { heroes, owners } from "./data/heroes";
import heroes, { owners } from "../data/heroes";
// import { heroes } from './data/heroes'
console.log(owners);

const getHeroeById = (id) => heroes.find(heroe => id === heroe.id);

const getHereoByOwner = (owner) => heroes.filter(heroe => owner === heroe.owner);

console.log(getHeroeById(2));

console.log(getHereoByOwner('DC'));