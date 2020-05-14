/* Part to be used to call Python backend or to pass the string for call etc*/

//Assign functions to buttons
// console.log("ok");
document.getElementById("b").onclick = download;
// <?php echo add(1,2);?> , https://stackoverflow.com/questions/3345457/how-to-put-php-inside-javascript#3345487

function download(){
    // var h = Number(document.getElementById("i_1h").value);  
    // document.getElementById("i_1H").value = h;
    var link = document.getElementById("link").value;
    var playlist_answers = document.getElementsByName("playlist_answer");
    var download_methods = document.getElementsByName("download_method");
    var pl_answ = radio_check(playlist_answers);
    var dl_mthd = radio_check(download_methods);
    // document.getElementById("output").innerHTML = pl_answ;
    var command = "python3 mpX.py "+link + " " + pl_answ;

    var run_python = "<?php $command = escapeshellcmd(ls); $output = shell_exec($command); echo $output;?>";
    alert(run_python);
    var output = call_python();
    alert("Call Python");
}

function radio_check(radios){
  var radio_value;
  
  for(var i = 0; i < radios.length; i++){
    // alert("ok");
    if(radios[i].checked){
      // alert("cool");
      radio_value = radios[i].value;
      break;
    }  
    
  }
  
  return radio_value;
}

function call_python(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("output").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("POST", "mpX.py", true);
  xhttp.send();
}