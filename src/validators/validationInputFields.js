import { isValidPhoneNumber } from 'libphonenumber-js';

import { trimValue } from 'utils/formatterUtils';

/* eslint-disable */
//because eslint means that regex is a mistake
export const PATTERN_CURRENCY = /^[0-9]*(\.[0-9]{0,2})?$/
export const PATTERN_ONLY_NUMBERS = /^\d+$/;
export const PATTERN_FIELDS = /^[^<>|#{}~\*\+\$\\\^]*$/;
export const PASSWORD = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
export const PATTERN_EMAIL = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
/* eslint-enable */

export const checkTextField = value => (
    PATTERN_FIELDS.test(value)
);

export const checkPassword = value => (
    PASSWORD.test(value)
);

export const checkNumbers = value => PATTERN_ONLY_NUMBERS.test(value);

export const checkCurrency = value => PATTERN_CURRENCY.test(value);

export const checkRegexEmail = value => PATTERN_EMAIL.test(value);

export const email = value => {
    if (!value) {
        return null;
    }
    return checkRegexEmail(value) ? null : l('Enter a valid email');
};

const isEmptyString = field => !trimValue(field);

export const required = value => (isEmptyString(value) && value !== 0 ? l('This field is required') : null);

export const numberBetween = (min, max) => value => {
    const trimmedValue = parseFloat(trimValue(value));
    return trimmedValue > max || trimmedValue < min
        ? sprintf(l('Value should be between %s and %s'), min, max)
        : null;
};
export const timestampDateInFuture = (timestamp, currentTimestamp) => () => (timestamp > currentTimestamp
    ? l('Date and time should be in future')
    : null);

export const stringLength = (max, error) => value => {
    const trimmedValue = trimValue(value === null || value === undefined ? '' : value);
    return trimmedValue.length > max
        ? sprintf(l(error) || l('Length should maximum %d symbols'), max)
        : null;
};

export const requiredPassword = value => (isEmptyString(value) ? l('Please enter a password') : null);

export const password = value => (!checkPassword(value) ?
    l('Password must have character, number, uppercase letter and contain at least 6 characters') : null);

export const compareTwoPasswords = (value, values) => {
    if (values.password !== values.confirmPassword) {
        return l('Passwords do not match');
    }
    return null;
};

export const composeValidators = (...validators) => (value, values, meta) => (
    validators.reduce((error, validator) => error || validator(value, values, meta), undefined)
);

export const numbers = value => (value && !checkNumbers(value) ? l('Only numbers are allowed') : null);

export const phone = value => (value && !isValidPhoneNumber(value)
    ? l('Phone should be in international format')
    : null);

export const specialSymbols = value => (
    checkTextField(value) ? null : l('Field can\'t contain special symbols: <>|#{}~*+$\\^')
);
