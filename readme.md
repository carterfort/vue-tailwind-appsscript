# Tailwind + Vue + Apps Script Template

Build up a front-end that you can deploy to a Google Apps Script app. Use Sheets as a data-store! Take advantage of the Google Apps Script components! Build UIs with the greatest of ease!

## Installation

1. Clone the git repo
1. Install clasp
1. Install dependencies with `yarn`

Once you've installed locally, you'll need to do a little bit of administrivia before you can push your code to Apps Script.

I like to create an empty Apps Script script that will serve as the "container" for the app. The ID for this script will go in your `.clasp.json` file (explained more later) and is where all of your code will be pushed. This is the script that you will ultimately publish and deploy as a web app.

For development purposes, I also like to create a second "playground" script. I use this as a place to test out my Apps Script code in real-time, which I then copy/paste into my `./server/src/lib.js` file. Don't forget to export all of the method names that your Backend service will need in three places:

* `./server/src/api.js`
* `./client/src/GASBackend.js`
* `./client/src/MockBackend.js`

## Local Development

`yarn local` will boot up a webpack server at `localhost:9090`. I've set the default to open Firefox, so you might want to change that to Chrome (or remove the --open argument entirely from the `package.json` file to use your default browser)

It uses live reload, so as you make and save changes they will update automatically

## Deploy

1. Go to `script.google.com` to find your Script ID (the "container" script I mentioned earlier)
    1. The script ID is the long string in the URL when you've opened the editor
    2. `https://script.google.com/d/{SCRIPT_ID}/edit`
1. Create a `.clasp.json` file in the base directory with the following contents:

> { "scriptId" : "SCRIPT_ID_FROM_SCRIPT_URL" }

If you don't have [`clasp`](https://developers.google.com/apps-script/guides/clasp) installed, you can install it globally:

`npm install @google/clasp -g`

You'll need to log in to `clasp` once it's installed. `clasp login`

Also, if you haven't already, you'll need to enable the [Apps Script API](https://script.google.com/home/usersettings)

After the initial file push, you'll need to manually deploy the app to web. This is under the "Publish" menu in your script editor.

## Testing the Back End

Because you're going to be using Apps Script as your back-end, you're going to want a way to test out the functionality that you're buidling up. I recommend creating a new apps script app where you write out the acutal functions that will run, then copy those functions to your the `server/src/lib` file. Don't forget to export all of your functions at the bottom!
