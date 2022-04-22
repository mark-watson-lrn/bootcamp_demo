const router = require("express").Router();

// Include Learnosity SDK constructor
const Learnosity = require("learnosity-sdk-nodejs/index"); 
const uuid = require("uuid"); 

let domain = "localhost";
if (process.env.NODE_ENV === "production") {
  domain = "proteins-lrn.herokuapp.com";
}

router.get("/", async (req, res) => {
  try {
    const { user_id, session_id } = req.query;

    // Instantiate the SDK
    const learnositySdk = new Learnosity();

    const request = await learnositySdk.init(
      // Select Reports API
      "reports",
      {
        consumer_key: process.env.CONSUMER_KEY, // Load key from config.js
        domain: domain, // Set the domain (from line 20)
      },
      process.env.CONSUMER_SECRET, // Load secret from config.js
      {
        user_id: user_id,
        reports: [
          {
            id: "learnosity_report",
            type: "lastscore-by-activity-by-user",
            scoring_type: "partial",
            ui: "numeric",
            display_time_spent: true,
            users: [{ id: user_id, name: "Quizzical_1" }],
            activities: [
              {
                id: "lrn-bootcamp-binoy-watson_001",
                name: "Binoy/Watson Demo",
              },
            ],
          },
        ],
        label_bundle: {
          activity: "Activity",
        },
        // https://reference.learnosity.com/releaselogs
        configuration: {
          questionsApiVersion: "v2022.1.LTS",
          itemsApiVersion: "v2022.1.LTS",
        },
      }
    );

    res.render("standalone-reports", { request });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
