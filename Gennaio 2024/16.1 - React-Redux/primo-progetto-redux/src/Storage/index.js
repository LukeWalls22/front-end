import { createStore } from 'redux'; 
import storeReducer from '../Reducers';

const initialState = [
    {
        id: 1,
        name: "Clemente Rossi",
        username: "RedClem",
        email: "redclem@example.it",
        password: "Pa$$word",
        phone: "+39 320 35 35 351",
        website: "redclem.it",
    },
    {
        id: 2,
        name: "Marcella Bianchi",
        username: "WhiteLella",
        email: "whitelella@example.it",
        password: "Pa$$word",
        phone: "+39 320 38 39 377",
        website: "whitelella.it",
    },
    {
        id: 3,
        name: "Giuseppe Landi",
        username: "GroundPeppe",
        email: "groundpeppe@example.it",
        password: "Pa$$word",
        phone: "+39 320 69 45 231",
        website: "groundpeppe.it",
    },
];


export const store = createStore(storeReducer, initialState) //deve avere come parametri (storeReducer, inistialState?, middleware?)