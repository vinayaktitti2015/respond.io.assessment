npm & Cypress Commands:

# npm commands: https://nodejs.org/en/download/
1. node --version // should be > 8.0
2. npm --version
3. npm update
4. npm install 

# project level commands
1. npm init // to create package.json file and set config manually
2. npm init --yes // to create package.json file and set config automatically
3. npm install // to install all packages in a project
4. npm i // shortcut to install

# Cypress Installation:
1. npm install cypress --save-dev // to install cypress as dev-dependency
2. npm install cypress // to install cypress as dependency
3. npm install cypress@10.2.0 // to install specific cypress version

#To install cypress globally
1. npm install cypress -g

# To Open testrunner:
1. npx cypress open
 or 
2. ./node_modules/.bin/cypress open // long way with the full path
or 
3. $(npm bin)/cypress open // shorcut using npm bin

# remove all node_modules
1. rm -rf node_modules
2. npm install // to re-install

Test Execution:

# pre-requisite
open terminal
1. run cmmd: npm install 

# Open testrunner - 
open terminal
1. run cmmd: npx cypress open
2. choose browser
3. click spec file to execute

# cmmd line -
1. open terminal
2. run cmmd: npm run uitests  
or
npm run apitests