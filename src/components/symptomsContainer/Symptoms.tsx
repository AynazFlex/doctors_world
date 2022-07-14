import React, { FC } from "react";
import symptom from "../../images/symptoms.jpg";
import style from "./Symptomas.module.css";
import Symptom from "./Symptom";
import symptom1 from "../../images/symptom1.png";
import symptom2 from "../../images/symptom2.png";
import symptom3 from "../../images/symptom3.png";
import symptom4 from "../../images/symptom4.png";
import symptom5 from "../../images/symptom5.png";
import symptom6 from "../../images/symptom6.png";
import symptom7 from "../../images/symptom7.png";
import symptom8 from "../../images/symptom8.png";

type propsType = {
    type: string
}

const Symptoms: FC<propsType> = ({ type }) => {
  return (
    <div className={style.container}>
      <div className={style.type}>
        <div className={style.type_img} />
        <div className={style.type_text}>{type}</div>
      </div>
      <Symptom
        img={symptom6}
        left_des="17px"
        top_des="-47px"
        left="102.5px"
        top="-165px"
        description={["Сколиоз"]}
      />
      <Symptom
        img={symptom5}
        left="302.5px"
        top="-88.5px"
        left_des="145px"
        top_des="15px"
        description={["Ограниченная способность", "поднимать руки", 
"и переносить предметы"]}
      />
      <Symptom
        img={symptom8}
        left="-165px"
        top="107.5px"
        left_des="-155px"
        top_des="40px"
        description={["Вывих бедра"]}
      />
      <Symptom
        img={symptom2}
        left="107.5px"
        top="370px"
        left_des="-45px"
        top_des="145px"
        description={["Неспособность бегать,", "изменение походки"]}
      />
      <Symptom
        img={symptom4}
        left="370px"
        top="107.5px"
        left_des="145px"
        top_des="30px"
        description={["Нарушения жевания", "и глотания"]}
      />
      <Symptom
        img={symptom7}
        left="-100.5px"
        top="-88.5px"
        left_des="-165px"
        top_des="40px"
        description={["Утомляемость"]}
      />
      <Symptom
        img={symptom1}
        left="-100.5px"
        top="291.5px"
        left_des="-145px"
        top_des="30px"
        description={["Контрактура", "суставов"]}
      />
      <Symptom
        img={symptom3}
        left="302.5px"
        top="291.5px"
        left_des="145px"
        top_des="8px"
        description={["Дыхательная", "недостаточность/", "респираторная", "дисфункция"]}
      />
    </div>
  );
};

export default Symptoms;
