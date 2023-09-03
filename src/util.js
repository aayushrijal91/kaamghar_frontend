const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

async function fetchQuery(path, params = null) {
    let url;

    if(params !== null) {
        url = `${baseUrl}/api/${path}/${params}`;
    } else {
        url = `${baseUrl}/api/${path}`;
    }

    const response = await fetch(`${url}`);

    const data = await response.json();

    return data;
}

async function postQuery(path, config, data) {
    let url = `${baseUrl}/api/${path}`;

    const response = await fetch(url, {
        ...config,
        body: JSON.stringify(data),
    });

    const res = await response.json();

    return res;
}

export {
    fetchQuery,
    postQuery
};