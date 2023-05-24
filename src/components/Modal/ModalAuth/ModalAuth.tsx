import { useState } from "react";
import { ModalContainer } from "../..";
import useAuthModal from "../../../hooks/useAuthModal";

type Variant = 'LOGIN' | 'REGISTER'

export function ModalAuth () {
  const authModal = useAuthModal()
  const [variant,setVariant] = useState<Variant>('LOGIN')

return (
<ModalContainer className={`w-2/5 h-2/3 center blur`}
title={`${variant == 'LOGIN' ? 'Login' : 'Register'}`}
  isOpen={authModal.isOpen} onClose={authModal.onClose}>
  Size?
</ModalContainer>
)
}