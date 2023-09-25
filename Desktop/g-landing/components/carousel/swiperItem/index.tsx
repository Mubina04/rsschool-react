import React, { FC, useState } from "react";
import styles from "./style.module.css";
import { GoChevronDown, GoChevronUp } from "react-icons/go"

interface IProps {
  setOpen: (open: boolean) => void;
  setSelectedItem: (item: any) => void;
  swiperItem: any;
  index: number;
}

const SwiperItem: FC<IProps> = ({ swiperItem, index }) => {
  const images = ["/images/colleagues.png", "/images/meeting.png", "/images/handshake.jpg"]
  const [activeCard, setActiveCard] = useState(false)

  const handleClick = () => {
    setActiveCard(!activeCard);
  };

  return (
    <div
      className={styles.card}
    >
      <div className={styles.imageContainer}>
        <img src={images[index]} alt={swiperItem.title} />
      </div>
      <div className={styles.contentWrapper}>
        <p className={styles.title}>{swiperItem.title}</p>
        {activeCard && (
          <p className={styles.desc}>{swiperItem.description}</p>
        )}
        <button className={styles.button} type="button" onClick={handleClick}>
          {!activeCard ? <GoChevronDown /> : <GoChevronUp />}
        </button>
      </div>
    </div>
  );
};

export default SwiperItem;