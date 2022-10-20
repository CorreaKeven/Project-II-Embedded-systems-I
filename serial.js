const fs = require('fs')
const { networkInterfaces } = require('os')

const { SerialPort, ReadlineParser } = require('serialport')
const { formatWithOptions } = require('util')

let x1 = 0;
let x2 = 0;
let x3 = 0;
let x1_aux = 0;
let x2_aux = 0;
let x3_aux = 0;

let ler_temperatura = false;
let ler_umidade = false;
let flag_salvaTemp = false;
let flag_salvaUmid = false;

var data = new Date();
var hora = data.getHours();
var min = data.getMinutes();
var seg = data.getSeconds();


const port = new SerialPort({ path: 'COM4', baudRate: 19200, autoOpen: true }) /* mudar o path de acordo  */
const parser = port.pipe(new ReadlineParser())
parser.on('data', (line) => {
    var sensores = line.split(":") /* separa os dados da porta serial pelo caracter ':'  */

        if(ler_temperatura ===true || ler_umidade ===true){
        grafico1(x1++, sensores[0],sensores[1]) /*grafico de temperatura - G1 */
        grafico2(x2++, sensores[0]) /*grafico de temperatura - G2*/
        grafico3(x3++, sensores[1]) /*grafico de umidade grafico - G3*/
        }
    if (flag_salvaTemp === true) {
        x1_aux++
        fs.appendFileSync('Dados_Temperatura.csv', hora + ":" + min +"; -> Temperatura -> Amostra : " + x1_aux + "," + sensores[0] + "\n") // Cria arquivo .csv da temperatura
    }                                                                                                                       // e concatena os dados. Cada loop adiciona uma nova linha

    if (flag_salvaUmid === true) {
        x2_aux++
        fs.appendFileSync('Dados_Umidade.csv', hora + ":" + min + "; -> Umidade -> Amostra : " + x2_aux + "," + sensores[1] + "\n") // Cria arquivo .csv da umidade
    }

})
