import React from "react";

export default function Card(props) {
  /* data info:
    title, location, googleMapsUrl, startDate, endDate, description, imageUrl */
  return (
    <div className="card">
      <img src={props.imageUrl} className="card--image" />
      <img src="/assets/images/pin.png" alt="location pin" className="pin" />
      <p className="card--location">{props.location}</p>
      <a href={props.googleMapsUrl}>View on Google Maps</a>
      <h2 className="card--title">{props.title}</h2>
      <p className="card--dates">
        {props.startDate} - {props.endDate}
      </p>
      <p className="description">{props.description}</p>
    </div>
  );
}
