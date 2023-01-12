import { auth } from './auth.js';
import { renderAuthBlock } from './render/renderAuthBlock.js';
import { renderPlayersBlockWithTimeout } from './render/renderPlayersBlock.js';
import { renderAuthScreen } from './render/renderAuthScreen.js';

document.addEventListener('DOMContentLoaded', function () {
    window.application.tokens['auth-token'] = ''; // register token
    window.application.blocks['auth-block'] = renderAuthBlock; // register block
    window.application.blocks['players-block'] = renderPlayersBlockWithTimeout; // register block
    window.application.functions['auth'] = auth; // register function    
    window.application.screens['auth-screen'] = renderAuthScreen; // register screen    
    window.application.renderScreen('auth-screen'); // render screen        
});

// global application object
window.application = {
    tokens: {}, // store tokens
    players: [], // store players
    login: '', // store login
    blocks: {}, // store blocks
    functions: [], // store functions    
    screens: {}, // store screens
    timers: [], // store timers

    // render block function
    renderBlock: function (blockName, container) {
        window.application.blocks[blockName](container, (data) => output(blockName, data));
    },
    // render screen function
    renderScreen: function (screenName) {
        window.application.screens[screenName]();
    },
}

const output = (blockName, data) => {
    console.log(`${blockName} rendered`);
    const funcName = `${blockName}`.split('-')[0]; // get function name from block name    
    console.log(funcName);
    if (window.application.functions[funcName]) // check if function exists
        window.application.functions[funcName](data); // call function
}
