import { changePassword, changeProfile, logoutLink } from './models/context'
import ProfileLinksStyles from './profileLinks.module.css'
import { ProfileLinksTemplate } from './template'

import { Block, Props } from '@/app/lib'
import { Button, Link } from '@/shared/components'
import { router } from '@/shared/helpers/routes'

export interface ProfileLinksProps extends Props {
  profileFormData: Record<string, string>
}

export class ProfileLinks extends Block {
  constructor(props: ProfileLinksProps) {
    super({
      ...props,
      changeProfile: new Button({
        ...changeProfile,
        onClick: () => {},
        styles: {
          ...ProfileLinksStyles,
        },
      }),
      changePassword: new Button({
        ...changePassword,
        onClick: (e) => {
          e.preventDefault()
          router.go('/change-password')
        },
        styles: {
          ...ProfileLinksStyles,
        },
      }),
      logoutLink: new Link({
        ...logoutLink,
        events: {
          click: (e) => {
            e.preventDefault()
            router.go('/')
          },
        },
        styles: {
          ...ProfileLinksStyles,
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
