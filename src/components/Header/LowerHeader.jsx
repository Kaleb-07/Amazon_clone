import React, { useContext } from "react";
import Classes from "./Header.module.css";
import { AiOutlineMenu } from "react-icons/ai";
import { DataContext } from "../../components/DataProvider/DataProvider.jsx";
import { translations } from "../../Utility/translations";

function LowerHeader() {
  const [{ language }] = useContext(DataContext);
  const t = translations[language?.code] || translations.EN;

  return (
    <div className={Classes.lower_header}>
      <ul className={Classes.nav_list}>
        <li className={Classes.nav_item}>
          <AiOutlineMenu />
          {t.all_menu}
        </li>
        <li className={Classes.nav_item}>{t.today_deals}</li>
        <li className={Classes.nav_item}>Prime video</li>
        <li className={Classes.nav_item}>{t.registry}</li>
        <li className={Classes.nav_item}>{t.gift_cards}</li>
        <li className={Classes.nav_item}>{t.customer_service}</li>
        <li className={Classes.nav_item}>{t.sell}</li>
      </ul>
    </div>
  );
}

export default LowerHeader;
