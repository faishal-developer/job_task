/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* @ts-ignore */

import  { ChangeEvent, useState } from "react";
import { useTranslation } from "react-i18next";
// import siteConfig from "../../Utils/siteConfig.js";
import langlist from "../../Language/Langlist.json";
import { LangugeStyles } from "./styles";

const Language = () => {
  const { i18n } = useTranslation();
  const [, setSelected] = useState(localStorage.getItem("i18nextLng"));

  const changeLanguage = (e:ChangeEvent<HTMLSelectElement>) => {
    const lng=e.target?.value;
    i18n.changeLanguage(lng);
    setSelected(lng);
  };
  return (
    <select onChange={(e) => changeLanguage(e)} className={LangugeStyles.ul}>
      {langlist.map((item) => (
        <option key={item.name}  value={item.code}>
          {item.name}
        </option>
      ))}
    </select>
  );
};

export default Language;
