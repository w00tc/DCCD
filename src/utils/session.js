import { saveData, extractData, clearData } from './localStorageUtils';

export function saveSession(data) {
    saveData('sessionDCCD', data);
}

export function extractSession() {
    return extractData('sessionDCCD');
}

export function clearSession() {
    clearData('sessionDCCD');
}
