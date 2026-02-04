import Classes from './Category.module.css';

function CategoryCard({ name, img, fullImage }) {
  return (
    <div className={Classes.category_card}>
      <img
        src={img}
        alt={name}
        className={fullImage ? Classes.single_image : ''}
      />
      {!fullImage && <p>{name}</p>}
    </div>
  );
}

export default CategoryCard;
