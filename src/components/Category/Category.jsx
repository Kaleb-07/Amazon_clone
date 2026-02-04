import { categories } from "./CategoryFullInfo";
import CategoryCard from "./CategoryCard";
import Classes from './Category.module.css';

function Category() {
  return (
    <div className={Classes.categories_container}>
      {categories.map((category, index) => (
        <div key={index} className={Classes.category_section}>
          <h2>{category.title}</h2>
          <div className={`${Classes.category_items} ${category.items.length === 1 ? Classes.single_grid : ''}`}>
            {category.items.map((item, idx) => (
              <CategoryCard
                key={idx}
                {...item}
                fullImage={category.items.length === 1}
              />
            ))}
          </div>
          <a href={category.linkHref}>{category.linkText}</a>
        </div>
      ))}
    </div>
  );
}

export default Category;