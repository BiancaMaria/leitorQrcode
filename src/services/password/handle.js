import chalk from "chalk";
import permittedCharacters from "./utils/permitted-characters.js";

async function handle() {
    let characters = []
    let password = ''

    const passwordLength = process.env.PASSWORD_LENGTH;
    characters = await permittedCharacters();

    process.stdout.write(chalk.blue("Gerando seu Password, aguarde..."));
    await new Promise(resolve => setTimeout(resolve, 1000));

  // Move o cursor para o início da linha e a limpa
  process.stdout.write('\r\x1B[K');
    for (let i=0; i < passwordLength; i++) {
        const index = Math.floor(Math.random() * characters.length);
        password += characters[index];
    }
     
        return (chalk.green("Password gerada com sucesso!!!")+"\n"+password);

}

export default handle;