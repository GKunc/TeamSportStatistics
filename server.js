const path = require('path');
const express = require('express');
const { MongoClient } = require("mongodb");
const app = express();
const MY_APP_NAME = 'TeamSportStatistics';
const dist_folder = __dirname + '/dist/' + MY_APP_NAME;
const uri = process.env.MONGODB_URI;


// Serve static files
app.use(express.static(dist_folder));

// Send all requests to index.html
app.get('/', function(req, res) {
  res.sendFile(path.join(dist_folder + '/index.html'));
});

// default Heroku port
app.listen(process.env.PORT || 5000);

app.get("/api/movie", async function (req, res) {
  const client = new MongoClient(uri, { useUnifiedTopology: true });

  try {
    await client.connect();

    const database = client.db('sample_mflix');
    const collection = database.collection('movies');

    // Query for a movie that has the title 'Back to the Future'
    const query = { genres: "Comedy", poster: { $exists: true } };
    const cursor = await collection.aggregate([
      { $match: query },
      { $sample: { size: 1 } },
      { $project:
        {
          title: 1,
          fullplot: 1,
          poster: 1
        }
      }
    ]);

    const movie = await cursor.next();

    return res.json(movie);
  } catch(err) {
    console.log(err);
  }
  finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
});
