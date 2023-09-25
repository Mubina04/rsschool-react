import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import SwiperCore from "swiper";
import styles from "./styles.module.css";
import { useRef, useState, useEffect, FC } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { options } from "./config";
import SwiperItem from "./swiperItem";
import { Navigation } from "swiper/modules";

SwiperCore.use([Navigation])
const SwiperComponent: FC<{ data?: any }> = ({ data }) => {
	const swiperRef = useRef<SwiperType | null>(null);
	const [selectedItem, setSelectedItem] = useState<any>({});
	const [open, setOpen] = useState<boolean>(false);
	const [news, setNews] = useState([]);
	useEffect(() => {
		setNews(data);
	}, [data]);
	const handlePrev = () => {
		swiperRef.current?.slidePrev();
	  };

	  const handleNext = () => {
		swiperRef.current?.slideNext();
	  };

	return (
		<div className={styles.containerWrapper}>

			<Swiper
				{...options}
				onBeforeInit={(swiper: SwiperType) => {
					swiperRef.current = swiper;
				}}

			>
				<div className={styles.wrapper}>
					{news?.map((swiperItem, index) => {
						return (
							<SwiperSlide className={styles.swiperItem} key={index}>
								<SwiperItem
									index={index}
									swiperItem={swiperItem}
									setSelectedItem={setSelectedItem}
									setOpen={setOpen}
								/>
							</SwiperSlide>
						);
					})}
				</div>
				<div onClick={handleNext} className={"swiper-button-next"}></div>
				<div onClick={handlePrev} className={"swiper-button-prev"}></div>
			</Swiper>

		</div>
	);
};
export default SwiperComponent;