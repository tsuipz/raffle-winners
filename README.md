# Raffle Winners Site

This app is to help pick winners from a list of participants and a list of prizes by accepting two CSV files. The amount of tickets is based on for every $5 that is donated by a person, it is 1 ticket. So the amount of donations is divided by $5, rounded down, and becomes the amount of tickets for one person.

## Features

- Takes in two CSV files, one is for the prizes and one is for the list of participants.
- Picks winners randomly for all list of prizes.
- For every $5, it is 1 ticket and generates the number of tickets based on the amount.

## Run Locally

1. Clone and fork this repo
2. Run `npm install` to load dependencies
3. Run `npm start`
4. Go to http://localhost:3000/

## Technologies

- React
- Redux

## Requirements

- Two CSVs
  - Prizes CSV that contains the headers in row 1
    - Prize
  - Participants CSV that contains the headers in row 1
    - Amount
    - Employee name
    - Email
- There is examples csv for you to check out in the examples folder

## How to use

- Insert the two CSVs that you wish to use: the prizes and participants.
- Submit for results and it will output the list of winners randomly with each prizes.
