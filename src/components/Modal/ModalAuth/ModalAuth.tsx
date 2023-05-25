import './modalAuth.css'

import {BiLockOpenAlt} from 'react-icons/bi'
import {BiUser} from 'react-icons/bi'
import {AiFillGithub} from 'react-icons/ai'
import {BsGoogle} from 'react-icons/bs'

import { ModalContainer } from "../..";
import { SocialButton } from '../../Button/SocialButton';
import useAuthModal from "../../../hooks/useAuthModal";
import { Input } from '../../Input/Input';

import { useState } from "react";

type Variant = 'LOGIN' | 'REGISTER'

export function ModalAuth () {
  const authModal = useAuthModal()
  const [variant,setVariant] = useState<Variant>('LOGIN')

return (
<ModalContainer className={`w-2/5 h-2/3 overflow-visible center blur`}
title={`${variant == 'LOGIN' ? 'Login' : 'Register'}`}
  isOpen={authModal.isOpen} onClose={authModal.onClose}>
  <div className="modal-body modal-auth-body">
    <Input label='Login' tooltip tooltipText='Email or Login' icon={BiUser}/>
    <Input label='Passowrd' tooltip tooltipText='Password' icon={BiLockOpenAlt}/>
    <div className='social-auth'>
    <SocialButton title='Continue with github' icon={AiFillGithub}/>
    <SocialButton title='Continue with google' icon={BsGoogle}/>
    <SocialButton title='Continue with google' icon={BsGoogle}/>
    </div>
  </div>
</ModalContainer>
)
}