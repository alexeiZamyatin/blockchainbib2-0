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

        with open('data/blockchainbib.json', 'w') as jsonfile:
            json.dump(blockchainbib.entries_dict, jsonfile)
            if(verbose == True):
                print("Successfully updated " + JSON_FILE)

def readAllBibs():
    try:
        blockchainbib = json.load(open(JSON_FILE))
        return blockchainbib
    except (Exception):
        return "Error: could not read " + JSON_FILE
