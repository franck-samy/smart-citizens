// axios.get("/api").then((something) => {
//   // document.location.reload();
//   console.log("Something", something);
// });
// const Question = require('./Questions.model');
// const mongoose = require('mongoose');
// const MONGO_URI = "mongodb://localhost/newproject";

// mongoose.connect(MONGO_URI, {
//   useCreateIndex: true,
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }).then(() => {
//   console.log("connected to DB");
// }).then(data => {
//   console.log(data);
//   mongoose.connection.close();
// }).catch(err => {
//   console.log(err)
// });

mapboxgl.accessToken =
  "pk.eyJ1IjoiZnJhbmNrc2FteSIsImEiOiJja2hydDc2azIxeHgwMzJteGlidGdyMzQ1In0.xLOOTB1OXsyw2OH9Y42oPQ";

navigator.geolocation.getCurrentPosition(onSuccess);

function onSuccess(position) {
  console.log("position:", position);
  drawMap([position.coords.longitude, position.coords.latitude]);
}

function drawMap(userCenter) {
  var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: userCenter,
    zoom: 17,
  });

  console.log("center", userCenter);
  //  const userPosArr = [center.position.coords.longtitude, center.position.coords.latitude];
  new mapboxgl.Marker().setLngLat(userCenter).addTo(map);

  map.addControl(new mapboxgl.NavigationControl());

  geojson.features.forEach((coordinates) => {
    let currentPosition = new mapboxgl.LngLat(userCenter[0], userCenter[1]);
    let first = coordinates.geometry.coordinates[0];
    let second = coordinates.geometry.coordinates[1];
    let positionOfOurPlaces = new mapboxgl.LngLat(first, second);
    const dist =
      Math.round(currentPosition.distanceTo(positionOfOurPlaces)) + " meters";
    console.log("DISTANCE", dist);

    //button to reload page --> refresh position
    const buttonRefresh = document.getElementById("refresh");
    buttonRefresh.addEventListener("click", (event) => {
      document.location.reload();
    });

    if (dist <= 100) {
      console.log("Question !!!");
      // True
      document.getElementById("box").style.visibility = "visible";
      document.getElementById("box").innerHTML = "<p>Question : ????</p>";
    }
    //document.getElementById('box').style.visibility = "visible";
    //document.getElementById('skip').style.visibility = "visible";
    //document.getElementById('box').innerHTML = "<p>Sorry, you're too far. Keep walking.</p>";

    // test ASk box --> Questions
    document.getElementById("ask").style.visibility = "visible";
    const firstOption = document.getElementById("options").childNodes[1]
      .childNodes[1].innerHTML;
    const answer = document.getElementById("correctAns").innerHTML;
    const optionsLi = document.getElementById("options").childNodes[1];

    optionsLi.addEventListener("click", (evt) => {
      if (evt.path[0].innerHTML === answer) {
        console.log("Right answer");
        axios
          .post("/api", { points: 5 })
          .then((serverResponse) => {
            document.location.reload();
            // console.log(serverResponse);
          })
          .catch((err) => {
            console.log("Error", err);
          });
      } else {
        console.log("Wrong");
      }
    });
    /*
    return User.findByIdAndUpdate(score, ).then(data => {
      console.log(data);
      mongoose.connection.close();
    }).catch(err => {
      console.log(err)
    });
    */
    // userScore ++

    // document.getElementById('ask').innerHTML = "<p>Question : ????</p>";

    // End Ask Box test

    //button to close false message
    const button = document.getElementById("skip");
    button.addEventListener("click", (event) => {
      document.getElementById("box").style.visibility = "hidden";
      document.getElementById("skip").style.visibility = "hidden";
    });
  });

  geojson.features.forEach((singleMarker) => {
    const el = document.createElement("div");
    el.className = "marker";
    new mapboxgl.Marker(el)
      .setLngLat(singleMarker.geometry.coordinates)
      .addTo(map);
  });
}

//const user = new mapboxgl.LngLat(center);
//const questionSpot = new mapboxgl.LngLat(geojson.features[0].geometry.coordinates[0], geojson.features[0].geometry.coordinates[1]);

//console.log("USER", center);

var geojson = {
  type: "FeatureCollection",
  features: [
    {
      name: "question1",
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [7.2603533, 43.702179],
      },
      properties: {
        title: "Question spot",
        description: "Nice, France",
      },
    },
  ],
};

// Neuschzqnstein
// Brandenburger Tor
