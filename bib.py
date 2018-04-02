import bibtexparser
from bibtexparser.bparser import BibTexParser
import json
from constants import *

'''
Parses the blockchaibib/blockchain.bib file and dumps contents 
in a json file for performance (parsing required only when changes made)
'''
def parseBib(verbose):
    with open(BIBTEXT_FILE) as bibtex_file:
        if(verbose == True):
            print("Parsing " + BIBTEXT_FILE + " ... ")
        
        blockchainbib = bibtexparser.load(bibtex_file)

        if(verbose == True):
            print("Parsed " + BIBTEXT_FILE + " without errors. Updating " + JSON_FILE + " ... ")


        blockchainbib_dict = blockchainbib.entries_dict

        bib_entries = []

        for key, data in blockchainbib_dict.items():
            
            publish_info = "Miscellaneous"

            if("journal" in data):
                publish_info = data["journal"]
                if("volume" in data):
                    publish_info += " Vol. " + data["volume"]
                if("pages" in data):
                    publish_info += ", p. " + data["pages"]

            if("booktitle" in data):
                publish_info += " " + data["booktitle"]

            if("publisher" in data):
                publish_info += " " + data["publisher"]

            if("institution" in data):
                publish_info += " " + data["institution"]

            if("school" in data):
                publish_info += " " + data["school"]

            if("organization" in data):
                publish_info += " " + data["organization"]        
        
            data["publish_info"] = publish_info

            bib_entries.append(data)



        with open('data/blockchainbib.json', 'w') as jsonfile:
            json.dump(bib_entries, jsonfile)
            if(verbose == True):
                print("Successfully updated " + JSON_FILE)

def readJsonBib():
    try:
        with open(JSON_FILE, 'r') as jsonfile:
            blockchainbib = json.load(jsonfile)
            return blockchainbib
    except (Exception):
        return "Error: could not read " + JSON_FILE


def readBibtex():
    print("reading file")
    try:
        with open(BIBTEXT_FILE, 'r') as bibfile:
            blockchainbib = bibfile.read()
            return blockchainbib
    except (Exception):
        return "Error: could not read " + BIBTEXT_FILE
