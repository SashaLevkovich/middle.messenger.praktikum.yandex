import { changePassword, changeProfile, logoutLink } from './models/context'
import ProfileLinksStyles from './profileLinks.module.css'
import { ProfileLinksTemplate } from './template'
import { Button } from './ui'
import { Block } from '@/app/lib'
import { ProfilePageProps } from '@/pages/Profile/Profile'
import { Link } from '@/shared/components'

export class ProfileLinks extends Block {
  constructor(props: ProfilePageProps) {
    super({
      ...props,

      changeProfile: new Button({
        ...changeProfile,
        onClick: () => {
          console.log(props.profileFormData)
        },
      }),
      changePassword: new Button({
        ...changePassword,
        onClick: (e) => {
          window.location.href = changePassword.url
          e.preventDefault()
        },
      }),
      logoutLink: new Link({
        ...logoutLink,
        events: {
          click: (e) => {
            window.location.href = logoutLink.url
            e.preventDefault()
          },
        },
      }),
      styles: {
        ...ProfileLinksStyles,
      },
    })
  }

  render(): string {
    return ProfileLinksTemplate
  }
}
