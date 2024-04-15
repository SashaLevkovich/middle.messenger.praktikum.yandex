import { buttonContext } from './model/context'
import { AvatarTemplate } from './template'
import { fileInputContext } from '../profileForm/model/context'

import { Block, Props } from '@/app/lib'
import { setUser } from '@/app/store/actions'
import { store } from '@/app/store/store'
import { UserController } from '@/entities/user'
import ProfileFormStyles from '@/features/profileForm/profileForm.module.css'
import { Button, FileInput } from '@/shared/components'

export class Avatar extends Block {
  private userController: UserController

  constructor(props: Props) {
    super({
      ...props,
      avatar: new FileInput({
        ...fileInputContext,

        onChange: (value: string) => {
          store.dispatch(setUser({ avatar: value }))
        },
        styles: {
          ...ProfileFormStyles,
        },
      }),
      button: new Button({
        ...buttonContext,
        onClick: (e) => {
          e.preventDefault()
          this.userController.changeAvatar()
        },
        styles: {
          ...ProfileFormStyles,
        },
      }),
      styles: {
        ...ProfileFormStyles,
      },
    })

    this.userController = new UserController()
  }

  render() {
    return AvatarTemplate
  }
}
