import { playListURL } from '../utils/constants.js';
import { requestData } from '../utils/requestData.js';
import { fetchContent } from '../utils/fetchContent.js';

let remainingTime = 600; // seconds
let playersBlockRendered = false;
let block = null;
let intervalId = null;

export function renderPlayersBlockWithTimeout(container) {
    fetchContent('blocks/lobby.html', '.players', (contentBlock) => {
        block = contentBlock;
        if (!playersBlockRendered) {
            playersBlockRendered = true;
            renderPlayersBlock(container);
        }

        intervalId = setInterval(() => {
            renderPlayersBlock(container);
        }, 2000);

        window.application.timers.push(intervalId);

        setTimeout(() => {
            clearInterval(intervalId);
            location.reload();
        }, remainingTime * 1000);
    }); // close fetchContent
}

function renderPlayersBlock(container) {
    const token = window.application.tokens['auth-token']; // get token        
    requestData({
        url: `${playListURL}?token=${token}`,
        callback: (data) => {
            window.application.players = data.list; // store players            
            fillPlayersBlock(container);
        }
    }); // close requestData function                
} // close renderPlayersBlock

function fillPlayersBlock(container) {
    container.textContent = ''; // Remove all children from current content
    container.appendChild(block); // Add new content

    // ###### fill players table ######
    const players = container.querySelector('.players__body');
    const playerItem = players.querySelector('.players__item');
    players.textContent = ''; // Remove all children from current content

    // clone players
    const list = window.application.players;
    list.forEach((player) => {
        const clone = playerItem.cloneNode(true);
        const userName = clone.querySelector('.login');
        userName.textContent = player.login;
        if (player['you']) {
            userName.classList.add('you');
        }
        clone.querySelector('.loses').textContent = player.loses;
        clone.querySelector('.papers').textContent = player.papers;
        clone.querySelector('.rocks').textContent = player.rocks;
        clone.querySelector('.scissors').textContent = player.scissors;
        clone.querySelector('.wins').textContent = player.wins;
        players.appendChild(clone);
    }); // close forEach        
} // close fillPlayersBlock