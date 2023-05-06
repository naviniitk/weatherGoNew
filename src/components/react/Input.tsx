import axios from "axios";
import React, { FormEvent, useMemo, useState } from "react";
import "../styles/styles.scss";

interface Props {
  setWeatherData: (val: any) => void;
}

const Input: React.FC<Props> = ({ setWeatherData }: Props) => {
  const [error, setError] = useState("");
  const [cityName, setCityName] = useState("");

  const fetchCityData = async (text: string) => {
    try {
      const res = await axios.get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${text}.json?access_token=${
          import.meta.env.PUBLIC_MAP_API_KEY
        }&cachebuster=1625641871908&autocomplete=true&types=place`
      );
      return res.data;
    } catch (err) {
      setError(err.message);
      return { error: "Unable to retrieve places" };
    }
  };

  const handleSubmit = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    try {
      event.preventDefault();
      const city = await fetchCityData(cityName);

      if (!city.features) {
        setError("Please enter correct city name!!!");
        return;
      }
      const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${
        city.features[0].geometry.coordinates[1]
      }&lon=${city.features[0].geometry.coordinates[0]}&exclude={part}&appid=${
        import.meta.env.PUBLIC_WEATHER_API_KEY
      }`;

      const response = await axios.get(url);
      setError("");
      setWeatherData(response.data);
    } catch (e) {
      setError(e.message);
    }
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setCityName(event.target.value);
  };

  const handleReset = () => {
    setCityName("");
  };

  return (
    <form className="card card--accent">
      <label className="input">
        <input
          list="places"
          className="input__field"
          type="text"
          placeholder=" "
          value={cityName}
          onChange={handleChange}
          autoComplete="off"
          autoFocus
        />
        <span className="input__label">Enter City</span>
      </label>
      {error && <span className="error">{error}</span>}

      <div className="button-group">
        <button type="submit" onClick={(e) => handleSubmit(e)}>
          Send
        </button>
        <button type="reset" onClick={handleReset}>
          Reset
        </button>
      </div>
    </form>
  );
};

export default Input;
