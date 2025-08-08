import chalk from 'chalk';

const promptQrcode = [
    {
        name: 'link',
        description: chalk.green('Digite o link para gerar o QR Code:'),
    },
    {
        name: 'type',
        description: chalk.green('Escolha entre o tipo de QRCODE (1-NORMAL ou (2-TERMINAL'),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic('Escolha apenas entre 1 e 2'),
        required: true
    },
];

export default promptQrcode;