var diccionario = {
    "perro": {
        "ingles": "dog",
        "frances": "chien",
        "aleman": "hund"
    },
    "casa": {
        "ingles": "house",
        "frances": "maison",
        "aleman": "haus"
    },
    "coche": {
        "ingles": "car",
        "frances": "voiture",
        "aleman": "auto"
    },
    "computadora": {
        "ingles": "computer",
        "frances": "ordinateur",
        "aleman": "computer"
    },
    "pelicula": {
        "ingles": "movie",
        "frances": "film",
        "aleman": "film"
    }
};

for (var palabra in diccionario) {
    console.log(palabra + ":");
    for (var idioma in diccionario[palabra]) {
        console.log("  " + idioma + ": " + diccionario[palabra][idioma]);
    }
}