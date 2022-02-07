export const isDev = process.env.NODE_ENV === 'development';

export function saveDataUnsafe(name, data) {
    localStorage.setItem(name, isDev ? JSON.stringify(data) : btoa(encodeURIComponent(JSON.stringify(data))));
}

export function saveData(name, data) {
    try {
        saveDataUnsafe(name, data);
    } catch (err) {
        console.error(err);
    }
}

export function extractData(name) {
    try {
        const item = localStorage.getItem(name);
        return isDev ? item : item && decodeURIComponent(atob(item));
    } catch (err) {
        console.error(err);
    }
    return null;
}

export function clearData(name) {
    try {
        localStorage.setItem(name, '');
    } catch (err) {
        console.error(err);
    }
}
