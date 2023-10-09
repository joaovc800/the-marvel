const request = async (args, callback)  => {
    const url = args.url
    const option = { method: args.method }

    if(args.body) option.body = JSON.stringify(args.body)

    fetch(url, option)
    .then(response => response.json())
    .then(response => callback(response))
}

export default request