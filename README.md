# electron-youtube-dl
A simple UI build with [electron](https://www.electronjs.org/apps) and [node.js](https://nodejs.org/en/) to use [youtube-dl](https://github.com/ytdl-org/youtube-dl/) to download videos/music.

# How to use:
## Clone/Donwload the repo

Then for Linux through terminal, or any form of it in other os's run inside the directory ```electron-youtube-dl/ytdl-ui-app/```: 

```
npm install
```
^ to get dependencies
and then:
```
npm start
```

You will be greeted with the gui shortly after:

<figure>
  <img src="https://github.com/AlbesK/simple-ytdl-ui/blob/master/images/starting_ui.png" alt="Electron UI For Youtube-DL" style="width:50%">
  <figcaption>Fig.1 Electron UI for Youtube-DL after running 'npm start'.</figcaption>
</figure>

## Copy and paste link from youtube 

(including playlist text if needed) and check options:

<figure>
  <img src="https://github.com/AlbesK/simple-ytdl-ui/blob/master/images/mp3_input_example_2.png" alt="Electron UI For Youtube-DL" style="width:50">
  <figcaption>Fig.2 Sample output after successful link.</figcaption>
</figure>

## Output will be saved at local Downloads folder.
<figure>
  <img src="https://github.com/AlbesK/simple-ytdl-ui/blob/master/images/output_1.png" alt="Electron UI For Youtube-DL" style="width:50%">
  <figcaption>Fig.3 Sample Output Folder.</figcaption>
</figure>

<figure>
  <img src="https://github.com/AlbesK/simple-ytdl-ui/blob/master/images/output_2.png" alt="Electron UI For Youtube-DL" style="width:50%">
  <figcaption>Fig.4 Sample download.</figcaption>
</figure>

# Notes:

You need to have the following installed already:  

<ul>
  <li>youtube-dl (for <b>python3</b>, through <b>pip3</b>) - Update once in a while as well.</li>
  <li>node.js</li>
</ul>  

# Release builds

This was tested on Ubuntu 18.04. It already has [electron packager](https://github.com/electron/electron-packager) and can be used directly to make builds through: 
```javascript
npm run package-os // i.e. npm run package-linux
``` 
where os is linux, win, or mac (the commands are in ```package.json```). <i>But</i> the icon/logo is still not resolved for now.

Will update when I feel I want new features, or to automate more processes, and lastly, of course feel free to fork it and play yourself! 

I learned a lot building this app, from main/index.js (main UI/back-end) to render.js (client) calls through ipc to communicate asynchronously from a renderer process to the main processes, security policy calling python to even simple string formatting in javascript.

# Motivation
I like the idea of cross platform apps using web-languages inspired UI and
another language in the back-end not just JavaScript. The idea here is building 
for my mvp a simple UI in HTML5, CSS, JavaScript to extend the command line
interface of the youtube-dl open source project. Also inspired when I found out [vs code](https://code.visualstudio.com/) is actually
built with electron and so many more apps. 

It should be noted this will be done only for personal use, and I do not condone any mass downloads of videos/music for redistribution! 
(i.e. by using this to download songs which you then share with friends. This
is strictly for personal use!!)

If I make the repo public in the future to showcase web/other backened integration
will do so only by changing the license or making clear that whoever uses this app should use it for himself and not for re-selling/resharing the downloaded content.

# Github
I have used version control before but thought it would be nice to start again  a
project here rather than just edit the same folders and learn more through practice.

# Branches
For now I will use 2 branches. Another one called ```draft``` along ```master```. ```draft``` as the name states will be used on most changes I would like to explore, and then would push them to 'master' when its in working order.
