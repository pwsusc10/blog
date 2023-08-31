import React from "react";

type Props = {
  categories: string[];
  selected: string;
  onClick: (category: string) => void;
};

export default function Category({ categories, selected, onClick }: Props) {
  console.log(categories);

  return (
    <section className="text-center p-4">
      <h1 className="text-lg font-bold border-b border-sky-500 mb-2">
        Category
      </h1>
      <ul>
        {categories.map((category) => (
          <li
            className={`currsor-pointer hover:text-sky-500 ${
              category === selected && `text-sky-600`
            }`}
            key={category}
            onClick={() => onClick(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </section>
  );
}
