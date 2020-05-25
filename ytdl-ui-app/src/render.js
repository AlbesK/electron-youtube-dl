/* Client Side */
// Import our ipcRenderer to communicate to ipcMain
const {ipcRenderer} = require('electron');

// Check for now, if DOM Content loaded
window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});

/* functions: */
function check_radio_buttons(name_radio){
  var name_value;
  for(var i = 0; i < name_radio.length; i++){
      if(name_radio[i].checked){
          name_value = name_radio[i].value;
          break;
      }
  }
  
  return name_value;  
}

function my_function(){
  // Elements needed from HTML index file
  // var link = document.getElementById('search_box').value;
  // var radios = document.getElementsByName('download_method');
  // var download_method_answer = check_radio_buttons(radios);
  // console.log(link);
  // console.log(download_method_answer);
  ipcRenderer.send('run-python');
};




//Buttons
var button = document.getElementById('download');
button.onclick = my_function;

