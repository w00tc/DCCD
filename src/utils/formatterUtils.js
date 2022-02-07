export const DATE = 'DD.MM.YYYY';
export const DATE_PICKER_DATE_FORMAT = 'YYYY-MM-DD';
export const DATE_WITH_TIME = 'DD.MM.YYYY HH:mm';
export const TIMESTAMP = 'DD.MM.YYYY HH:mm:ss';
export const TIME = 'HH:mm';
export const SERVER_DATE_FORMAT = 'YYYY-MM-DD';
export const SERVER_DATE_TIME_FORMAT = 'YYYY-MM-DDTHH:mm:ss';
export const PATTERN_ONLY_NUMBERS = /^\d+$/;

export const trimValue = value => (value && typeof value === 'string' ? value.trim() : value);

export const getFormattedFloat = (value, fixed = 2) => value && parseFloat(value.toFixed(fixed));

export const formatFileSize = value => value && (
    value >= 1024
        ? `${getFormattedFloat(value / 1024)} MB`
        : `${getFormattedFloat(value)} kB`
);

export const parseDateFiled = date => (date ? date.format(SERVER_DATE_TIME_FORMAT) : null);
