

export const getHeroes = async( url ) => {
    try {
        const resp = await fetch( url );
        const data = await resp.json();
        return data;
    } catch (err) {
        throw err;
    }
}