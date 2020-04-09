import time # this a library . A library contains useful functions
banner='''
 _______  _                 _______ _________ _______ 
(  ____ \| \    /\|\     /|(  ____ )\__   __/(       )
| (    \/|  \  / /( \   / )| (    )|   ) (   | () () |
| (_____ |  (_/ /  \ (_) / | (____)|   | |   | || || |
(_____  )|   _ (    \   /  |     __)   | |   | |(_)| |
      ) ||  ( \ \    ) (   | (\ (      | |   | |   | |
/\____) ||  /  \ \   | |   | ) \ \_____) (___| )   ( |
\_______)|_/    \/   \_/   |/   \__/\_______/|/     \|

'''
print(banner)
print('Main Menu')
print('1. Play')
print('2. Options')
print('3. Quit')
option=int(input())
if option==1:
    print('You are in a a horse cart.')
    print('You see Wolfram from Rorikstead sitting next to you.')
    time.sleep(3)
    print('He says you look like shit')
    time.sleep(3)
    print('What do you do?')
    time.sleep(2)
    print('1. I punch him')
    print('2. I stay quiet')
    option=int(input())
    if option==1:
        print('You killed him and were punished by Riften guards')
    elif option==2:
        print('You stay quiet like a retard and he kills you.')
elif option==2:
    print('this game does\'nt have any settings')
else:
    time.sleep(2)
    print('Quitting...')
