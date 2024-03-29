import { CssBaseline, Grid } from "@material-ui/core";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import { getPlacesData } from "./api/index";
import { useEffect, useState } from "react";

const App = () => {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bound, setBound] = useState({});

  const [childClicked,setChildClicked] = useState(null);
  const [isLoading,setIsLoading] = useState(false)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    setIsLoading(true)
    console.log(coordinates, bound, "coordinates and bounds");
    getPlacesData(bound?.sw, bound?.ne).then((data) => setPlaces(data));
    setIsLoading(false)
  }, [coordinates, bound]);

  // console.log(places);

  return (
    <div>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List places={places} childClicked = {childClicked}  isLoading = {isLoading} />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            setBound={setBound}
            coordinates={coordinates}
            places={places}
            setChildClicked = {setChildClicked}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
