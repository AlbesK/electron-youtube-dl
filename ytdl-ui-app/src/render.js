/* Client Side */
const {ipcRenderer} = require('electron');

window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});

var button = document.getElementById('download');


button.onclick = my_function;

function my_function(){
    ipcRenderer.send('open-error-dialog');
};
