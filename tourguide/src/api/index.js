import axios from "axios";

const Url = "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

const options = {
  params: {
    bl_latitude: "11.847676",
    tr_latitude: "12.838442",
    bl_longitude: "109.095887",
    tr_longitude: "109.149359",
  },
  headers: {
    "X-RapidAPI-Key": "7f8200bda6mshe3296ea5e968de0p12bd00jsnc8bd8c68192f",
    "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
  },
};

export const getPlacesData = async () => {
  try {
    const {data : {data}} = await axios.get(Url,options);
    
    return data

  } catch (error) {
    console.log(error)
  }
};
