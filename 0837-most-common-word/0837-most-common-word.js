/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
function mostCommonWord(paragraph, banned) {
    const bannedSet = new Set(banned);
    const words = paragraph.toLowerCase().replace(/[!?',;.\s]+/g, ' ').split(' ');
    const counts = words.reduce((map, word) => {
        if (!bannedSet.has(word) && word) map[word] = (map[word] || 0) + 1;
        return map;
    }, {});
    return Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);
}