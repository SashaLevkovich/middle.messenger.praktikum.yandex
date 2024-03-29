import ProfilePageStyles from '@/pages/profile/profile.module.css'

export const oldPasswordContext = {
  label: 'Old password:',
  type: 'password',
  name: 'oldPassword',
  id: 'oldPassword',
  value: '12313123123123',
}

export const newPasswordContext = {
  placeholder: 'Enter new password',
  type: 'password',
  name: 'newPassword',
  id: 'newPassword',
}

export const newPasswordRepeatContext = {
  placeholder: 'Repeat new password',
  type: 'password',
  name: 'newPasswordRepeat',
  id: 'oldPasswordRepeat',
}

export const buttonContext = {
  type: 'button',
  text: 'Change password',
  id: 'saveChangePasswordButton',
  className: ` ${ProfilePageStyles.changeButton}`,
}

export const linkContext = {
  url: '/profile',
}
