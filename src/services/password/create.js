import chalk from "chalk"
import handle from "../qr-code/handle";

async function createPassword() {
    console.log(chalk.green("Você escolheu a ferramenta PASSWORD!"));
    const password = await handle();
}

export default createPassword;