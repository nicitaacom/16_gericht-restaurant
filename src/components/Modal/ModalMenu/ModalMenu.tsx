import './modalMenu.css'

import { fullMenu } from '../../../constant/fullMenu'

import { ModalContainer } from '../..'
import useMenuModal from '../../../hooks/useMenuModal'
import { formatCurrency } from '../../../utils/formatCurrency'
import { Category } from './Category'
import { useEffect, useRef } from 'react'


export function ModalMenu () {
  const menuModal = useMenuModal()

  /* logic for deleting/!deleting ingridients (without 2nd modal) - start */
 
  
  




  /* adding smth in a cart and showing 2nd modal for configuring - start*/
  const quantity = 0







  /* for changing active class in modal-footer by scrolling menu - start */
  

  

  /* slider */
  const sliderRef = useRef(null);
  useEffect(() => {
    const slider:any = sliderRef.current;
    let isDown = false;
    let startX:number;
    let scrollLeft:number;

    if (slider) {
      slider.addEventListener("mousedown", (e:any) => {
        isDown = true;
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
      });
      
      

      window.addEventListener("mouseup", () => {
        isDown = false;
      });

      window.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();

        const x = e.pageX - slider.offsetLeft;
        const speed = 1;
        const walk = (x - startX) * speed;
        slider.scrollLeft = scrollLeft - walk;
      });
    }
  }, []);











 /* MODAL HEADER */
const header = (
    <>
      <h1 className={`modal-title`}>Menu</h1>
      <div className='slider modal-categories-container' ref={sliderRef}>
      {fullMenu.map(category => (
        <h1 className='modal-category modal-category-active' key={category.id}>{category.title}</h1>
      ))}
    </div>
    </>
)





 /* MODAL BODY */
 const body = (
  <>
    {/* Menu food-category container */}
    <ul className='modal-category-list'>
      {fullMenu.map(category => (
        <li key={category.id}><Category {...category}/></li>
      ))}
    </ul>
    </>
)
 




return (
  <ModalContainer className='modal-menu'
  header={header} headerClassName='modal-menu-header'
  body={body} bodyClassName='modal-menu-body'
  onClose={menuModal.onClose} isOpen={menuModal.isOpen} 
  imgSrc='/bg-secondary-reverse.jpg'/>
)
}