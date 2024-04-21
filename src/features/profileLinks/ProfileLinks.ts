import { changePassword, changeProfile, logoutLink } from './models/context'
import ProfileLinksStyles from './profileLinks.module.css'
import { ProfileLinksTemplate } from './template'
import { Block, Props } from '@/app/lib'
import { UserController } from '@/entities/user'
import { Button, Link } from '@/shared/components'
import { router } from '@/shared/helpers/routes'

export class ProfileLinks extends Block {
  private userController: UserController

  constructor(props: Props) {
    super({
      ...props,
      changeProfile: new Button({
        ...changeProfile,
        onClick: (e) => {
          e.preventDefault()
          this.userController.changeUser()
        },
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
            this.userController.logout()
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

    this.userController = new UserController()
  }

  render(): string {
    return ProfileLinksTemplate
  }
}
