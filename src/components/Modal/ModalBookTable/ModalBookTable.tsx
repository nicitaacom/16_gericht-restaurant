import './modalBookTable.css'

import { Button, Dropdown, ModalContainer } from "../.."
import { people } from "../../../constant"
import useBookTable from "../../../hooks/useBookTableModal"
import { TableButton } from "../../Button/TableButton"
import { useContext } from 'react'
import { DropdownContext } from '../../../context'





/* MODAL HEADER */
const header = (
  <>
    <div className='book-table-header-info'>
      <h1 className="title bg-back">Book Table</h1>
      {/* <Dropdown>
        {people.map(item => (
          <li className="dropdown-item" key={item.id} onClick={() => { setSelected(item.amount), setIsActive(false) }}>{item.amount}</li>
        ))}
      </Dropdown> */}
      <p>Date&Time picker</p>
    </div>
    <Button label='Book table' className='button-book-table'
      onClick={() => {/* BACKEND - Send book data to another site */ }} />
  </>
)




/* MODAL BODY */
const body = (
  <>
    <img className="object-cover" src="/book-table/book-table.jpg" />
    <TableButton className="w-[5%] h-[14%] left-[24.5%] top-[17%]" />
    <TableButton className="w-[5%] h-[14%] left-[49.5%] top-[16.5%]" />
    <TableButton className="w-[24%] h-[6%] left-[74.5%] top-[15%]" booked />
    <TableButton className="w-[5%] h-[30%] left-[20.5%] top-[45%]" />
    <TableButton className="w-[5%] h-[14%] left-[41%] top-[44.5%]" />
    <TableButton className="w-[5%] h-[14%] left-[41%] top-[61.5%]" />
  </>
)


export function ModalBookTable() {
  const { setSelected, setIsActive, } = useContext(DropdownContext)
  const bookTable = useBookTable()

  return (
    <ModalContainer className='modal-book-table'
      header={header} headerClassName="modal-book-table-header"
      body={body} bodyClassName="w-[70vw] h-[80vh] overflow-hidden"
      onClose={bookTable.onClose} isOpen={bookTable.isOpen} />
  )
}