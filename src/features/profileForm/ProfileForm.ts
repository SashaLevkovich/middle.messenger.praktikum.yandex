import {
  emailContext,
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
import { Input } from '@/shared/components'
import { isEmpty } from '@/shared/helpers'
import { router } from '@/shared/helpers/routes'

interface ProfileProps extends Props {
  profileFormData?: Record<string, string>
}

export class ProfileForm extends Block {
  constructor(props: ProfileProps) {
    super({
      ...props,
      email: new Input({
        ...emailContext,
        onChange: (value: string) => {
          store.dispatch(setUser({ login: value }))
        },
        rules: RULES.email,
        styles: {
          ...ProfileFormStyles,
        },
        attr: {
          value: store.getState().userConfig.email,
        },
      }),
      login: new Input({
        ...loginContext,
        onChange: (value: string) => {
          store.dispatch(setUser({ login: value }))
        },
        rules: RULES.login,
        styles: {
          ...ProfileFormStyles,
        },
        attr: {
          value: store.getState().userConfig.login,
        },
      }),
      name: new Input({
        ...nameContext,
        onChange: (value: string) => {
          store.dispatch(setUser({ first_name: value }))
        },
        rules: RULES.name,
        styles: {
          ...ProfileFormStyles,
        },
        attr: {
          value: store.getState().userConfig.first_name,
        },
      }),
      lastname: new Input({
        ...lastNameContext,
        onChange: (value: string) => {
          store.dispatch(setUser({ second_name: value }))
        },
        rules: RULES.lastname,
        styles: {
          ...ProfileFormStyles,
        },
        attr: {
          value: store.getState().userConfig.second_name,
        },
      }),
      nameInChat: new Input({
        ...nameInChatContext,
        onChange: (value: string) => {
          store.dispatch(setUser({ display_name: value }))
        },
        rules: RULES.nameInChat,
        styles: {
          ...ProfileFormStyles,
        },
        attr: {
          value:
            store.getState().userConfig.nameInChat ||
            store.getState().userConfig.login,
        },
      }),
      phone: new Input({
        ...phoneContext,
        onChange: (value: string) => {
          store.dispatch(setUser({ phone: value }))
        },
        rules: RULES.phone,
        styles: {
          ...ProfileFormStyles,
        },
        attr: {
          value: store.getState().userConfig.phone,
        },
      }),
      links: new ProfileLinks({ profileFormData: props.profileFormData }),
      styles: {
        ...ProfileFormStyles,
      },
    })
  }

  override async init() {
    super.init()

    this.componentDidMount()
  }

  override async componentDidMount() {
    const userController = new UserController()
    const user = await userController.getUser()

    if (!isEmpty(user)) {
      router.go('/settings')
    } else {
      router.go('/')
    }
  }

  render() {
    return ProfileFormTemplate
  }
}
