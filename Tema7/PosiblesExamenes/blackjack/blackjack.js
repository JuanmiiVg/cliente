class Blackjack {
    constructor() {
        this.baraja = this.crearBaraja();
        this.cartasJugador = [];
        this.cartasDealer = [];
        this.mensajes = document.getElementById('mensajes');
        this.dealerCartas = document.getElementById('dealer-cartas');
        this.jugadorCartas = document.getElementById('jugador-cartas');
        this.pedirCartaBtn = document.getElementById('pedir-carta');
        this.plantarseBtn = document.getElementById('plantarse');
        this.reiniciarBtn = document.getElementById('reiniciar');

        this.iniciarJuego();
    }

    crearBaraja() {
        const tipos = ['As', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
        const palos = ['Picas', 'Corazones', 'Diamantes', 'Treboles'];
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
        if (['J', 'Q', 'K'].includes(valor)) {
            return 10;
        } else if (valor === 'As') {
            return 11; // El As puede valer 1 u 11, se maneja en calcularPuntuacion
        } else {
            return parseInt(valor);
        }
    }

    mostrarCarta(carta, contenedor, oculta = false) {
        const img = document.createElement('img');
        img.src = oculta ? 'images/reverso.png' : `images/${carta}.png`;
        img.alt = carta;
        img.classList.add('carta');
        contenedor.appendChild(img);
    }

    iniciarJuego() {
        this.cartasJugador = [this.baraja.pop(), this.baraja.pop()];
        this.cartasDealer = [this.baraja.pop(), this.baraja.pop()];
        this.actualizarInterfaz();
        this.pedirCartaBtn.addEventListener('click', () => this.pedirCarta());
        this.plantarseBtn.addEventListener('click', () => this.plantarse());
        this.reiniciarBtn.addEventListener('click', () => this.reiniciar());
    }

    actualizarInterfaz() {
        // Mostrar cartas del jugador
        this.jugadorCartas.innerHTML = '';
        this.cartasJugador.forEach(carta => this.mostrarCarta(carta, this.jugadorCartas));

        // Mostrar cartas del dealer (la primera oculta)
        this.dealerCartas.innerHTML = '';
        this.mostrarCarta(this.cartasDealer[0], this.dealerCartas, true);
        if (this.cartasDealer.length > 1) {
            this.mostrarCarta(this.cartasDealer[1], this.dealerCartas);
        }
    }

    pedirCarta() {
        const nuevaCarta = this.baraja.pop();
        this.cartasJugador.push(nuevaCarta);
        this.actualizarInterfaz();
        const puntuacion = this.calcularPuntuacion(this.cartasJugador);
        if (puntuacion > 21) {
            this.mensajes.textContent = '¡Te has pasado de 21! Pierdes.';
            this.finalizarTurno();
        }
    }

    plantarse() {
        this.finalizarTurno();
    }

    calcularPuntuacion(cartas) {
        let puntuacion = cartas.reduce((total, carta) => total + this.valorCarta(carta), 0);
        // Ajustar el valor del As si la puntuación es mayor a 21
        if (puntuacion > 21 && cartas.some(carta => carta.startsWith('As'))) {
            puntuacion -= 10; // Cambiar el valor del As de 11 a 1
        }
        return puntuacion;
    }

    finalizarTurno() {
        this.pedirCartaBtn.disabled = true;
        this.plantarseBtn.disabled = true;
        this.jugarDealer();
    }

    jugarDealer() {
        let puntuacionDealer = this.calcularPuntuacion(this.cartasDealer);
        while (puntuacionDealer < 17) {
            const nuevaCarta = this.baraja.pop();
            this.cartasDealer.push(nuevaCarta);
            this.mostrarCarta(nuevaCarta, this.dealerCartas);
            puntuacionDealer = this.calcularPuntuacion(this.cartasDealer);
        }
        this.mostrarResultados();
    }

    mostrarResultados() {
        const puntuacionJugador = this.calcularPuntuacion(this.cartasJugador);
        const puntuacionDealer = this.calcularPuntuacion(this.cartasDealer);

        if (puntuacionJugador > 21) {
            this.mensajes.textContent = 'Has perdido. Te pasaste de 21.';
        } else if (puntuacionDealer > 21) {
            this.mensajes.textContent = '¡Ganas! El dealer se pasó de 21.';
        } else if (puntuacionJugador > puntuacionDealer) {
            this.mensajes.textContent = '¡Ganas! Tu puntuación es mayor que la del dealer.';
        } else if (puntuacionJugador === puntuacionDealer) {
            this.mensajes.textContent = 'Empate con el dealer.';
        } else {
            this.mensajes.textContent = 'Pierdes. El dealer tiene mejor puntuación.';
        }
    }

    reiniciar() {
        this.baraja = this.crearBaraja();
        this.cartasJugador = [];
        this.cartasDealer = [];
        this.mensajes.textContent = '';
        this.pedirCartaBtn.disabled = false;
        this.plantarseBtn.disabled = false;
        this.iniciarJuego();
    }
}

// Iniciar el juego cuando la página cargue
window.onload = () => new Blackjack();