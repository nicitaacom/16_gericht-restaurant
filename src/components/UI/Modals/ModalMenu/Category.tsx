import './modalMenu.css'

import { useInView } from "react-intersection-observer"
import { IFullMenu } from "../../../interfaces/fullMenu";
import { CategoryItem } from "./CategoryItem";

export function Category(category: IFullMenu) {

  const { ref, inView } = useInView({ threshold: 0.5 })

  if (inView) {
    document.querySelectorAll(".modal-category").forEach((item) => {
      item.classList.remove("modal-category-active");
    });

    (document.querySelector(`.nav-item-${category.id}`) as HTMLParagraphElement).classList.add("modal-category-active");
  }

  return (
    <div ref={ref} id={category.title}>
      <h6 className='modal-list-title'>{category.title}</h6>
      <ul className="modal-list-items-container">
        {category.items.map(item => (
          <li className='modal-list-item-container' key={item.id}><CategoryItem {...item} /></li>
        ))}
      </ul>
    </div>
  )
}