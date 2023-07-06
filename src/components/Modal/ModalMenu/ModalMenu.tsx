import './modalMenu.css'

import fullMenu from '../../../constant/fullMenu.json'

import { ModalContainer } from '../..'
import useMenuModal from '../../../hooks/useMenuModal'
import { Category } from './Category'
import { useEffect, useRef } from 'react'
import { useSlider } from '../../../hooks/useSlider'


export function ModalMenu() {

  const { move, onMouseTouchDown } = useSlider()
  const menuModal = useMenuModal()

  /* logic for deleting/!deleting ingridients (without 2nd modal) - start */







  /* adding smth in a cart and showing 2nd modal for configuring - start*/








  /* for changing active class in modal-footer by scrolling menu - start */




  /* slider */
  const sliderRef = useRef(null);
  useEffect(() => {
    const slider: any = sliderRef.current;
    let isDown = false;
    let startX: number;
    let scrollLeft: number;

    if (slider) {
      slider.addEventListener("mousedown", (e: any) => {
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
      <div
        onMouseDown={onMouseTouchDown}
        onTouchStart={onMouseTouchDown}
        onMouseMove={move}
        onTouchMove={move}>
        <ul className='modal-categories-container'>
          {fullMenu.map((category) => (
            <a href={`#${category.title}`} key={category.id}>
              <li className={`nav-item-${category.id} modal-category`}>
                {category.title}
              </li>
            </a>
          ))}
        </ul>
      </div>
    </>
  )





  /* MODAL BODY */
  const body = (
    <>
      {/* Menu food-category container */}
      <ul className='modal-category-list '>
        {fullMenu.map(category => (
          <li key={category.id}><Category {...category} /></li>
        ))}
      </ul>
    </>
  )





  return (
    <ModalContainer className='modal-menu'
      header={header} headerClassName='modal-menu-header'
      body={body} bodyClassName='modal-menu-body'
      onClose={menuModal.onClose} isOpen={menuModal.isOpen}
      imgSrc='/bg-secondary-reverse.jpg' />
  )
}