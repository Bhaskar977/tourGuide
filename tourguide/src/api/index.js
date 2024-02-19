import axios from "axios";

const Url =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

export const getPlacesData = async (sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(Url, {
      params: {
        bl_latitude:sw.lat, 
        tr_latitude:ne.lat,
        bl_longitude:sw.lng,
        tr_longitude:ne.lng,
      },
      headers: {
        "X-RapidAPI-Key": "7f8200bda6mshe3296ea5e968de0p12bd00jsnc8bd8c68192f",
        "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
      },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};
