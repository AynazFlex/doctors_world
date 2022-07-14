import React, { FC } from "react";
import style from "./Info.module.css";

type propsType = {
  children: string;
};

const Info: FC<propsType> = ({ children }) => {
  return <div className={style.info}>{children}</div>;
};

export default Info;
