
const celeste = document.getElementById('celeste')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')
const negro = document.getElementById('negro')
const amarillo = document.getElementById('amarillo')
const cafe = document.getElementById('cafe')
const gris = document.getElementById('gris')
const azul = document.getElementById('azul')
const rojo = document.getElementById('rojo')
const morado = document.getElementById('morado')
const esmeralda = document.getElementById('esmeralda')
const plateado = document.getElementById('plateado')
const rosa = document.getElementById('rosa')
const fosforecente = document.getElementById('fosforecente')
const caramelo = document.getElementById('caramelo')

const sound_0 = document.getElementById(sound0)
const sound_1 = document.getElementById(sound1)
const sound_2 = document.getElementById(sound2)
const sound_3 = document.getElementById(sound3)
const sound_4 = document.getElementById(sound4)
const sound_5 = document.getElementById(sound5)
const sound_6 = document.getElementById(sound6)
const sound_7 = document.getElementById(sound7)
const sound_8 = document.getElementById(sound8)
const sound_9 = document.getElementById(sound9)
const sound_10 = document.getElementById(sound10)
const sound_11 = document.getElementById(sound11)
const sound_12 = document.getElementById(sound12)
const sound_13 = document.getElementById(sound13)
const sound_14 = document.getElementById(sound14)
const sound_15 = document.getElementById(sound15)


const btnEmpezar = document.getElementById('btnEmpezar')
const ULTIMO_NIVEL = 7

class Juego{
  constructor(){
      this.inicializar()
      this.generarSecuencia()
      this.siguienteNivel()
  }
  inicializar(){
      this.inicializar = this.inicializar.bind(this)
      this.siguienteNivel = this.siguienteNivel.bind(this)
      this.elegirColor = this.elegirColor.bind(this)
      this.toggleBtnEmpezar()
      this.nivel = 1
      this.colores = {
          celeste,
          violeta,
          naranja,
          verde,
          negro,
          amarillo,
          cafe,
          gris,
          azul,
          rojo,
          morado,
          esmeralda,
          plateado,
          rosa,
          fosforecente,
          caramelo
      }
    this.sounds = {
        sound0,
        sound1,
        sound2,
        sound3,
        sound4,
        sound5,
        sound6,
        sound7,
        sound8,
        sound9,
        sound10,
        sound11,
        sound12,
        sound13,
        sound14,
        sound15
    }
  }
  toggleBtnEmpezar(){
      if(btnEmpezar.classList.contains('hide')){
          btnEmpezar.classList.remove('hide')
      }else
          btnEmpezar.classList.add('hide')
      }

  generarSecuencia(){
      this.secuencia = new Array(ULTIMO_NIVEL).fill(0).map((n)=> Math.floor(Math.random()*16))
  }
  siguienteNivel(){
      this.subnivel = 0
      this.iluminarSecuencia()
      this.agregarEventosClick()
  }
  transformarNumeroAColor(numero){
      switch (numero){
          case 0: 
              return 'celeste'
          case 1: 
              return 'violeta'
          case 2: 
              return 'naranja'
          case 3: 
              return 'verde'
          case 4: 
              return 'negro'
          case 5: 
              return 'amarillo'
          case 6: 
              return 'cafe'
          case 7: 
              return 'gris'
          case 8: 
                return 'azul'
          case 9: 
              return 'rojo'
          case 10: 
              return 'morado'
          case 11: 
              return 'esmeralda'
          case 12: 
              return 'plateado'
          case 13: 
              return 'rosa'
          case 14: 
              return 'fosforecente'
          case 15: 
              return 'caramelo'
      }
  }
  transformarColorANumero(color){
      switch (color){
          case 'celeste': 
              return 0
          case 'violeta': 
              return 1
          case 'naranja': 
              return 2
          case 'verde': 
              return 3

          case 'negro': 
              return 4
          case 'amarillo': 
              return 5
          case 'cafe': 
              return 6
          case 'gris': 
              return 7

          case 'azul': 
              return 8
          case 'rojo': 
              return 9
          case 'morado': 
              return 10
          case 'esmeralda': 
              return 11

          case 'plateado': 
              return 12
          case 'rosa': 
              return 13
          case 'fosforecente': 
              return 14
          case 'caramelo': 
              return 15
      }
  }

