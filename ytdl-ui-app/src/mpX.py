# from __future__ import unicode_literals #import stuff
# import youtube_dl #import youtube_dl, be sure to update twice a year..
import sys
# print(sys.argv) # to scan terminal

print("Hello World!")
sys.stdout.flush() # to return data

# class MyLogger(object): # Comment out if not needed. Also comment out the lower part in options.
#     """Logger for keeping track of errors."""
#     def debug(self, msg): # Debug level 10
#         pass

#     def info(self, msg):
#         print("Another day, another song")

#     def warning(self, msg): # Warning level 30
#         pass

#     def error(self, msg): # Error level 40
#         print(msg)


# def my_hook(d):
#     """Status function"""
#     if d['status'] == 'finished':
#         print('Done downloading, now converting ...')

# options = {
#     'format':'bestaudio/best',          # for best quality!
#     'extractaudio':True,                # extract only audio
#     'audioformat':'mp3',                # convert to mp3
#     'outtmpl': u'%(title)s.%(ext)s',    # name the file the ID of the video
#     'noplaylist':True,                  # only download one song
#     'nocheckcertificate':False,
#     'postprocessors': [{
#         'key': 'FFmpegExtractAudio',    # conversion key
#         'preferredcodec': 'mp3',        # mode, mp3 so just sound in this case.
#         'preferredquality': '192',      # quality, you can also use youtube-dl -F 
# # 'http...' to see all levels of quality provided.
#     }],
#     'logger': MyLogger(), # Logger for errors.
#     'progress_hooks': [my_hook], # Hook as a status function
# }

# # link = input("Please provide the link\n") # scan the terminal, copy paste the link with ctrl + shift + v
# link = sys.argv[0]

# # playlist_boolean = input("Is it a playlist? Y/n \n")
# playlist_boolean = sys.argv[1]

# if (playlist_boolean == "Y"): # Checking if you want the full playlist
#     options['noplaylist'] = False
#     options['outtmpl'] = u'%(playlist_index)s-%(title)s.%(ext)s'

# if (playlist_boolean == "y"): # Checking if you want the index on full playlist for one song
#     options['outtmpl'] = u'%(playlist_index)s-%(title)s.%(ext)s'

# with youtube_dl.YoutubeDL(options) as ydl: # Download the song/video with youtube-dl
#     ydl.download([link])
