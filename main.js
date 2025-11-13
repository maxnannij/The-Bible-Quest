// main.js

// Importa los arrays de preguntas de cada archivo.
// Cada archivo de preguntas DEBE EXPORTAR su array, por ejemplo:
// export const historiaFacil = [ {pregunta: "...", ...} ];
import { questions as historiaFacil } from './questions/historia/facil.js';
import { questions as historiaMedio } from './questions/historia/medio.js';
import { questions as historiaDificil } from './questions/historia/dificil.js';
import { questions as teologiaFacil } from './questions/teologia/facil.js';
import { questions as teologiaMedio } from './questions/teologia/medio.js';
import { questions as teologiaDificil } from './questions/teologia/dificil.js';
import { questions as apologeticaFacil } from './questions/apologetica/facil.js';
import { questions as apologeticaMedio } from './questions/apologetica/medio.js';
import { questions as apologeticaDificil } from './questions/apologetica/dificil.js';
import { questions as geografiaFacil } from './questions/geografia/facil.js';
import { questions as geografiaMedio } from './questions/geografia/medio.js';
import { questions as geografiaDificil } from './questions/geografia/dificil.js';
import { questions as versiculosFacil } from './questions/versiculos/facil.js';
import { questions as versiculosMedio } from './questions/versiculos/medio.js';
import { questions as versiculosDificil } from './questions/versiculos/dificil.js';

// Importa el módulo principal del juego
import * as gameLogic from './gamelogic.js'; // Importa todo el módulo como 'gameLogic'

// Combina todas las preguntas en un solo array
const allCombinedQuestions = [
    ...historiaFacil,
    ...historiaMedio,
    ...historiaDificil,
    ...teologiaFacil,
    ...teologiaMedio,
    ...teologiaDificil,
    ...apologeticaFacil,
    ...apologeticaMedio,
    ...apologeticaDificil,
    ...geografiaFacil,
    ...geografiaMedio,
    ...geografiaDificil,
    ...versiculosFacil,
    ...versiculosMedio,
    ...versiculosDificil
];

// Pasa las preguntas combinadas al módulo de lógica del juego
gameLogic.setQuestions(allCombinedQuestions);

// Asegúrate de que el resto de la lógica del juego se inicialice
// (DOMContentLister en gamelogic.js ya se encarga de esto)
