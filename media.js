import PromptSync from "prompt-sync"
import chalk from 'chalk';

const prompt = PromptSync()




const valor1 = Number(prompt(chalk.bold.black.bgWhiteBright("Digite o primeiro valor: ")))
const valor2 = Number(prompt(chalk.dim.red.bgCyanBright("Digite o segundo valor: ")))
const valor3 = Number(prompt(chalk.italic.green.bgMagentaBright("Digite o terceiro valor: ")))
const valor4 = Number(prompt(chalk.underline.yellow.bgBlueBright("Digite o quarto valor: ")))
const valor5 = Number(prompt(chalk.overline.magenta.bgYellowBright("Digite o quinto valor: ")))

const somaValores = valor1+valor2+valor3+valor4+valor5;
const mediaValores =  somaValores/5;


console.log(chalk.visible.cyan.bgRedBright(`A média dos 5 valores digitados é: ${mediaValores}!`))