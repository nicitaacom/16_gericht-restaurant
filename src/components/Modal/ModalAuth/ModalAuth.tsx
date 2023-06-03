import './modalAuth.css'

import {BiLockOpenAlt} from 'react-icons/bi'
import {BiUser} from 'react-icons/bi'
import {AiFillGithub} from 'react-icons/ai'
import {BsGoogle} from 'react-icons/bs'

import { Button, ModalContainer } from "../..";
import { SocialButton } from '../../Button/SocialButton';
import useAuthModal from "../../../hooks/useAuthModal";
import { Input } from '../../Input/Input';

import { useState } from "react";

type Variant = 'LOGIN' | 'REGISTER'

export function ModalAuth () {
  const authModal = useAuthModal()
  const [variant,setVariant] = useState<Variant>('LOGIN')

return (
<ModalContainer className={`w-2/5 h-[55%] overflow-visible top-[10%] blur `}
title={`${variant == 'LOGIN' ? 'Login' : 'Register'}`}
  isOpen={authModal.isOpen} onClose={authModal.onClose}>
  <div className="modal-body modal-auth-body">
    <Input label='Login' tooltip tooltipText='Email or Login' icon={BiUser}/>
    <Input label='Passowrd' tooltip tooltipText='Password' icon={BiLockOpenAlt}/>
    <Button className='w-full mx-auto rounded-lg text-xl'
    title='Login' onClick={() => {/* BACKEND-Auth-with-credentials */}}/>
    <div className='social-auth'>
    <SocialButton title='Continue with github' icon={AiFillGithub}
    onClick={() => {/* BACKEND-Social-auth-with-github-provider */}}/>
    <SocialButton title='Continue with google' icon={BsGoogle}
    onClick={() => {/* BACKEND-Social-auth-with-google-provider */}}/>
    </div>
  </div>
</ModalContainer>
)
}