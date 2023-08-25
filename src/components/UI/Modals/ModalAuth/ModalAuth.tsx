import './modalAuth.css'

import { BiLockOpenAlt, BiUser } from 'react-icons/bi'
import { AiFillGithub, AiOutlineMail } from 'react-icons/ai'
import { BsGoogle } from 'react-icons/bs'

import { Button, ModalContainer } from "../../.."
import { SocialButton } from '../../Button/SocialButton'
import { Input } from '../../Inputs/Input'

import { useState } from "react"

type Variant = 'FORGOT' | 'LOGIN' | 'REGISTER'

interface ModalAuthProps {
  isOpen: boolean
  onClose: () => void
}

export function ModalAuth({isOpen,onClose}:ModalAuthProps) {

  const [checked, setChecked] = useState(true)
  const [variant, setVariant] = useState<Variant>('LOGIN')







  const header = (
    <h1 className='modal-title'>
      {variant === 'LOGIN' && 'Login'}
      {variant === 'REGISTER' && 'Register'}
      {variant === 'FORGOT' && 'Recover'}
    </h1>
  )






  const body = (
    <>
      {/* FORGOT */}
      <form onSubmit={e => e.preventDefault()} className={`modal-auth-body-forgot`}>
        <h1 className='title'>Enter your email</h1>
        <Input className='mb-4' label='Login' tooltip tooltipText='Email or Login' type='login' icon={BiUser} required />
        <Button className='w-full mx-auto rounded-lg text-xl'
          label='Send email' onClick={() => {/* BACKEND-Auth-with-credentials */ }} />
        <p>Remember your password? <a className={`forgot-password cta-link-primary`} onClick={() => setVariant('LOGIN')}>
          {variant === 'FORGOT' ? 'Log in' : 'Forgot Password?'}
        </a></p>
      </form>
      {/* LOGIN */}
      <form className='modal-auth-body-login' onSubmit={e => e.preventDefault()}>
        <div>
          <Input className='mb-4' label='Login' tooltip tooltipText='Email or Login' type='login' icon={BiUser} required />
          <Input className='mb-2' label='Passowrd' tooltip tooltipText='Password' type='password' icon={BiLockOpenAlt} required />
          <div className='login-help'>
            <div className="remember-me">
              <input type="checkbox" id="check" checked={checked}
                onChange={() => setChecked(state => !state)} />
              <label><span>Remember me</span></label>
            </div>
            <a className={`forgot-password cta-link-primary`} onClick={() => setVariant('FORGOT')}>
              {variant === 'FORGOT' ? 'Log in' : 'Forgot Password?'}
            </a>
          </div>
        </div>
        <Button className='w-full mx-auto rounded-lg text-xl'
          label='Login' onClick={() => {/* BACKEND-Auth-with-credentials */ }} />
        <div className='social-auth'>
          <SocialButton title='Continue with github' icon={AiFillGithub}
            onClick={() => {/* BACKEND-Social-auth-with-github-provider */ }} />
          <SocialButton title='Continue with google' icon={BsGoogle}
            onClick={() => {/* BACKEND-Social-auth-with-google-provider */ }} />
        </div>
        <p className='text-center'>Don't have an account? <a className='cta-link-primary'
          onClick={() => setVariant('REGISTER')}>Register</a></p>
      </form>
      {/* REGISTER */}
      <form className='modal-auth-body-register' onSubmit={e => e.preventDefault()}>
        <div>
          <Input className='mb-4' label='Nickname' tooltip tooltipText={'For login'} type='login' icon={BiUser} required />
          <Input className='mb-4' label='Email' tooltip tooltipText='Email' type='email' icon={AiOutlineMail} required />
          <Input className='mb-2' label='Passowrd' tooltip tooltipText='Password' type='password' icon={BiLockOpenAlt} required />
          <div className='login-help'>
            <div className="remember-me">
              <input type="checkbox" id="check" checked={checked}
                onChange={() => setChecked(state => !state)} />
              <label><span>Remember me</span></label>
            </div>
            <a className={`forgot-password cta-link-primary`} onClick={() => setVariant('FORGOT')}>
              {variant === 'FORGOT' ? 'Log in' : 'Forgot Password?'}
            </a>
          </div>
        </div>
        <Button className='w-full mx-auto rounded-lg text-xl'
          label='Login' onClick={() => {/* BACKEND-Register-with-credentials */ }} />
        <div className='social-auth'>
          <SocialButton title='Continue with github' icon={AiFillGithub}
            onClick={() => {/* BACKEND-Social-auth-with-github-provider */ }} />
          <SocialButton title='Continue with google' icon={BsGoogle}
            onClick={() => {/* BACKEND-Social-auth-with-google-provider */ }} />
        </div>
        <p className='text-center'>Already have an account? <a className='cta-link-primary'
          onClick={() => setVariant('LOGIN')}>Login</a></p>
      </form>
    </>
  )


  return (
    <ModalContainer className={`modal-auth`}
      header={header} headerClassName={`${variant === 'FORGOT' && 'h-[4rem]'}`}
      body={body} bodyClassName={`modal-auth-body
  ${variant === 'FORGOT' && 'h-[18rem] translate-x-[100%]'}
  ${variant === 'LOGIN' && 'h-[22.5em] Tablet:h-[24.5rem]'}
  ${variant === 'REGISTER' && 'h-[26.5em] translate-x-[-100%] Tablet:h-[28rem]'}
 `}
      isOpen={isOpen} onClose={onClose}
      imgSrc='/bg-secondary-reverse.jpg' />
  )
}