import React, { FC } from "react";
import style from "./Patient.module.css";

type propsType = {
  type: string;
  img: string;
};

const Patient: FC<propsType> = ({ type, img }) => {
  return (
    <div className={style.container}>
      <div className={style.type}>{type}</div>
      <img className={style.img} src={img} alt="patient type image" />
    </div>
  );
};

export default Patient;
