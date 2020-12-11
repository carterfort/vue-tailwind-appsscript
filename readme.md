# Tailwind + Vue + Apps Script Template

Build up a front-end that you can deploy to a Google Apps Script app. Use Sheets as a data-store! Take advantage of the Google Apps Script components! Build UIs with the greatest of ease!

## Installation

1. Clone the git repo
1. Install clasp
1. Install dependencies with `yarn`

## Local Development

`yarn local` will boot up a webpack server at `localhost:9090`. I've set the default to open Firefox, so you might want to change that to Chrome (or remove the string entirely to use your default browser)

It uses live reload, so as you make and save changes they will update automatically

## Deploy

1. Go to `script.google.com` to find your Script ID (create a new one or get an existing one)
    1. The script ID is the long string in the URL when you've opened the editor
    2. `https://script.google.com/d/{SCRIPT_ID}/edit`
1. Create a `.clasp.json` file in the base directory with the following contents:

> { "scriptId" : "SCRIPT_ID_FROM_SCRIPT_URL" }

## Testing the Back End

Because you're going to be using Apps Script as your back-end, you're going to want a way to test out the functionality that you're buidling up. I recommend creating a new apps script app where you write out the acutal functions that will run, then copy those functions to your the `server/src/lib` file. Don't forget to export all of your functions at the bottom!
