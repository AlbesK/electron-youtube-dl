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

function download(){
  /* Elements needed from HTML index file */

  // Output for checking options are selected
  var output = document.getElementById('myPar');

  // Youtube link
  var link = document.getElementById('search_box').value;
  
  // mp3 or mp4 in radio buttons
  var download_methods = document.getElementsByName('download_method');
  var download_method_answer = check_radio_buttons(download_methods);
  
  // Playlist or not
  var playlist_booleans = document.getElementsByName('playlist_boolean');
  var playlist_boolean_answer = check_radio_buttons(playlist_booleans);

  if (playlist_boolean_answer == null || download_method_answer == null) {
    output.innerHTML = "Please select an option for each case above!!";
  } else {
    output.innerHTML = "Calling youtube dl in python...";
    // Output/print to console
    console.log(link);
    console.log(download_method_answer);
    console.log(playlist_boolean_answer)

    // Call and pass to main/index.js with link and args needed to run python youtube-dl
    ipcRenderer.send('run-python', [link, download_method_answer, playlist_boolean_answer]);

    ipcRenderer.on('reply', (event, arg) => {
      // console.log(arg) // prints "pong"
      output.innerHTML = arg;
    })

  }

  // output.innerHTML = "Out of Python! Check the new 'Youtube DL' folder at your Downloads!"
};

// Assign functions to buttons
var button = document.getElementById('dl');
button.onclick = download;