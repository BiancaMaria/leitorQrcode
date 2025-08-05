import prompt from 'prompt';
import chalk from 'chalk';
import mainPrompt from './prompts/prompt-main.js';

async function main() {

    prompt.get(mainPrompt, async (error, choose) => { 
        if (choose.select == 1) console.log(chalk.green("Você escolheu a ferramenta QRCODE!"));
        if (choose.select == 2) console.log(chalk.green("Você escolheu a ferramenta PASSWORD!"));
        
    })

    prompt.start();

}

main();