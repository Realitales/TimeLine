const fs = require("fs");
const webpush = require("web-push");
const express = require("express");
const request = require("request");

const EMAIL = "202110016@feualabang.edu.ph";

if (!fs.existsSync("priv")) fs.mkdirSync("priv");

let tempKeys;
if (fs.existsSync("priv/vapid_keys.json")) {
    tempKeys = JSON.parse(fs.readFileSync("priv/vapid_keys.json"));
} else {
    tempKeys = webpush.generateVAPIDKeys();
    fs.writeFileSync("priv/vapid_keys.json", JSON.stringify({
        publicKey: tempKeys.publicKey,
        privateKey: tempKeys.privateKey,
    }));
}
const vapidKeys = tempKeys;

// we don't have one... webpush.setGCMAPIKey('<Your GCM API Key Here>');
webpush.setVapidDetails(
    `mailto:${EMAIL}`,
    vapidKeys.publicKey,
    vapidKeys.privateKey
);

const app = express();
app.use(require('body-parser').json());

const testData = {
    title: "Testing",
    body: "TEST TEST TEST",
    icon: "https://cdn.discordapp.com/attachments/938049053579706408/950369957957472276/Logo1_Colored.png"
}

let subscription; // todo: SAVE THESE SOMEWHERE!!

app.post("/subscribe", (req, res) => {
    subscription = req.body
    console.log(req.body)
    res.sendStatus(200)
    // TODO: SEPARATE THIS NOTIFICATION SENDER SOMEWHERE ELSE...
    //       PREFERRABLY A JOB THAT POSTS NOTIFICATIONS ONCE IN A WHILE
    webpush.sendNotification(subscription, JSON.stringify(testData)).catch(error => {
        console.error(error.stack);
    });
});

app.post("/test_notif", (req, res) => {
    res.sendStatus(200)
    // TODO: SEPARATE THIS NOTIFICATION SENDER SOMEWHERE ELSE...
    //       PREFERRABLY A JOB THAT POSTS NOTIFICATIONS ONCE IN A WHILE
    webpush.sendNotification(subscription, JSON.stringify(testData)).catch(error => {
        console.error(error.stack);
    });
});

app.delete("/unsubscribe", (req, res) => {
    subscription = null
    res.sendStatus(200)
});

app.use(express.static("static"));

app.listen(3000);