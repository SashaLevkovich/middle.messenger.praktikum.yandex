import {
  Avatar,
  DisplayNameInput,
  EmailInput,
  LastnameInput,
  LoginInput,
  NameInput,
  PhoneInput,
} from './hoc'
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
import { isEmpty } from '@/shared/helpers'
import { router } from '@/shared/helpers/routes'

export class ProfileForm extends Block {
  private userController: UserController

  constructor(props: Props) {
    super({
      ...props,
      fileInput: new Avatar({
        ...fileInputContext,
        onChange: (value: File) => {
          store.dispatch(setUser({ avatar: value }))
          this.userController.changeAvatar()
        },
        styles: {
          ...ProfileFormStyles,
        },
      }),
      email: new EmailInput({
        ...emailContext,
        onChange: (value: string) => {
          store.dispatch(setUser({ email: value }))
        },
        rules: RULES.email,
        styles: {
          ...ProfileFormStyles,
        },
      }),
      login: new LoginInput({
        ...loginContext,
        onChange: (value: string) => {
          store.dispatch(setUser({ login: value }))
        },
        rules: RULES.login,
        styles: {
          ...ProfileFormStyles,
        },
      }),
      name: new NameInput({
        ...nameContext,
        onChange: (value: string) => {
          store.dispatch(setUser({ first_name: value }))
        },
        rules: RULES.name,
        styles: {
          ...ProfileFormStyles,
        },
      }),
      lastname: new LastnameInput({
        ...lastNameContext,
        onChange: (value: string) => {
          store.dispatch(setUser({ second_name: value }))
        },
        rules: RULES.lastname,
        styles: {
          ...ProfileFormStyles,
        },
      }),
      nameInChat: new DisplayNameInput({
        ...nameInChatContext,
        onChange: (value: string) => {
          store.dispatch(setUser({ display_name: value }))
        },
        rules: RULES.nameInChat,
        styles: {
          ...ProfileFormStyles,
        },
      }),
      phone: new PhoneInput({
        ...phoneContext,
        onChange: (value: string) => {
          store.dispatch(setUser({ phone: value }))
        },
        rules: RULES.phone,
        styles: {
          ...ProfileFormStyles,
        },
      }),
      links: new ProfileLinks({}),
      styles: {
        ...ProfileFormStyles,
      },
    })

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
