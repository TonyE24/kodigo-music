import React from "react";

function PlaylistCard({ title, description, img, onPlay }) {
  return (
    <div className="card h-100 shadow-sm">
      <img src={img} className="card-img-top" alt={title} style={{height: '180px', objectFit: 'cover'}} />
      <div className="card-body">
        <h5 className="card-title text-success">{title}</h5>
        <p className="card-text">{description}</p>
        <button className="btn btn-outline-success w-100" onClick={onPlay}>Escuchar</button>
      </div>
    </div>
  );
}

export default PlaylistCard;
