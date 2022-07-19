export const exerciseOptions = {
    method: 'GET',
    mode: 'cors',
    headers: {
        'Content-Type': 'application/json',
        'x-apikey': 'GZMdJn2SkQewUGtZK1rSY41dGlleazUg',
        'Accept': 'application/json; charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
    }
}

export const fetchData = async (url) => {
    const response = await fetch(url, exerciseOptions);
    const data = await response.json();

    return data;
}
