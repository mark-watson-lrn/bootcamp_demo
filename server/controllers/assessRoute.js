const router = require("express").Router();
const Learnosity = require("learnosity-sdk-nodejs/index"); // Include Learnosity SDK constructor
const uuid = require("uuid"); // Load the UUID library


// - - - - - - Learnosity server-side configuration - - - - - - //

// Generate the user ID and session ID as UUIDs, set the web server domain.
const user_id = uuid.v4();
const session_id = uuid.v4();

let domain = "localhost";
if (process.env.NODE_ENV === "production") {
  domain = "proteins-lrn.herokuapp.com";
} 

const user_logged_in = `/reports?user_id=${user_id}&session_id=${session_id}`;

router.get("/", async (req, res) => {
  try {
    // Instantiate the SDK
    const learnositySdk = new Learnosity(); 

    // Items API configuration parameters.
    const request = await learnositySdk.init(

      // Select Items API
      "items", 
      // Consumer key and consumer secret are the public & private security keys required to access Learnosity APIs and data.
      // These keys grant access to Learnosity's public demos account. Learnosity will provide keys for your own account.
      {
        consumer_key: process.env.CONSUMER_KEY, // Load key from config.js
        domain: domain, // Set the domain (from line 20)
      },
      process.env.CONSUMER_SECRET, // Load secret from config.js
      {
        // Unique student identifier, a UUID generated on line 9.
        user_id: user_id,

        // A reference of the Activity to retrieve from the Item bank, defining which
        // Items will be served in this assessment.
        activity_template_id: "lrn-bootcamp-binoy-watson",

        // Uniquely identifies this specific assessment attempt session for  save/resume, data
        // retrieval and reporting purposes. A UUID generated on line 18.
        session_id: session_id,

        // Used in data retrieval and reporting to compare results with other users
        // submitting the same assessment.
        activity_id: "lrn-bootcamp-binoy-watson_001",

        // Selects a rendering mode, `assess` type is a "standalone" mode (loading a complete
        // assessment player for navigation, VS `inline`, for embedded).
        rendering_type: "assess",
        // Selects the context for the student response storage `submit_practice` mode means
        // student response storage in the Learnosity cloud, for grading.
        type: "submit_practice",
        // Human-friendly display name to be shown in reporting.
        name: "binoy and watson Learnosity Bootcamp Demo",
        // Can be set to `initial, `resume` or `review`. Optional. Default = `initial`.
        state: "initial",
        config: {
          configuration: {
            "onsubmit_redirect_url": user_logged_in
          }
      }
    }
    );

    // EJS - Render the page and request /views/standalone.
    res.render("standalone-assessment", { request });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
