import { categories } from "./CategoryFullInfo";
import CategoryCard from "./CategoryCard";
import Classes from './Category.module.css';
import { DataContext } from "../../components/DataProvider/DataProvider.jsx";
import { translations } from "../../Utility/translations";
import { useContext } from "react";

function Category() {
  const [{ language }] = useContext(DataContext);
  const t = translations[language?.code] || translations.EN;

  // Helper to get translated string if key exists, otherwise return original
  const getTrans = (key, original) => t[key] || original;

  const categoryMap = [
    "cat_gifts_price", "cat_gifts_recipient", "cat_game_on", "cat_home_essentials",
    "cat_gifts_category", "cat_save_deals", "cat_holiday_ready", "cat_new_arrivals"
  ];

  const linkMap = [
    "link_discover_holiday", "link_shop_gifts", "link_shop_now", "link_discover_home",
    "link_discover_holiday", "link_discover_holiday", "link_shop_now", "link_shop_home"
  ];

  return (
    <div className={Classes.categories_container}>
      {categories.map((category, index) => (
        <div key={index} className={Classes.category_section}>
          <h2>{getTrans(categoryMap[index], category.title)}</h2>
          <div className={`${Classes.category_items} ${category.items.length === 1 ? Classes.single_grid : ''}`}>
            {category.items.map((item, idx) => (
              <CategoryCard
                key={idx}
                {...item}
                fullImage={category.items.length === 1}
              />
            ))}
          </div>
          <a href={category.linkHref}>{getTrans(linkMap[index], category.linkText)}</a>
        </div>
      ))}
    </div>
  );
}

export default Category;