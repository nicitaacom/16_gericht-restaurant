import { create } from 'zustand'

interface BookTableModalStore {
  isOpen:boolean
  onOpen:() => void
  onClose:() => void
}

const useBookTableModal = create<BookTableModalStore>((set) => ({
  isOpen:false,
  onOpen:() => set({isOpen:true}),
  onClose:() => set({isOpen:false})
}))

export default useBookTableModal