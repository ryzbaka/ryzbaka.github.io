import pandas as pd
import re
import requests
from bs4 import BeautifulSoup

links=[
    "https://en.wikipedia.org/wiki/Aircraft",
    "https://en.wikipedia.org/wiki/Powered_aircraft",
    "https://en.wikipedia.org/wiki/Lift_(force)",
    "https://en.wikipedia.org/wiki/Helicopter",
    "https://en.wikipedia.org/wiki/Airbus_A380",
    "https://en.wikipedia.org/wiki/Airbus_A330",
    "https://en.wikipedia.org/wiki/Airbus_A320_family",
    "https://en.wikipedia.org/wiki/Airbus_A340",
    "https://en.wikipedia.org/wiki/Airbus_A220",
    "https://en.wikipedia.org/wiki/Airbus_A350_XWB",
    "https://en.wikipedia.org/wiki/Airbus_A321",
    "https://en.wikipedia.org/wiki/Airbus_A310",
    "https://en.wikipedia.org/wiki/Airbus_Helicopters",
    "https://en.wikipedia.org/wiki/Airbus_Beluga",
    "https://en.wikipedia.org/wiki/Airbus_A318"
]
datadict={
    'title':[],
    'string_para':[]
}
for link in links:
    reponse=requests.get(link)
    src=reponse.content
    soup=BeautifulSoup(src,'html')
    p_tags=soup.find_all('p')
    lines=[' '.join(re.findall(r'[A-Z a-z ^\[\d]+',line.text)) for line in p_tags if len(line)>10]
    cleaned_lines=[]
    for line in lines:
        cleaned_lines.append(' '.join([word for word in line.split(' ') if len(word)>2]))
    datadict['title'].append(" ".join(link.split('/')[-1].split("_")))
    datadict['string_para'].append(str(cleaned_lines))
    print(len(datadict['string_para']))

#print(datadict)
oo=pd.DataFrame(datadict)
oo.to_csv('airbus.csv')