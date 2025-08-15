import prompt from 'prompt';
import promptSchemaQrcode from '../../prompts-schema/prompt-schema-qrcode.js';
import handle from '../qr-code/handle.js';

async function createQrcode() {

    prompt.get(promptSchemaQrcode,handle)
    prompt.start();
}

export default createQrcode;