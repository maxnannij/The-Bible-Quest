const questions = [
    // --- Historia Bíblica (Ampliado) ---
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
        pregunta: "¿Quién mató al gigante Goliat?",
        opciones: ["Saúl", "Jonatán", "David", "Sansón"],
        respuestaCorrecta: "David",
        categoria: "Historia Bíblica",
        dificultad: "Fácil",
        explicacion: "La historia de David y Goliat es una de las más conocidas en 1 Samuel, donde David, un joven pastor, derrota al gigante filisteo con una honda y una piedra."
    },
    {
        pregunta: "¿Cuál fue la primera plaga que Dios envió sobre Egipto?",
        opciones: ["Ranas", "Piojos", "Sangre", "Moscas"],
        respuestaCorrecta: "Sangre",
        categoria: "Historia Bíblica",
        dificultad: "Fácil",
        explicacion: "Éxodo 7:19-21 describe cómo el agua del río Nilo y todas las aguas de Egipto se convirtieron en sangre, matando a los peces y haciendo el agua imbebible."
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
        pregunta: "¿Quién lideró a los israelitas en la conquista de Jericó?",
        opciones: ["Moisés", "Josué", "Caleb", "Gedeón"],
        respuestaCorrecta: "Josué",
        categoria: "Historia Bíblica",
        dificultad: "Medio",
        explicacion: "Josué, el sucesor de Moisés, lideró la entrada de Israel a la Tierra Prometida y la milagrosa caída de los muros de Jericó, registrada en el libro de Josué."
    },
    {
        pregunta: "¿Qué rey construyó el primer Templo en Jerusalén?",
        opciones: ["David", "Saúl", "Salomón", "Ezequías"],
        respuestaCorrecta: "Salomón",
        categoria: "Historia Bíblica",
        dificultad: "Medio",
        explicacion: "El rey Salomón, hijo de David, fue el encargado de construir el magnífico primer Templo para Dios en Jerusalén, un proyecto detallado en 1 Reyes 6-8."
    },
    {
        pregunta: "¿En qué concilio se decidió que los gentiles convertidos no necesitaban circuncidarse para ser cristianos?",
        opciones: ["Concilio de Nicea", "Concilio de Jerusalén", "Concilio de Calcedonia", "Concilio de Éfeso"],
        respuestaCorrecta: "Concilio de Jerusalén",
        categoria: "Historia Bíblica",
        dificultad: "Difícil",
        explicacion: "Hechos 15 relata este concilio pivotal, donde los apóstoles y ancianos decidieron que la salvación es por gracia a través de la fe, no por la ley mosaica, eliminando la necesidad de la circuncisión para los gentiles."
    },
    {
        pregunta: "¿Qué faraón se cree que reinó durante el Éxodo, según la mayoría de los eruditos?",
        opciones: ["Amenhotep III", "Ramsés II", "Tutankamón", "Akenatón"],
        respuestaCorrecta: "Ramsés II",
        categoria: "Historia Bíblica",
        dificultad: "Difícil",
        explicacion: "Aunque no hay consenso total, muchos eruditos sugieren a Ramsés II como el faraón del Éxodo, basándose en la arqueología y la cronología bíblica de la construcción de las ciudades de Pitón y Ramsés."
    },
    {
        pregunta: "¿Qué imperio derrotó al Reino del Norte (Israel) y dispersó a sus habitantes?",
        opciones: ["Babilónico", "Persa", "Asirio", "Egipcio"],
        respuestaCorrecta: "Asirio",
        categoria: "Historia Bíblica",
        dificultad: "Difícil",
        explicacion: "El Imperio Asirio, bajo Sargón II, conquistó Samaria en el 722 a.C., poniendo fin al Reino del Norte y llevando a sus habitantes al exilio, como se describe en 2 Reyes 17."
    },


    // --- Teología (Ampliado) ---
    {
        pregunta: "¿Qué significa la palabra 'Evangelio'?",
        opciones: ["Buena Noticia", "Libro Sagrado", "Antigua Ley", "Mandamiento Divino"],
        respuestaCorrecta: "Buena Noticia",
        categoria: "Teología",
        dificultad: "Fácil",
        explicacion: "La palabra griega 'euangelion' significa 'buenas nuevas' o 'buena noticia', refiriéndose al mensaje de salvación a través de Jesucristo."
    },
    {
        pregunta: "¿Cuántos libros tiene el Antiguo Testamento en la Biblia Protestante?",
        opciones: ["39", "27", "46", "33"],
        respuestaCorrecta: "39",
        categoria: "Teología",
        dificultad: "Fácil",
        explicacion: "El Antiguo Testamento consta de 39 libros, mientras que el Nuevo Testamento tiene 27, sumando un total de 66 libros en la Biblia Protestante."
    },
    {
        pregunta: "¿Cuál de las siguientes es una de las tres personas de la Trinidad?",
        opciones: ["María", "El Espíritu Santo", "Moisés", "Pedro"],
        respuestaCorrecta: "El Espíritu Santo",
        categoria: "Teología",
        dificultad: "Fácil",
        explicacion: "La doctrina de la Trinidad enseña que hay un solo Dios que existe eternamente como tres personas co-iguales: Padre, Hijo (Jesús) y Espíritu Santo."
    },
    {
        pregunta: "¿Qué libro del Nuevo Testamento es conocido por su énfasis en el amor?",
        opciones: ["Gálatas", "1 Corintios", "Romanos", "Efesios"],
        respuestaCorrecta: "1 Corintios",
        categoria: "Teología",
        dificultad: "Medio",
        explicacion: "El capítulo 13 de 1 Corintios es famoso por su descripción del amor como 'el camino más excelente' y sus características."
    },
    {
        pregunta: "¿Cuál de los siguientes no es un fruto del Espíritu según Gálatas 5:22-23?",
        opciones: ["Paz", "Paciencia", "Fidelidad", "Éxito"],
        respuestaCorrecta: "Éxito",
        categoria: "Teología",
        dificultad: "Medio",
        explicacion: "Los frutos del Espíritu son amor, gozo, paz, paciencia, benignidad, bondad, fe, mansedumbre y templanza. El éxito material no se menciona directamente como un fruto espiritual."
    },
    {
        pregunta: "¿Qué término teológico describe el acto de ser declarado justo por Dios a través de la fe en Cristo?",
        opciones: ["Santificación", "Redención", "Justificación", "Expiación"],
        respuestaCorrecta: "Justificación",
        categoria: "Teología",
        dificultad: "Medio",
        explicacion: "La justificación es una declaración legal de Dios que absuelve al pecador y lo declara justo, no por méritos propios, sino por la obra de Cristo en la cruz."
    },
    {
        pregunta: "¿Qué doctrina teológica describe la unión de las dos naturalezas (divina y humana) en la única persona de Jesucristo?",
        opciones: ["Justificación", "Santificación", "Unión Hipostática", "Glorificación"],
        respuestaCorrecta: "Unión Hipostática",
        categoria: "Teología",
        dificultad: "Difícil",
        explicacion: "La Unión Hipostática es un concepto clave en la cristología que explica cómo Jesús es plenamente Dios y plenamente hombre al mismo tiempo, en una sola persona, sin mezcla ni confusión."
    },
    {
        pregunta: "¿Cómo se llama el estudio de los últimos tiempos o de las profecías del fin?",
        opciones: ["Soteriología", "Pneumatología", "Eclesiología", "Escatología"],
        respuestaCorrecta: "Escatología",
        categoria: "Teología",
        dificultad: "Difícil",
        explicacion: "La Escatología es la rama de la teología que se ocupa de las doctrinas relacionadas con los eventos finales de la historia o del destino final del alma y de la humanidad."
    },
    {
        pregunta: "¿Qué significa el concepto teológico de 'Imago Dei'?",
        opciones: ["La ira de Dios", "La imagen de Dios", "El amor de Dios", "La palabra de Dios"],
        respuestaCorrecta: "La imagen de Dios",
        categoria: "Teología",
        dificultad: "Difícil",
        explicacion: "Imago Dei, del latín, se refiere a la creencia de que los seres humanos fueron creados a imagen y semejanza de Dios, lo que implica atributos como la racionalidad, la moralidad y la capacidad de relación."
    },

    // --- Apologética (Ampliado) ---
    {
        pregunta: "¿Cuál es una razón común para creer en la resurrección de Jesús desde un punto de vista apologético?",
        opciones: ["El entusiasmo de los discípulos", "Las apariciones post-mortem", "El testimonio de María Magdalena", "La tumba vacía"],
        respuestaCorrecta: "La tumba vacía",
        categoria: "Apologética",
        dificultad: "Fácil",
        explicacion: "La tumba vacía es uno de los argumentos más fuertes en apologética, respaldado por el hecho de que nadie, ni siquiera los opositores, pudo producir el cuerpo de Jesús, y los guardias romanos testificaron su desaparición."
    },
    {
        pregunta: "¿Qué disciplina bíblica se enfoca en defender la fe cristiana de objeciones y críticas?",
        opciones: ["Exégesis", "Herméneutica", "Apologética", "Homilética"],
        respuestaCorrecta: "Apologética",
        categoria: "Apologética",
        dificultad: "Fácil",
        explicacion: "La apologética es la rama de la teología que se encarga de dar razones racionales y bíblicas para la fe cristiana, defendiéndola y presentando su veracidad."
    },
    {
        pregunta: "¿Qué argumento apologético utiliza la complejidad y el diseño del universo como evidencia de un Creador?",
        opciones: ["Argumento Ontológico", "Argumento Moral", "Argumento Cosmológico", "Argumento Teleológico"],
        respuestaCorrecta: "Argumento Teleológico",
        categoria: "Apologética",
        dificultad: "Medio",
        explicacion: "El Argumento Teleológico, también conocido como argumento del diseño, sostiene que el orden, la complejidad y el propósito observados en el universo apuntan a la existencia de un diseñador inteligente."
    },
    {
        pregunta: "¿Qué teoría sugiere que los Evangelios Sinópticos (Mateo, Marcos, Lucas) usaron una fuente común (Q) además de otras fuentes?",
        opciones: ["Teoría de la Prioridad de Mateo", "Teoría Griesbach", "Hipótesis de las Dos Fuentes", "Hipótesis Farrer"],
        respuestaCorrecta: "Hipótesis de las Dos Fuentes",
        categoria: "Apologética",
        dificultad: "Medio",
        explicacion: "La Hipótesis de las Dos Fuentes propone que Marcos fue el primer evangelio, y que Mateo y Lucas usaron Marcos más una fuente hipotética de dichos de Jesús (conocida como 'Q') para gran parte de su material común no encontrado en Marcos."
    },
    {
        pregunta: "¿Cómo se llama la rama de la teología que se ocupa de la justificación de la bondad de Dios frente al problema del mal?",
        opciones: ["Soteriología", "Escatología", "Teodicea", "Pneumatología"],
        respuestaCorrecta: "Teodicea",
        categoria: "Apologética",
        dificultad: "Difícil",
        explicacion: "La Teodicea busca reconciliar la existencia de un Dios omnipotente, omnisciente y bueno con la existencia del mal y el sufrimiento en el mundo."
    },
    {
        pregunta: "¿Qué argumento apologético afirma que, si Dios no existe, los valores morales objetivos no tienen fundamento?",
        opciones: ["Argumento Ontológico", "Argumento Cosmológico", "Argumento Moral", "Argumento Teleológico"],
        respuestaCorrecta: "Argumento Moral",
        categoria: "Apologética",
        dificultad: "Difícil",
        explicacion: "El Argumento Moral sostiene que la existencia de leyes morales universales y objetivas apunta a un Legislador moral trascendente, es decir, Dios."
    },


    // --- Geografía Bíblica (Ampliado) ---
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
        pregunta: "¿Cuál era la capital del Reino del Sur (Judá)?",
        opciones: ["Samaria", "Jerusalén", "Hebrón", "Betel"],
        respuestaCorrecta: "Jerusalén",
        categoria: "Geografía Bíblica",
        dificultad: "Fácil",
        explicacion: "Después de la división del reino unido de Israel, Jerusalén siguió siendo la capital del Reino de Judá, donde el Templo se encontraba."
    },
    {
        pregunta: "¿Qué mar se abrió para que los israelitas escaparan de Egipto?",
        opciones: ["Mar Mediterráneo", "Mar de Galilea", "Mar Muerto", "Mar Rojo"],
        respuestaCorrecta: "Mar Rojo",
        categoria: "Geografía Bíblica",
        dificultad: "Medio",
        explicacion: "Éxodo 14 narra el milagro de cómo Dios separó las aguas del Mar Rojo, permitiendo que los israelitas cruzaran a salvo mientras el ejército egipcio era destruido."
    },
    {
        pregunta: "¿Qué ciudad fue destruida por fuego y azufre junto con Gomorra?",
        opciones: ["Ur", "Harán", "Sodoma", "Nínive"],
        respuestaCorrecta: "Sodoma",
        categoria: "Geografía Bíblica",
        dificultad: "Medio",
        explicacion: "Génesis 19 relata la destrucción de Sodoma y Gomorra por su gran maldad, con fuego y azufre lloviendo del cielo."
    },
    {
        pregunta: "¿Qué región, al norte de Israel, era conocida por su población mayormente gentil en tiempos de Jesús?",
        opciones: ["Judea", "Samaria", "Galilea", "Perea"],
        respuestaCorrecta: "Galilea",
        categoria: "Geografía Bíblica",
        dificultad: "Medio",
        explicacion: "Galilea era una región con una mezcla de población judía y gentil, a menudo referida como 'Galilea de los gentiles' (Mateo 4:15)."
    },
    {
        pregunta: "¿Cuál de estas ciudades no formaba parte de la Decápolis, una región de diez ciudades griegas en el tiempo de Jesús?",
        opciones: ["Gerasa", "Escitópolis", "Damascus", "Séforis"],
        respuestaCorrecta: "Séforis",
        categoria: "Geografía Bíblica",
        dificultad: "Difícil",
        explicacion: "Séforis era una importante ciudad judía en Galilea, pero no formaba parte de la confederación de ciudades helenísticas conocida como la Decápolis, que era mayormente gentil y culturalmente griega."
    },
    {
        pregunta: "¿En qué isla fue exiliado el apóstol Juan, donde recibió la revelación del Apocalipsis?",
        opciones: ["Chipre", "Creta", "Patmos", "Malta"],
        respuestaCorrecta: "Patmos",
        categoria: "Geografía Bíblica",
        dificultad: "Difícil",
        explicacion: "Apocalipsis 1:9 menciona que Juan estaba en la isla llamada Patmos por causa de la palabra de Dios y el testimonio de Jesucristo, donde recibió su visión profética."
    },
    {
        pregunta: "¿Cuál era la provincia romana que incluía la mayor parte de lo que hoy es Turquía, y a la que Pablo dirigió una de sus cartas?",
        opciones: ["Macedonia", "Acaya", "Galacia", "Asia"],
        respuestaCorrecta: "Galacia",
        categoria: "Geografía Bíblica",
        dificultad: "Difícil",
        explicacion: "La carta a los Gálatas fue dirigida a las iglesias en la provincia romana de Galacia, una región en el centro de la actual Turquía, donde Pablo realizó viajes misioneros."
    },


    // --- Citas Bíblicas (Ampliado) ---
    {
        pregunta: "Completa la cita: 'Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree, no se pierda, mas tenga vida ______.'",
        opciones: ["eterna", "abundante", "verdadera", "santa"],
        respuestaCorrecta: "eterna",
        categoria: "Citas Bíblicas",
        dificultad: "Fácil",
        explicacion: "Juan 3:16 es uno de los versículos más conocidos de la Biblia, y la palabra que completa la frase es 'eterna'. Subraya el amor incondicional de Dios y la promesa de salvación."
    },
    {
        pregunta: "¿Qué libro comienza con la frase: 'En el principio creó Dios los cielos y la tierra'?",
        opciones: ["Éxodo", "Génesis", "Salmos", "Juan"],
        respuestaCorrecta: "Génesis",
        categoria: "Citas Bíblicas",
        dificultad: "Fácil",
        explicacion: "Génesis 1:1 es el versículo de apertura de la Biblia, estableciendo la soberanía de Dios como Creador de todo."
    },
    {
        pregunta: "¿Cuál es el mandamiento más grande, según Jesús en Mateo 22:37-39?",
        opciones: ["No matarás", "Amarás a tu prójimo como a ti mismo", "Amarás al Señor tu Dios con todo tu corazón, y con toda tu alma, y con toda tu mente", "Honra a tu padre y a tu madre"],
        respuestaCorrecta: "Amarás al Señor tu Dios con todo tu corazón, y con toda tu alma, y con toda tu mente", // Aunque "Amarás al prójimo" es el segundo, el primero es el 'más grande'.
        categoria: "Citas Bíblicas",
        dificultad: "Fácil",
        explicacion: "Jesús respondió que el primer y más grande mandamiento es amar a Dios con todo el ser, y el segundo es amar al prójimo como a uno mismo. Ambos son inseparables."
    },
    {
        pregunta: "¿Qué profeta dijo: 'He aquí que la virgen concebirá, y dará a luz un hijo, y llamará su nombre Emanuel'?",
        opciones: ["Isaías", "Jeremías", "Ezequiel", "Daniel"],
        respuestaCorrecta: "Isaías",
        categoria: "Citas Bíblicas",
        dificultad: "Medio",
        explicacion: "Esta profecía mesiánica se encuentra en Isaías 7:14, que luego es citada en el Nuevo Testamento en Mateo 1:23 como cumplimiento del nacimiento de Jesús."
    },
    {
        pregunta: "Completa la Beatitud: 'Bienaventurados los mansos, porque ellos recibirán la tierra por ______.'",
        opciones: ["heredad", "recompensa", "posesión", "victoria"],
        respuestaCorrecta: "heredad",
        categoria: "Citas Bíblicas",
        dificultad: "Medio",
        explicacion: "Mateo 5:5, una de las Bienaventuranzas pronunciadas por Jesús en el Sermón del Monte. La mansedumbre no es debilidad, sino fuerza bajo control."
    },
    {
        pregunta: "¿En qué libro y capítulo de la Biblia se encuentra la descripción de la armadura de Dios?",
        opciones: ["Romanos 8", "Efesios 6", "Colosenses 3", "Filipenses 4"],
        respuestaCorrecta: "Efesios 6",
        categoria: "Citas Bíblicas",
        dificultad: "Medio",
        explicacion: "Pablo exhorta a los creyentes a vestirse con toda la armadura de Dios en Efesios 6:10-18 para poder resistir las asechanzas del diablo."
    },
    {
        pregunta: "¿Qué libro del Antiguo Testamento se atribuye a Salomón y se enfoca en la sabiduría práctica?",
        opciones: ["Job", "Salmos", "Proverbios", "Eclesiastés"],
        respuestaCorrecta: "Proverbios",
        categoria: "Citas Bíblicas",
        dificultad: "Difícil",
        explicacion: "El libro de Proverbios es una colección de dichos sabios y enseñanzas éticas, gran parte de las cuales se atribuyen al rey Salomón, conocido por su sabiduría."
    },
    {
        pregunta: "¿Qué pasaje de la Biblia se conoce como el 'himno al amor'?",
        opciones: ["Salmo 23", "Filipenses 2", "1 Corintios 13", "Juan 15"],
        respuestaCorrecta: "1 Corintios 13",
        categoria: "Citas Bíblicas",
        dificultad: "Difícil",
        explicacion: "El capítulo 13 de la Primera Carta a los Corintios es famoso por su poética y profunda descripción de la naturaleza del amor cristiano, a menudo leído en bodas."
    },
    {
        pregunta: "¿En qué evangelio se encuentra la parábola del hijo pródigo?",
        opciones: ["Mateo", "Marcos", "Lucas", "Juan"],
        respuestaCorrecta: "Lucas",
        categoria: "Citas Bíblicas",
        dificultad: "Difícil",
        explicacion: "La parábola del hijo pródigo (también conocida como el hijo perdido) se narra en Lucas 15:11-32, ilustrando el amor y el perdón de Dios."
    }
];
