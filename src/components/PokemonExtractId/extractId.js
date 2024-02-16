export const extractId = (poke) => {
    const id = poke.split('/');
    return id[id.length - 2];
}