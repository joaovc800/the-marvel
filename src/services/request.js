import md5 from 'md5';

const requestMarvel = async (endpoint, options)  => {

    const publicKey = '77f0a3969f716e263cc88446917310b5';
    const privateKey = 'af9986c6c7929a6adabec9cce6c0e014b2901ab2';
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