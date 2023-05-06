import React from "react";

interface Props {
  children: React.ReactNode;
}

const WeatherCard = ({ children }: Props) => {
  return (
    <li className="weather-card-list">
      <div className="weather-card">{children}</div>
    </li>
  );
};

export default WeatherCard;
