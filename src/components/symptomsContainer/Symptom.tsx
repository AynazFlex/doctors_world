import React, { FC, useState } from "react";
import style from "./Symptomas.module.css";

type propsType = {
  img: string;
  left: string;
  top: string;
  description: Array<string>;
  left_des: string;
  top_des: string;
};

const Symptom: FC<propsType> = ({
  img,
  left,
  top,
  description,
  left_des,
  top_des,
}) => {
  const [hover, setHover] = useState(false);
  return (
    <div className={style.symptom_block} style={{ left, top }}>
      <img
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        src={img}
        className={style.symptom_img}
      />
      {hover && (
        <div
          style={{ left: left_des, top: top_des }}
          className={style.description}
        >
          {description.map((item) => (
            <div key={item}>{item}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Symptom;
