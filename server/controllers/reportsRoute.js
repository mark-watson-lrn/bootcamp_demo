const router = require("express").Router();
const Learnosity = require("learnosity-sdk-nodejs/index"); // Include Learnosity SDK constructor
const uuid = require("uuid"); // Load the UUID library

let domain = "localhost";
if (process.env.NODE_ENV === "production") {
  domain = "proteins-lrn.herokuapp.com";
} 

router.get("/", async (req, res) => {
  try {
    const { user_id, session_id } = req.query;

    // const request = ({message: "Still working on it."});

    const request = {

    "security": {
      "consumer_key": process.env.CONSUMER_KEY,
      "domain": domain,
      "user_id": user_id
  },
  "request": {
    "user_id": user_id,
    "reports": [
      {
        "id": "learnosity_report",
        "type": "lastscore-by-activity-by-user",
        "scoring_type": "partial",
        "ui": "numeric",
        "display_time_spent": true,
        "users": [
            {"id": user_id, "name": "Quizzical_1"}
        ],
        "activities": [
            {"id": "lrn-bootcamp-binoy-watson_001", "name": "Binoy/Watson Demo"},
        ]
      }
    ],
    "label_bundle": {
        "activity": "Activity",
    },
  // https://reference.learnosity.com/releaselogs
  "configuration": {
      "questionsApiVersion": "v2022.1.LTS", 
      "itemsApiVersion": "v2022.1.LTS" 
    }
  }
}
    res.render("standalone-reports", { request });

  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
