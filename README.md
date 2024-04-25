# Grocery Compass
![Static Badge](https://img.shields.io/badge/react-blue?style=for-the-badge&logo=react&logoColor=white&link=https%3A%2F%2Freact.dev)

## About
Grocery Compass is a mobile application that helps you save money and time on your grocery trips. Based on your list of grocery items, Grocery Compass considers location, item price, and availability to print out a list of the cheapest items for you to pick from. Our goal is to help grocery shoppers save money and time.

This project was created in my CSE 403: Software Engineering class in a group of six, in a seven-week period. The assignment was to create any type of application.

## Features
- Ability to gather ingredients and retrieve the price and locations of each item
- User-friendly and easy-to-use interface

## Repo Layout
- ```.github``` constains yml file for CI
- ```grocery-compass``` contains the directories and files for the frontend.
- ```backend``` contains the directories and files for our custom API and web scrapers.
- ```reports``` contains our weekly reports.
- ```tests``` contains files for testing

## How to run the mobile application
1. Download the Expo Go app on an iOS device.
2. Clone the repo.
3. `cd` into `grocery-compass`
4. Execute `npm i`
5. Execute `npx expo start`
6. Scan the QR code that shows up in the terminal with your camera and click the link to Expo Go

## How to startup server
1. To get the server running, first use "git pull" in the terminal to get the latest version
   of the source code.
2. cd into `backend/API`, execute "npm install" in order to create the dependencies needed to run
   the program successfully.
3. Execute `node index.js` to start your server.
4. Grocery Compass server should now be running!

## CI/Testing
- GitHub Actions should automatically run tests for WebScraper upon a push or merge.

## Running The Tests
1. Make sure you have [python](https://www.python.org/downloads/), [pip](https://pip.pypa.io/en/stable/cli/pip_install/), [pytest](https://docs.pytest.org/en/7.1.x/getting-started.html) and [selenium](https://selenium-python.readthedocs.io/installation.html) installed
2. In the main directory (```C:\...\GroceryCompass```), execute `py -m pytest` on Windows, or `python3 -m pytest` on mac/iOS

### Adding Your Own Test
1. In order to add your own test, you just have to define a new test in ```tests\test_file.py```
2. There you can define any type of test you like, and include an assert statement at the end for the success/failure condition(s)

## Operational Use Cases
- User can retrieve the lowest priced items on their grocery list, while viewing what store those items are available at.

## Beta Version ID
The beta release version is tagged with `v1.1-beta1`

## Final Demo Version ID
The beta release version is tagged with `v1.3`

## Developers
- Cadence Lamphiear
- Adam Fuegmann
- Kevin Mason
- Daniel Emilien
- Chengjie Huang
- Nicolas Hitosis
