import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function InstagramCardProps({
  isFollowing,
  src,
  title,
  description,
}) {
  const [siguiendo, setSiguiendo] = useState(isFollowing);

  const toggleSeguir = () => {
    setSiguiendo(!siguiendo);
  };

  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body d-flex align-items-center">
        <img
          src={src}
          alt="Perfil"
          className="rounded-circle mr-3"
          style={{ width: "50px", height: "50px" }}
        />
        <div className="user-info">
          <h5 className="card-title mb-1">{title}</h5>
          <p className="card-text text-muted mb-2">{description}</p>
        </div>
      </div>
      <button
        className={`btn btn-block ${
          siguiendo ? "btn-secondary" : "btn-primary"
        }`}
        onClick={toggleSeguir}
      >
        {siguiendo ? "Siguiendo" : "Seguir"}
      </button>
    </div>
  );
}
