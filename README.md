# blockchainbib2-0

Improved version of the Blocks & Chains Bibliography from https://github.com/kernoelpanic/blockchainbib

### Current version provides:
+ *Python3.6* Flask backend server
  + Parsing blockchain.bib using python bibtexparser (https://github.com/sciunto-org/python-bibtexparser) 
  + Serving resulting JSON file via REST API
 + *AngularJS 1.5* frontend
   + Basic functionality as in original version
     + List all papers
     + Order by title, author, year
     + Link to PDF
     + Retrieve .bib entry
   + Search by X (title, author, bibtexID, year, ... basically everything)
   + Improved UI
   
   
 ### Set-up / Run
 
 #### Install
 * Install python 3.6
 * Install pip: ```sudo apt-get install python3-pip```
 * Install flask and other dependencies: ```sudo pip install flask flask_cors bibtexparser```
 
 ##### Run
 * Go to root folder
 * Run: ```python3``` or ```python app.py```
 
 ### Next steps
 
 + Authentication via gitlab
 + Submit new paper
   + Admin interface (initially)
   + Anonymous user proposal (optional - perhaps github pull request is better for this)
 + Add tags
 + Add comments
 + Paging

### Contact

Alexei Zamyatin (a.zamyatin@imperial.ac.uk)

Credits for original blockchainbib go to Aljosha Judmayer (ajudmayer@sba-research.org)

This Blockchain Bibliography is maintained by [SBA Research](https://www.blockchain.sba-research.org/) and the [Imperial College London Centre for Cryptocurrency Research and Engieneering](https://www.imperial.ac.uk/cryptocurrency) (IC3RE)
