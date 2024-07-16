export function extractError(text) {
    if (!/auth/.test) return text;
    let str = text.split('/')[1].slice(0, -2).replaceAll('-', ' ');
    str = str.replace("email","Phone Number")
    return `${str[0].toUpperCase() + str.slice(1)}.`;
  }