  hacerSonido(color){
      switch(color){
        case 'celeste': 
            this.sounds.sound0.play()
            break;
        case 'violeta': 
            this.sounds.sound1.play()
            break;
        case 'naranja': 
            this.sounds.sound2.play()
            break;
        case 'verde': 
            this.sounds.sound3.play()
            break;
        case 'negro': 
            this.sounds.sound4.play()
            break;
        case 'amarillo': 
            this.sounds.sound5.play()
            break;
        case 'cafe': 
            this.sounds.sound6.play()
            break;
        case 'gris': 
            this.sounds.sound7.play()
            break;
        case 'azul': 
            this.sounds.sound8.play()
            break;
        case 'rojo': 
            this.sounds.sound9.play()
            break;
        case 'morado': 
            this.sounds.sound10.play()
            break;
        case 'esmeralda': 
            this.sounds.sound11.play()
            break;
        case 'plateado': 
            this.sounds.sound12.play()
            break;
        case 'rosa': 
            this.sounds.sound13.play()
            break;
        case 'fosforecente': 
            this.sounds.sound14.play()
            break;
        case 'caramelo': 
            this.sounds.sound15.play()
            break;
      }
  }

  iluminarSecuencia(){
      for (let i = 0; i < this.nivel; i++){
          const color = this.transformarNumeroAColor(this.secuencia[i])
          setTimeout(()=> this.hacerSonido(color), 750 * i)
          setTimeout(()=> this.iluminarColor(color), 750 * i)
      }
  }
  iluminarColor(color){
      this.colores[color].classList.add('light')
      setTimeout(()=> this.apagarColor(color), 350)
  }
  apagarColor(color){
      this.colores[color].classList.remove('light')
  }
  agregarEventosClick(){
      this.colores.celeste.addEventListener('click', this.elegirColor)
      this.colores.violeta.addEventListener('click', this.elegirColor)
      this.colores.naranja.addEventListener('click', this.elegirColor)
      this.colores.verde.addEventListener('click', this.elegirColor)
      this.colores.negro.addEventListener('click', this.elegirColor)
      this.colores.amarillo.addEventListener('click', this.elegirColor)
      this.colores.cafe.addEventListener('click', this.elegirColor)
      this.colores.gris.addEventListener('click', this.elegirColor)
      this.colores.azul.addEventListener('click', this.elegirColor)
      this.colores.rojo.addEventListener('click', this.elegirColor)
      this.colores.morado.addEventListener('click', this.elegirColor)
      this.colores.esmeralda.addEventListener('click', this.elegirColor)
      this.colores.plateado.addEventListener('click', this.elegirColor)
      this.colores.rosa.addEventListener('click', this.elegirColor)
      this.colores.fosforecente.addEventListener('click', this.elegirColor)
      this.colores.caramelo.addEventListener('click', this.elegirColor)
  }
  eliminarEventosClick(){
      this.colores.celeste.removeEventListener('click', this.elegirColor)
      this.colores.violeta.removeEventListener('click', this.elegirColor)
      this.colores.naranja.removeEventListener('click', this.elegirColor)
      this.colores.verde.removeEventListener('click', this.elegirColor)
      this.colores.negro.removeEventListener('click', this.elegirColor)
      this.colores.amarillo.removeEventListener('click', this.elegirColor)
      this.colores.cafe.removeEventListener('click', this.elegirColor)
      this.colores.gris.removeEventListener('click', this.elegirColor)
      this.colores.azul.removeEventListener('click', this.elegirColor)
      this.colores.rojo.removeEventListener('click', this.elegirColor)
      this.colores.morado.removeEventListener('click', this.elegirColor)
      this.colores.esmeralda.removeEventListener('click', this.elegirColor)
      this.colores.plateado.removeEventListener('click', this.elegirColor)
      this.colores.rosa.removeEventListener('click', this.elegirColor)
      this.colores.fosforecente.removeEventListener('click', this.elegirColor)
      this.colores.caramelo.removeEventListener('click', this.elegirColor)
  }
  elegirColor(ev){
      const nombreColor = ev.target.dataset.color
      const numeroColor = this.transformarColorANumero(nombreColor)
      this.iluminarColor(nombreColor)
      this.hacerSonido(nombreColor)

      if (numeroColor === this.secuencia[this.subnivel]){
          this.subnivel++
          if (this.subnivel === this.nivel){
              this.nivel++
              this.eliminarEventosClick()
              if (this.nivel === (ULTIMO_NIVEL + 1)){
                  this.ganoElJuego()
              }else{
                  setTimeout(this.siguienteNivel, 1000)
              }
          }
      }else{
          this.perdioElJuego()
      }
  }
  ganoElJuego(){
      swal('luisglopez7777','You are the best!', 'success')
          .then(this.inicializar)
      }
  perdioElJuego(){
      swal('luisglopez7777','You can do it!', 'error')
          .then(()=>{
              this.eliminarEventosClick()
              this.inicializar()
          })
  }

}
function empezarJuego(){
    window.juego = new Juego
}
