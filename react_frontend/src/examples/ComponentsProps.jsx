import React from "react";
import InstagramCardProps from "./StatesProps";
// despues a esto añadirle props: foto, titulo, descripcion, initialFollowing
export default function ComponentsProps() {
  return (
    <>
      <InstagramCardProps
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVPUJIXEC0bGuIePlPJDOuy2Kg16f97hgs1g&s"
        title="Boca"
        description="El mas grande"
        isFollowing={true}
      />
      <InstagramCardProps
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3z9Mj0l4iNZ5YiC0N6_2eaEHAT6mVNzasJA&s"
        title="River"
        description="gallinas"
        isFollowing={false}
      />
      <InstagramCardProps
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Escudo_del_Club_Atl%C3%A9tico_V%C3%A9lez_Sarsfield.svg/140px-Escudo_del_Club_Atl%C3%A9tico_V%C3%A9lez_Sarsfield.svg.png"
        title="Velez"
        description="5 hinchas tienen nomas"
        isFollowing={false}
      />
    </>
  );
}
