/* Part to be used to call Python backend or to pass the string for call etc*/

//Assign functions to buttons
document.getElementById("dl").onclick = d;
// <?php echo add(1,2);?> , https://stackoverflow.com/questions/3345457/how-to-put-php-inside-javascript#3345487

function d(){
    // var h = Number(document.getElementById("i_1h").value);  
    // document.getElementById("i_1H").value = h;
 
    // var link = document.getElementById("link").value;
    // var playlist_answers = document.getElementsByName("playlist_answer");
    // var download_methods = document.getElementsByName("download_method");
    // var pl_answ = radio_check(playlist_answers);
    // var dl_mthd = radio_check(download_methods);
    document.getElementById("output").innerHTML = 5 + 6;
    
    // var run_python = "<?php $command = escapeshellcmd('python3 /usr/custom/test.py'); $output = shell_exec($command); echo $output;?>"
    
  }

function radio_check(radios){
  var radio_value;
  for(var i = 0; i < radios.length; i++){
    if(rates[i].checked){
      radio_value = radios[i].value;
    }  
  }
  return radio_value
}