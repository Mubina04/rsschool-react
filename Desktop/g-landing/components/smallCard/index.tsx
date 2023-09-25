import React, { FC, useEffect, useRef, useState } from 'react'
import CountUp from 'react-countup';
interface ISmallCard {
  title_num: number;
  title?: string;
  source_img?: string;
  title_img?: string;
}

const SmallCard: FC<ISmallCard> = ({ title_num, title, source_img, title_img }) => {
  const [startCounter, setStartCounter] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const options = {
      threshold: 0
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          setStartCounter(true);
          observer.unobserve(entry.target);
        }, 500)
      }
    }, options);

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className='shadow-md shadow-indigo-400 bg-white rounded-[20px] w-full sm:w-2/5 lg:w-[285px] py-10 pl-[38px] pr-8 text-[#1C1F35] counter-section'>
      <div className="card-header flex justify-between items-center">
        {startCounter ? (
          <span className='text-4xl font-bold tracking-[1.62px]'>
            <CountUp start={0} end={title_num} duration={8} useGrouping={false} />+
          </span>
        ) : (
          <span className="text-2xl font-bold tracking-[1.62px]">0+</span>
        )}
        <img src={source_img} alt={title_img} className='w-9' />
      </div>
      <p className="card-title mt-4 tracking-[0.72px]">{title}</p>
    </div>
  );
};

export default SmallCard

