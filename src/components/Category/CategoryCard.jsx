import Classes from './Category.module.css';

function CategoryCard({ name, img }) {
  return (
    <div className={Classes.category_card}>
      <img src={img} alt={name} />
      <p>{name}</p>
    </div>
  );
}

export default CategoryCard;
