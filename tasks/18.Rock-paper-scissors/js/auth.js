import { loginURL } from './utils/constants.js';
import { requestData } from './utils/requestData.js';

// ##### login #####
export const auth = (content) => {

    // ##### get elements #####
    const form = document.querySelector('.form');
    const userName = form.querySelector('#username');
    const submitBtn = form.querySelector('.submit-btn');

    // ##### prepare page #####
    userName.focus(); // focus on user name input    

    // disable submit button if input is empty
    userName.addEventListener('input', (event) => {
        submitBtn.disabled = (event.target.value.trim().length > 0) ? false : true;
    });

    // ##### login #####
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // prevent default form submit        

        // send request to get token
        requestData({
            url: loginURL,
            params: {
                login: userName.value, // user name
            },
            callback: (data) => {
                window.application.tokens['auth-token'] = data.token;
                window.application.login = userName.value;
                window.application.renderBlock('players-block', content); // render players block                
            }
        }); // end requestData

    }); // end form submit
}; // end login
