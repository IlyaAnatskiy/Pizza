import React from 'react';

const Categories = React.memo(function Categories({ items, onSelectCategory, activeCategorie }) {
  return (
    <div className="categories">
      <ul>
        <li
          className={activeCategorie === null ? 'active' : ''}
          onClick={() => onSelectCategory(null)}>
          Все
        </li>
        {items &&
          items.map((item, index) => (
            <li
              className={activeCategorie === index ? 'active' : ''}
              key={`${item}_${index}`}
              onClick={() => onSelectCategory(index)}>
              {item}
            </li>
          ))}
      </ul>
    </div>
  );
});

export default Categories;
