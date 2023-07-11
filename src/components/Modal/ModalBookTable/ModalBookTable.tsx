import './modalBookTable.css'

import { Button, Dropdown, ModalContainer } from "../.."
import useBookTable from "../../../hooks/useBookTableModal"
import { Chair } from './Chair'
import { useSlider } from '../../../hooks/useSlider'

import { MdOutlineMan, MdOutlineWoman } from 'react-icons/md'




/* MODAL HEADER */
const header = (
  <>
    <div className='book-table-header-info'>
      <h1 className="title bg-back whitespace-nowrap">Book Table</h1>
      <Dropdown className='flex Tablet:hidden' />
      <div className='flex Tablet:hidden whitespace-nowrap tooltip'>
        Date&Time picker <span className="tooltiptext !translate-y-[160%] !translate-x-[-40%]">Pick date-time in the feature</span>
      </div>
    </div>
    <Button label='Book table' className='button-book-table whitespace-nowrap'
      onClick={() => {/* BACKEND - Send book data to another site */ }} />
  </>
)





export function ModalBookTable() {
  const bookTable = useBookTable()

  const { handleMouseDown, handleMouseMove, handleTouchDown, handleTouchMove } = useSlider()



  /* MODAL BODY */
  const body = (
    <>

      <div className='w-[calc(100%+17px)] h-full bg-[--bg-primary]
      relative flex overflow-y-scroll overflow-x-hidden'
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchDown}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}>


        <div className='window-decoration'>
          <div className='window-decoration-fragment' />
          <div className='window-decoration-fragment' />
          <div className='window-decoration-fragment' />
          <div className='window-decoration-fragment' />
          <div className='window-decoration-fragment' />
          <div className='window-decoration-fragment' />
        </div>

        <div className='wc-decoration'>
          <div className='wc-decoration-man'>
            WC <MdOutlineMan size={48} />
          </div>
          <div className='wc-decoration-woman'>
            WC <MdOutlineWoman size={48} />

          </div>
        </div>

        <div className='kitchen-decoration' />

        <div className='enter-decoration'>
          <img className='absolute top-[30%] left-[40%] w-16 h-16' src="/book-table/exit.png" alt="exit" />
        </div>




        { /* Tables */}
        <div className='absolute top-[10rem] left-[10rem] book-container'>
          <div className='flex flex-col'>
            <Chair reverse />
            <Chair reverse />
          </div>
          <div className="radio table-medium">
            <input id="table-1" name="radio" type="radio" />
            <label htmlFor="table-1" className={`radio-label`}></label>
          </div>
          <div className='flex flex-col'>
            <Chair />
            <Chair />
          </div>
        </div>

        <div className='absolute top-[10rem] left-[40rem] book-container'>
          <div className='flex flex-col'>
            <Chair reverse />
            <Chair reverse />
          </div>
          <div className="radio table-medium">
            <input id="table-2" name="radio" type="radio" />
            <label htmlFor="table-2" className={`radio-label`}></label>
          </div>
          <div className='flex flex-col'>
            <Chair />
            <Chair />
          </div>
        </div>

        <div className='absolute top-[4rem] left-[101rem] flex flex-col'>
          <div className="radio table-big-horizontal">
            <input id="table-3" name="radio" type="radio" disabled />
            <label htmlFor="table-3" className={`radio-label tooltip`}>
              <span className="tooltiptext">Booked 19:00-21:00 GMT-0</span>
            </label>
          </div>
          <div className='flex flex-row justify-between w-[95%] pl-[10%]'>
            <Chair back />
            <Chair back />
            <Chair back />
            <Chair back />
          </div>
        </div>

        <div className='absolute top-[40rem] left-[10rem] book-container'>
          <div className='flex flex-col'>
            <Chair reverse />
            <Chair reverse />
          </div>
          <div className="radio table-medium">
            <input id="table-4" name="radio" type="radio" />
            <label htmlFor="table-4" className={`radio-label`}></label>
          </div>
          <div className='flex flex-col'>
            <Chair />
            <Chair />
          </div>
        </div>

        <div className='absolute top-[40rem] left-[40rem] book-container'>
          <div className='flex flex-col'>
            <Chair reverse />
            <Chair reverse />
          </div>
          <div className="radio table-medium">
            <input id="table-5" name="radio" type="radio" />
            <label htmlFor="table-5" className={`radio-label`}></label>
          </div>
          <div className='flex flex-col'>
            <Chair />
            <Chair />
          </div>
        </div>

        <div className='absolute top-[80rem] left-[10rem] book-container'>
          <div className='flex flex-col'>
            <Chair reverse />
            <Chair reverse />
            <Chair reverse />
          </div>
          <div className="radio table-big-vertical">
            <input id="table-7" name="radio" type="radio" />
            <label htmlFor="table-7" className={`radio-label`}></label>
          </div>
          <div className='flex flex-col'>
            <Chair />
            <Chair />
            <Chair />
          </div>
        </div>


        <div className='absolute top-[80rem] left-[40rem] book-container'>
          <div className='flex flex-col'>
            <Chair reverse />
            <Chair reverse />
            <Chair reverse />
          </div>
          <div className="radio table-big-vertical">
            <input id="table-7" name="radio" type="radio" />
            <label htmlFor="table-7" className={`radio-label`}></label>
          </div>
          <div className='flex flex-col'>
            <Chair />
            <Chair />
            <Chair />
          </div>
        </div>



      </div>
    </>
  )


  return (
    <ModalContainer className='modal-book-table' imgSrc='/bg-secondary-reverse.jpg'
      header={header} headerClassName="modal-book-table-header"
      body={body} bodyClassName="w-[100vw] h-[88vh] overflow-hidden"
      onClose={bookTable.onClose} isOpen={bookTable.isOpen} />
  )
}