import qr from "qrcode-terminal";
import chalk from "chalk";

async function handle(error, result) {
  if (error) {
    console.log("error on application");
    return;
  }

  const isSmall = result.type == 2;

  process.stdout.write(chalk.blue("Gerando QR Code..."));
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Move o cursor para o início da linha e a limpa
  process.stdout.write('\r\x1B[K');

  qr.generate(result.link, { small: isSmall }, (qrcode) => {
    console.log(chalk.green("QR Code gerado com sucesso!!!\n"));
    console.log(qrcode);
  });
}

export default handle;