import md5 from 'md5';

const requestMarvel = async (endpoint, options)  => {

    const publicKey = 'your';
    const privateKey = 'your';
    const timestamp = new Date().getTime().toString();
    const hash = md5(timestamp + privateKey + publicKey, 'hex');
    
    const baseUrl = 'https://gateway.marvel.com/v1/public/';

    let url = `${baseUrl}${endpoint}?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;

    if(options){
        for (const key in options) {
            if (Object.hasOwnProperty.call(options, key)) {
                const value = options[key];
                url += `&${key}=${value}`
            }
        }
    }

    const request = await fetch(url)
    return await request.json()

}

export default requestMarvel
