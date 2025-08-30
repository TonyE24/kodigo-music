import React from "react";

function MusicCard({ name, img, desc, onProfile }) {
  return (
    <div className="card h-100 shadow-sm">
      <img src={img} className="card-img-top" alt={name} style={{height: '180px', objectFit: 'cover'}} />
      <div className="card-body">
        <h5 className="card-title text-dark">{name}</h5>
        <p className="card-text">{desc}</p>
        <button className="btn btn-outline-success w-100" onClick={onProfile}>Ver perfil</button>
      </div>
    </div>
  );
}

export default MusicCard;
