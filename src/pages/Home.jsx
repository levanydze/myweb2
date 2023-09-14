import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import data from "../imgData.json";
import { AnimatePresence, motion } from "framer-motion";
import Modal from "../components/Modal";
import Records from "../records.json";
import { Link, useNavigate } from "react-router-dom";
import Details from "../components/Details";

function Home({ category, title }) {
  //use states
  const navigate = useNavigate();
  const [filteredPhotos, setFilteredPhotos] = useState([]);
  const [selectedImg, setSelectedImg] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const nextImage = () => {
    const nextIndex = (currentImgIndex + 1) % filteredPhotos.length;
    setSelectedImg(filteredPhotos[nextIndex].image);
    setCurrentImgIndex(nextIndex);
  };

  const prevImage = () => {
    const prevIndex =
      (currentImgIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
    setSelectedImg(filteredPhotos[prevIndex].image);
    setCurrentImgIndex(prevIndex);
  };
  const thisImage = (index) => {
    setCurrentImgIndex(index);
  };

  useEffect(() => {
    const photosOfCategory = data.filter((photo) =>
      photo.tags.includes(category)
    );
    setFilteredPhotos(photosOfCategory);
  }, [category]);

  return (
    <CONTAINER>
      <WRAP>
        <h2 className="text-lighter text-xl pb-10 ">{title}</h2>
        <MOTION layout>
          <AnimatePresence>
            {filteredPhotos &&
              filteredPhotos.map((photo, index) => (
                <CARD
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  key={photo.id}
                  transition={{ duration: 0.3 }}
                >
                  {/* <Link to={`/${category}/${photo.id}`}> */}
                  <div
                    className="img-overlay "
                    onClick={() => {
                      thisImage(index);
                      setSelectedImg(photo.image);
                      setModalOpen(true);
                    }}
                  ></div>
                  <img src={photo.icon} alt={photo.title} />
                  {/* </Link> */}
                </CARD>
              ))}
          </AnimatePresence>
        </MOTION>

        <div className={!modalOpen ? "modal-toggle" : ""}>
          {modalOpen && selectedImg && (
            <Modal
              category={category} // Pass the category parameter
              setSelectedImg={setSelectedImg}
              selectedImg={selectedImg}
              setModalOpen={setModalOpen}
              modalOpen={modalOpen}
              next={nextImage}
              prev={prevImage}
              onClick={() => {
                setSelectedImg(null); // Reset selected image
                setCurrentImgIndex(0); // Reset current image index
                setModalOpen(!modalOpen);
              }}
            />
          )}
        </div>
      </WRAP>
    </CONTAINER>
  );
}

export default Home;

const CONTAINER = styled.div`
  background-color: var(--dark);
  .modal-toggle {
    display: none;
  }
`;

const WRAP = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  width: 100%;
  text-align: center;
  padding: 1rem;

  .next-photo {
    z-index: 21112;
    color: red;
    position: fixed;
    top: 0;
    cursor: pointer;
  }
  .prev-photo {
    z-index: 21112;
    color: #1100ff;
    position: fixed;
    top: 0;
    left: 20rem;
    cursor: pointer;
  }

  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }

  @media (max-width: 720px) {
  }
  .space {
    width: 100%;
    height: 1rem;
  }
`;

const MOTION = styled(motion.div)`
  display: flex;
  justify-content: center;
`;

const CARD = styled(motion.div)`
  position: relative;
  .img-overlay {
    cursor: pointer;
    position: absolute;
    z-index: 1;
    height: 100%;
    width: 100%;
    opacity: 0.5;
    transition: all 0.6s;
    &:hover {
      background-color: #000000b5;
    }
  }
  height: 300px;
  width: 500px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
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
