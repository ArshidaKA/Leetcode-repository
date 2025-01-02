/**
 * @param {number} n
 * @param {number[][]} pick
 * @return {number}
 */
var winningPlayerCount = function(n, pick) {

    const playerPicks = Array.from({ length: n }, () => ({}));

    
    for (const [player, color] of pick) {
        playerPicks[player][color] = (playerPicks[player][color] || 0) + 1;
    }

    
    let winners = 0;
    for (let i = 0; i < n; i++) {
        if (Object.values(playerPicks[i]).some(count => count > i)) {
            winners++;
        }
    }

    return winners;
};
