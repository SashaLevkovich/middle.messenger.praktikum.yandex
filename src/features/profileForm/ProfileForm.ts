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

import { Block, Props } from '@/app/lib'
import { Input, FileInput } from '@/shared/components'

interface ProfileProps extends Props {
  profileFormData: Record<string, string>
}

export class ProfileForm extends Block {
  constructor(props: ProfileProps) {
    super({
      ...props,
      fileInput: new FileInput({
        ...fileInputContext,
        styles: {
          ...ProfileFormStyles,
        },
      }),
      email: new Input({
        ...emailContext,
        onChange: (value: string) => {
          this.setProps((props.profileFormData['email'] = value))
        },
        rules: RULES.email,
        styles: {
          ...ProfileFormStyles,
        },
      }),
      login: new Input({
        ...loginContext,
        onChange: (value: string) => {
          this.setProps((props.profileFormData['login'] = value))
          this.setProps({
            value,
          })
        },
        rules: RULES.login,
        styles: {
          ...ProfileFormStyles,
        },
      }),
      name: new Input({
        ...nameContext,
        onChange: (value: string) => {
          this.setProps((props.profileFormData['name'] = value))
        },
        rules: RULES.name,
        styles: {
          ...ProfileFormStyles,
        },
      }),
      lastname: new Input({
        ...lastNameContext,
        onChange: (value: string) => {
          this.setProps((props.profileFormData['lastname'] = value))
        },
        rules: RULES.lastname,
        styles: {
          ...ProfileFormStyles,
        },
      }),
      nameInChat: new Input({
        ...nameInChatContext,
        onChange: (value: string) => {
          this.setProps((props.profileFormData['nameInChat'] = value))
        },
        rules: RULES.nameInChat,
        styles: {
          ...ProfileFormStyles,
        },
      }),
      phone: new Input({
        ...phoneContext,
        onChange: (value: string) => {
          this.setProps((props.profileFormData['phone'] = value))
        },
        rules: RULES.phone,
        styles: {
          ...ProfileFormStyles,
        },
      }),
      styles: {
        ...ProfileFormStyles,
      },
    })
  }

  render() {
    return ProfileFormTemplate
  }
}
