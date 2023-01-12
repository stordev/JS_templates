import { playListURL } from '../utils/constants.js';
import { requestData } from '../utils/requestData.js';
import { fetchContent } from '../utils/fetchContent.js';

class PlayerBlock {
    constructor(container) {
        this.remainingTime = 600; // seconds
        this.playersBlockRendered = false;
        this.block = null;
        this.intervalId = null;
        this.container = container;
        this.token = window.application.tokens['auth-token'];
        this.currentYouPlayer = null;
    }

    startRendering() {
        fetchContent('blocks/lobby.html', '.players', (contentBlock) => {
            this.block = contentBlock;
            if (!this.playersBlockRendered) {
                this.playersBlockRendered = true;
                this.render();
            }

            this.intervalId = setInterval(() => {
                this.render();
            }, 2000);

            window.application.timers.push(this.intervalId);

            setTimeout(() => {
                this.stopRendering();
                location.reload();
            }, this.remainingTime * 1000);
        });
    }

    stopRendering() {
        clearInterval(this.intervalId);
    }

    render() {
        requestData({
            url: `${playListURL}?token=${this.token}`,
            callback: (data) => {
                if (window.application.players === data.list) {
                    return; // do not update if nothing changed
                }
                window.application.players = data.list;
                this.fillPlayersBlock();
            }
        });
    }

    fillPlayersBlock() {
        this.container.textContent = '';
        this.container.appendChild(this.block);

        const players = this.container.querySelector('.players__body');
        const playerItem = players.querySelector('.players__item');
        players.textContent = '';

        window.application.players.forEach((player) => {
            if (player.login === window.application.login) {
                player.you = true;
            }

            const clone = playerItem.cloneNode(true);
            const userName = clone.querySelector('.login');
            userName.textContent = player.login;

            if (player.you) {
                if (this.currentYouPlayer) {
                    this.currentYouPlayer.classList.remove('you');
                }
                this.currentYouPlayer = userName;
                userName.classList.add('you');
            }

            clone.querySelector('.loses').textContent = player.loses;
            clone.querySelector('.papers').textContent = player.papers;
            clone.querySelector('.rocks').textContent = player.rocks;
            clone.querySelector('.scissors').textContent = player.scissors;
            clone.querySelector('.wins').textContent = player.wins;
            players.appendChild(clone);
        });
    }
}

export function renderPlayersBlockWithTimeout(container) {
    const playerBlock = new PlayerBlock(container);
    playerBlock.startRendering();
}
