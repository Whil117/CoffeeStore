/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Global, css } from "@emotion/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { slider, phrase, Category } from "../../assets/data";
import styled from "@emotion/styled";

SwiperCore.use([Navigation, Pagination]);

const SwiperModifique = styled(Swiper)`
  width: 95%;
  height: 470px;
`;
const SwiperImage = styled.img`
  width: 100%;
  height: 430px;
  object-fit: cover;
  object-position: center;
`;
const SwiperInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  h3{
    position:absolute ;
    margin:0  0 60px 0;
  }
  p{
    width: 300px;
    position: absolute;
  }
`;
const Slider: React.FC = () => {
  return (
    <>
      <SwiperModifique navigation pagination>
        {slider.map((item, index) => (
          <SwiperSlide key={item}>
            <SwiperInfo key={item} style={{}}>
              <SwiperImage src={`/Images/${item}`} alt={Category.Coffee[index]} />
              <h3>{Category.Coffee[index]}</h3>
              <p>{phrase[index]}</p>
            </SwiperInfo>
          </SwiperSlide>
        ))}
      </SwiperModifique>
    </>
  );
};

export default Slider;
