import './modalMenu.css'

import { IFullMenu } from "../../../interfaces/fullMenu";
import { CategoryItem } from "./CategoryItem";

export function Category (category:IFullMenu) {
return (
    <>
      <h6 className='modal-list-title'>{category.title}</h6>
      <ul className="modal-list-items-container">
        {category.items.map(item => (
          <li className='modal-list-item-container' key={item.id}><CategoryItem {...item}/></li>
        ))}
      </ul>
    </>
)
}