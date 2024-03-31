import ProfileLinksStyles from '../profileLinks.module.css'

export const changePassword = {
  text: 'Change password',
  id: 'changePasswordButton',
  className: ` ${ProfileLinksStyles.changeButton}`,
  url: '/changePassword',
}

export const changeProfile = {
  text: 'Save profile',
  id: 'changeProfileButton',
  className: ` ${ProfileLinksStyles.changeButton}`,
}

export const logoutLink = {
  url: '/login',
  text: 'Log out',
  className: ` ${ProfileLinksStyles.logoutLink} `,
}
