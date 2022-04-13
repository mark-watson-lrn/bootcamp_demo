const Learnosity = require('learnosity-sdk-nodejs/index'); // Include Learnosity SDK constructor
const config = require('learnosity-sdk-nodejs/docs/quickstart/config'); // Load consumer key & secret from config.js
const uuid = require('uuid'); // Load the UUID library
const path = require("path");
const express = require("express");
require("dotenv").config();
const enforce = require("express-sslify");

const PORT = process.env.PORT || 3001;

const app = express();

app.set('view engine', 'ejs');       // Set EJS as our templating language

// - - - - - - Learnosity server-side configuration - - - - - - //

// Generate the user ID and session ID as UUIDs, set the web server domain.
const user_id = uuid.v4();
const session_id = uuid.v4();
const domain = 'localhost';

app.get('/', function (req, res) { 
    const learnositySdk = new Learnosity(); // Instantiate the SDK
    // Items API configuration parameters.
    const request = learnositySdk.init(
        'items',                              // Select Items API
        // Consumer key and consumer secret are the public & private security keys required to access Learnosity APIs and data. 
        // These keys grant access to Learnosity's public demos account. Learnosity will provide keys for your own account.
        {
            consumer_key: config.consumerKey, // Load key from config.js
            domain: domain                   // Set the domain (from line 20)
        },
        config.consumerSecret,                // Load secret from config.js
        {
            // Unique student identifier, a UUID generated on line 18.
            user_id: user_id,

            // A reference of the Activity to retrieve from the Item bank, defining which 
            // Items will be served in this assessment.
            //  quickstart_examples_activity_template_001
            // b149b179-3f3e-43d7-8c0b-bc06c752d9cf
            activity_template_id: 'lrn-bootcamp-binoy-watson',
            // Selects a rendering mode, `assess` type is a "standalone" mode (loading a complete 
            // assessment player for navigation, VS `inline`, for embedded).
            // Uniquely identifies this specific assessment attempt session for  save/resume, data 
            // retrieval and reporting purposes. A UUID generated on line 18.
            session_id: session_id,
            // Used in data retrieval and reporting to compare results with other users 
            // submitting the same assessment.
            activity_id: 'quickstart_examples_activity_001',
            // Selects a rendering mode, `assess` type is a "standalone" mode (loading a complete 
            // assessment player for navigation, VS `inline`, for embedded).
            rendering_type: 'assess',
            // Selects the context for the student response storage `submit_practice` mode means 
            // student response storage in the Learnosity cloud, for grading.
            type: 'submit_practice',
            // Human-friendly display name to be shown in reporting.
            name: 'Items API Quickstart',
            // Can be set to `initial, `resume` or `review`. Optional. Default = `initial`.
            state: 'initial'
        }
    );
    
    // EJS - Render the page and request /views/standalone.
    res.render('standalone-assessment', { request }); 
});



// // if in production then serve client/build as static assets
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "../client/build")));
// }

// // All other GET requests not handled before will return our React app
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

// required for Lighthouse PWA test app to be installable.
app.use(enforce.HTTPS({ trustProtoHeader: true }));

app.listen(PORT, () => {
  console.log(
    `\n------------------------\n\nServer is running:   http://localhost:${PORT}      👀\n` +
      `\n------------------------\n`
  );
});
