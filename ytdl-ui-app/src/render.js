/* Client Side of app */

// Import our ipcRenderer to communicate to ipcMain
const {ipcRenderer} = require('electron');

// Check for now, if DOM Content loaded
window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});

/* functions: **** */

function check_radio_buttons(name_radio){
  /* Cycle through radio buttons and return unique checked value */
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
  /* Elements needed from HTML index file */

  // Youtube link
  var link = document.getElementById('search_box').value;
  
  // mp3 or mp4 in radio buttons
  var download_methods = document.getElementsByName('download_method');
  var download_method_answer = check_radio_buttons(download_methods);
  
  // Playlist or not
  var playlist_booleans = document.getElementsByName('playlist_boolean');
  var playlist_boolean_answer = check_radio_buttons(playlist_booleans);

  // Output/print to console
  console.log(link);
  console.log(download_method_answer);
  console.log(playlist_boolean_answer)

  // Call and pass to main/index.js with link and args needed to run python youtube-dl
  ipcRenderer.send('run-python', [link, download_method_answer, playlist_boolean_answer]);
};

// Assign functions to buttons
var button = document.getElementById('download');
button.onclick = my_function;