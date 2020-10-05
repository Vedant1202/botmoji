# BotMoji


A chatbot with bitmoji reactions. Implemented in [React](https://reactjs.org/).


### The deployed version can be found at [BotMoji](https://vedant1202.github.io/botmoji)



## Screencasts


1. Login

![Login](https://raw.githubusercontent.com/Vedant1202/botmoji/master/screenshots/login.PNG)

2. Home Page

![](https://raw.githubusercontent.com/Vedant1202/botmoji/master/screenshots/home-default.png)

3. Hello

![](https://raw.githubusercontent.com/Vedant1202/botmoji/master/screenshots/Hello.png)

4. What's up

![](https://raw.githubusercontent.com/Vedant1202/botmoji/master/screenshots/whatsup.png)

5. Have some fun with botmoji

![](https://raw.githubusercontent.com/Vedant1202/botmoji/master/screenshots/fun.png)

6. Botmoji also understands humor!

![](https://raw.githubusercontent.com/Vedant1202/botmoji/master/screenshots/joke.png)


## Installation


### Part 1: Setup React App

This project would require [npm](https://www.npmjs.com/) and [node.js](https://nodejs.org/en/) already installed.

It is recommended to use [yarn](https://yarnpkg.com/) as a package manager. Otherwise even [npm](https://www.npmjs.com/) would do.


1. Clone the repo
```bash

git clone https://github.com/Vedant1202/botmoji.git
cd botmoji/frontend/
## Make sure to be on master branch
``` 


2. Install packages
```bash
yarn
```
Or if you have npm then
```bash
npm install
```

3. Start the server
```bash
yarn start
```
Or if you have npm
```bash
npm start
```

4. Make sure the Rasa HTTP server url is correct at [config.js](https://github.com/Vedant1202/botmoji/blob/master/frontend/src/config/config.js). By default it is `http://localhost:5005`

## Installation

### Part 2: Setup Rasa server

This project would require [Python (>=3.6)](https://www.python.org/) already installed. It is recommended to use [venv](https://docs.python.org/3/tutorial/venv.html) as a enviroment manager.

This tutorial follows the installation on a **Linux (Ubuntu)** distribution. For other operating systems, follow this [link](https://rasa.com/docs/rasa/installation#1-python-environment-setup).

1. Clone the repo (if you have'nt already)
```bash

git clone https://github.com/Vedant1202/botmoji.git
cd botmoji/rasa-smalltalk/
```

2. Update packages

```bash
sudo apt update
sudo apt install python3-dev python3-pip
```

3. Create a virtual environment
```bash
python3 -m venv ./venv
```

4. Activate the virtual environment
```bash
source ./venv/bin/activate
```

5. Update pip
```bash
pip3 install -U pip
```

6. Install rasa
```bash
pip3 install rasa
```

7. Run rasa server
```bash
rasa run --enable-api --cors "*"
```

### Part 3: SnapKit SDK

You need to create account on [Snapkit Developer Portal](https://kit.snapchat.com/) and then edit the respective parts at [index.html](https://github.com/Vedant1202/botmoji/blob/234e8d0d8ed40b19cb122bbccdf4278fb5d84119/frontend/public/index.html#L46).

### For a reference of packages installed, I've also listed a [requirements.txt](https://github.com/Vedant1202/botmoji/blob/master/rasa-smalltalk/requirements.txt) file. 


This project is licensed with the [BSD-3 License](https://opensource.org/licenses/BSD-3-Clause).
