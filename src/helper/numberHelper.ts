export const numberFormat = (
  number: string | number,
  thousandSeparator: string = ','
) => {
  if (Number(number) === 0) {
    return 0;
  }
  let numberString = number.toString();

  const prefix = numberString.substring(0, 1);
  let resPrefix = '';
  // consoleLog(numberString, 'nStr');
  // consoleLog(prefix, 'prefix');
  if (prefix === '+' || prefix === '-') {
    numberString = numberString.substr(1);
    resPrefix = prefix;
  }

  const rest = numberString.length % 3;
  let result = numberString.substring(0, rest);
  const thousands = numberString.substring(rest).match(/\d{3}/gi);

  if (thousands) {
    const separator = rest ? thousandSeparator : '';
    result += separator + thousands.join(thousandSeparator);
  }
  return resPrefix + result;
};

export const moneyFormat = (
  number: string | number,
  thousandSeparator = '.',
  dot = ''
) => {
  if (!number) {
    return '0';
  }
  return numberFormat(number, thousandSeparator) + dot;
};
