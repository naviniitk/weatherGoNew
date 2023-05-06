import axios from "axios";
import React, { FormEvent, useState } from "react";
import "../styles/styles.scss";

interface Props {
  setWeatherData: (val: any) => void;
}

const Input: React.FC<Props> = ({ setWeatherData }: Props) => {
  const [city, setCity] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    try {
      event.preventDefault();
      const url =
        "http://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&APPID=a631e1e5b48cd37e87f8123460fe88e6";

      const response = await axios.get(url);
      setError("");
      setWeatherData(response.data);
    } catch (e) {
      setError(e.message);
    }
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  const handleReset = () => {
    setCity("");
  };

  return (
    <form className="card card--accent">
      <label className="input">
        <input
          className="input__field"
          type="text"
          placeholder=" "
          value={city}
          onChange={handleChange}
        />
        <span className="input__label">Enter City</span>
      </label>
      {error && <span className="error">error</span>}

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
