from __future__ import unicode_literals #import stuff
import youtube_dl #import youtube_dl, be sure to update twice a year..
import sys
import os


print(sys.argv) # to scan terminal

print("Inside Python")
print("Youtube dl will start working shortly...")


class MyLogger(object): # Comment out if not needed. Also comment out the lower part in options.
    """Logger for keeping track of errors."""
    def debug(self, msg): # Debug level 10
        pass

    def info(self, msg):
        print("Another day, another song")

    def warning(self, msg): # Warning level 30
        pass

    def error(self, msg): # Error level 40
        print(msg)


def my_hook(d):
    """Status function"""
    if d['status'] == 'finished':
        print('Done downloading, now converting ...')


# Path / Folder to save file on Downloads relatively to path
SAVE_PATH = '/'.join(os.getcwd().split('/')[:3]) + '/Downloads'
print("Output will be saved at: {}".format(SAVE_PATH))

link = sys.argv[1]              # youtube link
download_method = sys.argv[2]   # mp4 or mp3
playlist_boolean = sys.argv[3]  # Playlist or not

if download_method == "mp4" :
    # Options for video/movie
    print("mp4 output options being sorted...")
    options = {
    'format':'best',          # for best quality!
    'outtmpl': SAVE_PATH + '/%(title)s.%(ext)s',    # name the file the ID of the video
    'noplaylist':True,                  # only download one video
    'nocheckcertificate':False,
    'logger': MyLogger(), # Logger for errors.
    'progress_hooks': [my_hook], # Hook as a status function
    }
    if (playlist_boolean == "Y"): # Checking if you want the full playlist
        options['noplaylist'] = False
        options['outtmpl'] = SAVE_PATH + '/%(playlist_index)s-%(title)s.%(ext)s'
    
else:
    # Options for sound/audio files
    print("mp3 output options being sorted...")
    options = {
        'format':'bestaudio/best',          # for best quality!
        'extractaudio':True,                # extract only audio
        'audioformat':'mp3',                # convert to mp3
        'outtmpl':SAVE_PATH + '/%(title)s.%(ext)s',    # 'o': u'../%(title)s.%(ext)s',
        'noplaylist':True,                  # only download one song
        'nocheckcertificate':False,
        # 'output': u'./Desktop/%(title)s.%(ext)s',
        'postprocessors': [{
            'key': 'FFmpegExtractAudio',    # conversion key
            'preferredcodec': 'mp3',        # mode, mp3 so just sound in this case.
            'preferredquality': '192',      # quality, you can also use youtube-dl -F 
    # 'http...' to see all levels of quality provided.
        }],
        'logger': MyLogger(), # Logger for errors.
        'progress_hooks': [my_hook], # Hook as a status function
    }

    if (playlist_boolean == "Y"): # Checking if you want the full playlist
        options['noplaylist'] = False
        options['outtmpl'] = SAVE_PATH + '/%(playlist_index)s-%(title)s.%(ext)s'

# Download the song/video with youtube-dl
with youtube_dl.YoutubeDL(options) as ydl: 
    ydl.download([link])

sys.stdout.flush() # to return data 