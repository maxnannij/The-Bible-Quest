const questions = [
    // --- Historia Bíblica ---
    {
        pregunta: "¿Quién fue el primer rey de Israel?",
        opciones: ["David", "Salomón", "Saúl", "Jeroboam"],
        respuestaCorrecta: "Saúl",
        categoria: "Historia Bíblica",
        dificultad: "Fácil",
        explicacion: "Saúl fue ungido por Samuel como el primer rey de Israel. Su historia se narra en los libros de 1 y 2 Samuel."
    },
    {
        pregunta: "¿Cuántos días y noches llovió durante el Diluvio según Génesis?",
        opciones: ["7 días y 7 noches", "20 días y 20 noches", "40 días y 40 noches", "150 días y 150 noches"],
        respuestaCorrecta: "40 días y 40 noches",
        categoria: "Historia Bíblica",
        dificultad: "Fácil",
        explicacion: "Génesis 7:12 registra que 'estuvo lloviendo sobre la tierra cuarenta días y cuarenta noches'."
    },
    {
        pregunta: "¿Qué profeta fue llevado al cielo en un carro de fuego?",
        opciones: ["Eliseo", "Isaías", "Elías", "Jeremías"],
        respuestaCorrecta: "Elías",
        categoria: "Historia Bíblica",
        dificultad: "Medio",
        explicacion: "Elías fue arrebatado al cielo en un torbellino, con un carro de fuego y caballos de fuego, como se narra en 2 Reyes 2:11."
    },
    {
        pregunta: "¿Qué faraón se cree que reinó durante el Éxodo, según la mayoría de los eruditos?",
        opciones: ["Amenhotep III", "Ramsés II", "Tutankamón", "Akenatón"],
        respuestaCorrecta: "Ramsés II",
        categoria: "Historia Bíblica",
        dificultad: "Difícil",
        explicacion: "Aunque no hay consenso total, muchos eruditos sugieren a Ramsés II como el faraón del Éxodo, basándose en la arqueología y la cronología bíblica de la construcción de las ciudades de Pitón y Ramsés."
    },

    // --- Teología ---
    {
        pregunta: "¿Qué significa la palabra 'Evangelio'?",
        opciones: ["Buena Noticia", "Libro Sagrado", "Antigua Ley", "Mandamiento Divino"],
        respuestaCorrecta: "Buena Noticia",
        categoria: "Teología",
        dificultad: "Fácil",
        explicacion: "La palabra griega 'euangelion' significa 'buenas nuevas' o 'buena noticia', refiriéndose al mensaje de salvación a través de Jesucristo."
    },
    {
        pregunta: "¿Cuál de los siguientes no es un fruto del Espíritu según Gálatas 5:22-23?",
        opciones: ["Paz", "Paciencia", "Fidelidad", "Éxito"],
        respuestaCorrecta: "Éxito",
        categoria: "Teología",
        dificultad: "Medio",
        explicacion: "Los frutos del Espíritu son amor, gozo, paz, paciencia, benignidad, bondad, fe, mansedumbre y templanza. El éxito material no se menciona directamente."
    },
    {
        pregunta: "¿Qué doctrina teológica describe la unión de las dos naturalezas (divina y humana) en la única persona de Jesucristo?",
        opciones: ["Justificación", "Santificación", "Unión Hipostática", "Glorificación"],
        respuestaCorrecta: "Unión Hipostática",
        categoria: "Teología",
        dificultad: "Difícil",
        explicacion: "La Unión Hipostática es un concepto clave en la cristología que explica cómo Jesús es plenamente Dios y plenamente hombre al mismo tiempo, en una sola persona."
    },

    // --- Apologética ---
    {
        pregunta: "¿Cuál es una razón común para creer en la resurrección de Jesús desde un punto de vista apologético?",
        opciones: ["El entusiasmo de los discípulos", "Las apariciones post-mortem", "El testimonio de María Magdalena", "La tumba vacía"],
        respuestaCorrecta: "La tumba vacía",
        categoria: "Apologética",
        dificultad: "Fácil",
        explicacion: "La tumba vacía es uno de los argumentos más fuertes en apologética, respaldado por el hecho de que nadie, ni siquiera los opositores, pudo producir el cuerpo de Jesús."
    },
    {
        pregunta: "¿Qué argumento apologético utiliza la complejidad y el diseño del universo como evidencia de un Creador?",
        opciones: ["Argumento Ontológico", "Argumento Moral", "Argumento Cosmológico", "Argumento Teleológico"],
        respuestaCorrecta: "Argumento Teleológico",
        categoria: "Apologética",
        dificultad: "Medio",
        explicacion: "El Argumento Teleológico, también conocido como argumento del diseño, sostiene que el orden y el propósito observados en el universo apuntan a la existencia de un diseñador inteligente."
    },
    {
        pregunta: "¿Cómo se llama la rama de la teología que se ocupa de la justificación de la bondad de Dios frente al problema del mal?",
        opciones: ["Soteriología", "Escatología", "Teodicea", "Pneumatología"],
        respuestaCorrecta: "Teodicea",
        categoria: "Apologética",
        dificultad: "Difícil",
        explicacion: "La Teodicea busca reconciliar la existencia de un Dios omnipotente, omnisciente y bueno con la existencia del mal y el sufrimiento en el mundo."
    },

    // --- Geografía Bíblica ---
    {
        pregunta: "¿En qué río fue bautizado Jesús por Juan el Bautista?",
        opciones: ["Río Nilo", "Río Tigris", "Río Jordán", "Mar Muerto"],
        respuestaCorrecta: "Río Jordán",
        categoria: "Geografía Bíblica",
        dificultad: "Fácil",
        explicacion: "Los Evangelios (Mateo 3, Marcos 1, Lucas 3) registran que Juan el Bautista bautizaba en el río Jordán, y fue allí donde Jesús fue bautizado."
    },
    {
        pregunta: "¿Qué ciudad fue el lugar de nacimiento de Jesús?",
        opciones: ["Nazaret", "Jerusalén", "Belén", "Cafarnaúm"],
        respuestaCorrecta: "Belén",
        categoria: "Geografía Bíblica",
        dificultad: "Fácil",
        explicacion: "Según las profecías del Antiguo Testamento y los Evangelios, Jesús nació en Belén de Judea."
    },
    {
        pregunta: "¿Cuál de estas ciudades no formaba parte de la Decápolis, una región de diez ciudades griegas en el tiempo de Jesús?",
        opciones: ["Gerasa", "Escitópolis", "Damascus", "Séforis"],
        respuestaCorrecta: "Séforis",
        categoria: "Geografía Bíblica",
        dificultad: "Difícil",
        explicacion: "Séforis era una importante ciudad judía en Galilea, pero no formaba parte de la confederación de ciudades helenísticas conocida como la Decápolis."
    },

    // --- Citas Bíblicas ---
    {
        pregunta: "Completa la cita: 'Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree, no se pierda, mas tenga vida ______.'",
        opciones: ["eterna", "abundante", "verdadera", "santa"],
        respuestaCorrecta: "eterna",
        categoria: "Citas Bíblicas",
        dificultad: "Fácil",
        explicacion: "Juan 3:16 es uno de los versículos más conocidos de la Biblia, y la palabra que completa la frase es 'eterna'."
    },
    {
        pregunta: "¿Qué profeta dijo: 'He aquí que la virgen concebirá, y dará a luz un hijo, y llamará su nombre Emanuel'?",
        opciones: ["Isaías", "Jeremías", "Ezequiel", "Daniel"],
        respuestaCorrecta: "Isaías",
        categoria: "Citas Bíblicas",
        dificultad: "Medio",
        explicacion: "Esta profecía mesiánica se encuentra en Isaías 7:14, que luego es citada en el Nuevo Testamento en Mateo 1:23."
    },
    {
        pregunta: "¿En qué libro y capítulo de la Biblia se encuentra la armadura de Dios?",
        opciones: ["Romanos 8", "Efesios 6", "Colosenses 3", "Filipenses 4"],
        respuestaCorrecta: "Efesios 6",
        categoria: "Citas Bíblicas",
        dificultad: "Difícil",
        explicacion: "Pablo exhorta a los creyentes a vestirse con toda la armadura de Dios en Efesios 6:10-18."
    }
];
