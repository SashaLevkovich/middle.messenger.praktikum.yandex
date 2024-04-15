import {
  emailContext,
  fileInputContext,
  lastNameContext,
  loginContext,
  nameContext,
  nameInChatContext,
  phoneContext,
} from './model/context'
import { RULES } from './model/rules'
import ProfileFormStyles from './profileForm.module.css'
import { ProfileFormTemplate } from './template'

import { ProfileLinks } from '../profileLinks/ProfileLinks'
import { Block, Props } from '@/app/lib'
import { setUser } from '@/app/store/actions'
import { store } from '@/app/store/store'
import { UserController } from '@/entities/user'
import { FileInput, Input } from '@/shared/components'
import { isEmpty } from '@/shared/helpers'
import { router } from '@/shared/helpers/routes'

export class ProfileForm extends Block {
  private userController: UserController

  constructor(props: Props) {
    super({
      ...props,
      fileInput: new FileInput({
        ...fileInputContext,
        onChange: (value) => {
          store.dispatch(setUser({ avatar: value }))
          this.userController.changeAvatar()
        },
        styles: {
          ...ProfileFormStyles,
        },
      }),
      email: new Input({
        ...emailContext,
        onChange: (value) => {
          store.dispatch(setUser({ login: value }))
        },
        rules: RULES.email,
        styles: {
          ...ProfileFormStyles,
        },
        attr: {
          value: props.email,
        },
      }),
      login: new Input({
        ...loginContext,
        onChange: (value) => {
          store.dispatch(setUser({ login: value }))
        },
        rules: RULES.login,
        styles: {
          ...ProfileFormStyles,
        },
        attr: {
          value: props.login,
        },
      }),
      name: new Input({
        ...nameContext,
        onChange: (value) => {
          store.dispatch(setUser({ first_name: value }))
        },
        rules: RULES.name,
        styles: {
          ...ProfileFormStyles,
        },
        attr: {
          value: props.first_name,
        },
      }),
      lastname: new Input({
        ...lastNameContext,
        onChange: (value) => {
          store.dispatch(setUser({ second_name: value }))
        },
        rules: RULES.lastname,
        styles: {
          ...ProfileFormStyles,
        },
        attr: {
          value: props.second_name,
        },
      }),
      nameInChat: new Input({
        ...nameInChatContext,
        onChange: (value) => {
          store.dispatch(setUser({ display_name: value }))
        },
        rules: RULES.nameInChat,
        styles: {
          ...ProfileFormStyles,
        },
        attr: {
          value: props.nameInChat || props.login,
        },
      }),
      phone: new Input({
        ...phoneContext,
        onChange: (value) => {
          store.dispatch(setUser({ phone: value }))
        },
        rules: RULES.phone,
        styles: {
          ...ProfileFormStyles,
        },
        attr: {
          value: props.phone,
        },
      }),
      links: new ProfileLinks({}),
      styles: {
        ...ProfileFormStyles,
      },
    })

    console.log(props)

    this.userController = new UserController()
  }

  override async init() {
    super.init()

    this.componentDidMount()
  }

  override async componentDidMount() {
    const userController = new UserController()
    const user = await userController.getUser()

    if (isEmpty(user)) {
      router.go('/')
    } else {
      router.go('/settings')
    }
  }

  render() {
    return ProfileFormTemplate
  }
}
