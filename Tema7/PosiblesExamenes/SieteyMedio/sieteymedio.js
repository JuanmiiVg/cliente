class SieteYMedia {
    constructor() {
        this.baraja = this.crearBaraja();
        this.jugadores = [];
        this.banca = null;
        this.apuestas = {};
        this.puntuaciones = {};
        this.turnoActual = 1; // Empezamos con el primer jugador
        this.cartasJugador = [];
        this.cartasBanca = [];
        this.mensajes = document.getElementById('mensajes');
        this.bancaCartas = document.getElementById('banca-cartas');
        this.jugadoresDiv = document.getElementById('jugadores');
        this.pedirCartaBtn = document.getElementById('pedir-carta');
        this.plantarseBtn = document.getElementById('plantarse');

        this.iniciarJuego();
    }

    crearBaraja() {
        const tipos = ['1', '2', '3', '4', '5', '6', '7', '10', '11', '12'];
        const palos = ['Oros', 'Copas', 'Espadas', 'Bastos'];
        let baraja = [];
        for (let tipo of tipos) {
            for (let palo of palos) {
                baraja.push(`${tipo}_${palo}`);
            }
        }
        return this.barajar(baraja);
    }

    barajar(baraja) {
        for (let i = baraja.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [baraja[i], baraja[j]] = [baraja[j], baraja[i]];
        }
        return baraja;
    }

    valorCarta(carta) {
        const valor = carta.split('_')[0];
        if (['10', '11', '12'].includes(valor)) {
            return 0.5;
        }
        return parseFloat(valor);
    }

    mostrarCarta(carta, contenedor) {
        const img = document.createElement('img');
        img.src = `images/${carta}.png`;
        img.alt = carta;
        img.classList.add('carta');
        contenedor.appendChild(img);
    }

    iniciarJuego() {
        this.jugadores = ['Jugador 1', 'Banca']; // Ejemplo con un jugador y la banca
        this.banca = this.jugadores[1];
        this.repartirInicio();
        this.actualizarInterfaz();
        this.pedirCartaBtn.addEventListener('click', () => this.pedirCarta());
        this.plantarseBtn.addEventListener('click', () => this.plantarse());
    }

    repartirInicio() {
        // Repartir una carta al jugador y una a la banca
        this.cartasJugador.push(this.baraja.pop());
        this.cartasBanca.push(this.baraja.pop());
    }

    actualizarInterfaz() {
        // Mostrar cartas del jugador
        const jugadorDiv = document.createElement('div');
        jugadorDiv.innerHTML = `<h2>${this.jugadores[0]}</h2>`;
        const cartasJugadorDiv = document.createElement('div');
        cartasJugadorDiv.classList.add('cartas');
        this.cartasJugador.forEach(carta => this.mostrarCarta(carta, cartasJugadorDiv));
        jugadorDiv.appendChild(cartasJugadorDiv);
        this.jugadoresDiv.innerHTML = '';
        this.jugadoresDiv.appendChild(jugadorDiv);

        // Mostrar carta de la banca
        this.bancaCartas.innerHTML = '';
        this.mostrarCarta(this.cartasBanca[0], this.bancaCartas);
    }

    pedirCarta() {
        const nuevaCarta = this.baraja.pop();
        this.cartasJugador.push(nuevaCarta);
        this.actualizarInterfaz();
        const puntuacion = this.calcularPuntuacion(this.cartasJugador);
        if (puntuacion > 7.5) {
            this.mensajes.textContent = '¡Te has pasado de 7.5! Pierdes.';
            this.finalizarTurno();
        }
    }

    plantarse() {
        this.finalizarTurno();
    }

    calcularPuntuacion(cartas) {
        return cartas.reduce((total, carta) => total + this.valorCarta(carta), 0);
    }

    finalizarTurno() {
        this.pedirCartaBtn.disabled = true;
        this.plantarseBtn.disabled = true;
        this.jugarBanca();
    }

    jugarBanca() {
        let puntuacionBanca = this.calcularPuntuacion(this.cartasBanca);
        while (puntuacionBanca < 7.5) {
            const nuevaCarta = this.baraja.pop();
            this.cartasBanca.push(nuevaCarta);
            this.mostrarCarta(nuevaCarta, this.bancaCartas);
            puntuacionBanca = this.calcularPuntuacion(this.cartasBanca);
        }
        this.mostrarResultados();
    }

    mostrarResultados() {
        const puntuacionJugador = this.calcularPuntuacion(this.cartasJugador);
        const puntuacionBanca = this.calcularPuntuacion(this.cartasBanca);

        if (puntuacionJugador > 7.5) {
            this.mensajes.textContent = 'Has perdido. Te pasaste de 7.5.';
        } else if (puntuacionBanca > 7.5) {
            this.mensajes.textContent = '¡Ganas! La banca se pasó de 7.5.';
        } else if (puntuacionJugador > puntuacionBanca) {
            this.mensajes.textContent = '¡Ganas! Tu puntuación es mayor que la de la banca.';
        } else if (puntuacionJugador === puntuacionBanca) {
            this.mensajes.textContent = 'Empate con la banca.';
        } else {
            this.mensajes.textContent = 'Pierdes. La banca tiene mejor puntuación.';
        }
    }
}

// Iniciar el juego cuando la página cargue
window.onload = () => new SieteYMedia();