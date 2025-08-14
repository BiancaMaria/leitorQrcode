 async function permittedCharacters() {
        let permitted = [];
        
    if (process.env.UPPPERCASE_LETTERS === 'true') 
        characters = characters.push(...'ABCDEFGHIJKLMNOPQRSTUVWXYZ');

    if (process.env.LOWERCASE_LETTERS === 'true') 
        characters = characters.push(...'abcdefghijklmnopqrstuvwxyz');

    if (process.env.NUMBERS === 'true') 
        characters = characters.push(...'0123456789');

    if (process.env.SPECIAL_CHARACTERS === 'true') 
        characters = characters.push(...'!@#$%^&*()-_');
    
        return permitted;
    }

async function handle() {
    let characters = []
    let password = ''

    const passwordLength = process.env.PASSWORD_LENGTH;
    characters = await permittedCharacters();

    for (let i=0; i < passwordLength; i++) {
        const index = Math.floor(Math.random() * characters.length);
        password += characters[index];
    }
        return password;
}


export default handle;