import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import data from "../data.json";
import { AnimatePresence, motion } from "framer-motion";

function Favorite({ category }) {
  const [filteredPhotos, setFilteredPhotos] = useState([]);

  useEffect(() => {
    const photosForCategory = data.filter((photo) =>
      photo.tags.includes(category)
    );
    setFilteredPhotos(photosForCategory);
  }, [category]);

  return (
    <WRAP>
      <MOTION layout>
        <AnimatePresence>
          <div className="space"></div>
          {filteredPhotos.map((photo) => (
            <CARD
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              key={photo.id}
              transition={{ duration: 0.3 }}
            >
              <img src={photo.image} alt={photo.title} />
            </CARD>
          ))}
        </AnimatePresence>
      </MOTION>
    </WRAP>
  );
}

export default Favorite;

const WRAP = styled.div`
  width: 100%;
  text-align: center;
  background-color: var(--dark);

  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }
  h2 {
    color: var(--light);
    font-size: 2rem;
    padding: 2rem;
  }
  @media (max-width: 720px) {
  }
  .space {
    width: 100%;
    height: 5rem;
  }
`;

const MOTION = styled(motion.div)`
  display: flex;
  justify-content: center;
`;

const CARD = styled(motion.div)`
  height: 300px;
  width: 500px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  h3 {
    font-size: 1.5rem;
    margin-top: 1rem;
    color: var(--light);
  }
  p {
    color: var(--light);
    margin-top: 0.5rem;
  }
`;
