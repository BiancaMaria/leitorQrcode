import prompt from 'prompt';
import mainPrompt from './prompts/prompt-main.js';
import createQrcode from './services/qr-code/create.js';
import createPassword from './services/password/create.js';

async function main() {

    prompt.get(mainPrompt, async (error, choose) => { 
        if (choose.select == 1) await createQrcode();
        if (choose.select == 2) await createPassword();
        
    })

    prompt.start();

}

main();