import md5 from 'md5';

const requestMarvel = async (endpoint, options)  => {

    const publicKey = '3a99bd39c508569e210904b562d2e81f';
    const privateKey = '933639f110736f9ef74db2141ed86a05ec7b3c1b';
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