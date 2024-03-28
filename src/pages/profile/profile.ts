import Block from '@/lib/Block'
import { Props } from '@/lib/types'
import { SideBackButton } from '@/components/sideBackButton/sideBackButton'
import {
  changePassword,
  changeProfile,
  emailContext,
  fileInputContext,
  lastNameContext,
  linkContext,
  loginContext,
  logoutLink,
  nameContext,
  nameInChatContext,
  phoneContext,
  title,
} from './context'
import { ProfilePageTemplate } from '@/templates'
import { Button, FileInput, Link, ProfileInput, Title } from '@/components'
import ProfilePageStyles from './profile.module.css'

document.addEventListener('DOMContentLoaded', () => {
  const changeButton = document.getElementById('changeProfileButton')
  const changePasswordButton = document.getElementById('changePasswordButton')
  const inputs = document.querySelectorAll('input')

  if (changePasswordButton) {
    changePasswordButton.addEventListener('click', () => {
      window.location.href = '/changePassword'
    })
  }

  changeButton?.addEventListener('click', () => {
    inputs.forEach((input) => {
      if (input.disabled) {
        input.removeAttribute('disabled')
        input.style.color = '#fff'
        input.style.fontSize = '16px'

        changeButton.textContent = 'Save change'
      } else {
        input.disabled = true
        input.removeAttribute('style')

        changeButton.textContent = 'Change profile'
      }
    })
  })
})

export class ProfilePage extends Block {
  constructor(props: Props) {
    super({
      ...props,
      backButton: new SideBackButton({
        ...linkContext,
      }),
      fileInput: new FileInput({
        ...fileInputContext,
      }),
      email: new ProfileInput({
        ...emailContext,
      }),
      login: new ProfileInput({
        ...loginContext,
      }),
      name: new ProfileInput({
        ...nameContext,
      }),
      lastname: new ProfileInput({
        ...lastNameContext,
      }),
      nameInChat: new ProfileInput({
        ...nameInChatContext,
      }),
      phone: new ProfileInput({
        ...phoneContext,
      }),
      title: new Title({
        ...title,
      }),
      changeProfile: new Button({
        ...changeProfile,
      }),
      changePassword: new Button({
        ...changePassword,
      }),
      logoutLink: new Link({
        ...logoutLink,
      }),
      styles: {
        ...ProfilePageStyles,
      },
    })
  }

  render(): string {
    return ProfilePageTemplate
  }
}
