/**
 * @param {string} s
 * @return {number}
 */
const reverseDegree = s =>
  s.split('').reduce((sum, ch, i) =>
    sum + (26 - (ch.charCodeAt(0) - 97)) * (i + 1), 0);
