import { CssBaseline, Grid } from "@material-ui/core";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import { getPlacesData } from "./api/index";
import { useEffect, useState } from "react";

const App = () => {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bound, setBound] = useState(null);

  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(({coords:{latitude,longitude}})=>{
      setCoordinates({lat:latitude,lng:longitude})
    })
  },[])


  useEffect(() => {
    console.log(coordinates, bound, "coordinates and bounds");
    getPlacesData().then((data) => setPlaces(data));
  }, [coordinates, bound]);

  console.log(places);

  return (
    <div>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            setBound={setBound}
            coordinates={coordinates}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
