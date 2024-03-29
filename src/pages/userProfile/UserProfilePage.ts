import { Block, Props } from '@/app/lib'
import { ProfileForm, ProfileLinks } from '@/features'
import { BackButton, Title } from '@/shared/components'
import { linkContext, title } from './models/context'
import ProfilePageStyles from './profile.module.css'
import { ProfilePageTemplate } from './template'

export interface ProfileProps extends Props {
  profileFormData: Record<string, string>
}

export class UserProfile extends Block {
  constructor(props: ProfileProps) {
    super({
      ...props,
      backButton: new BackButton({
        ...linkContext,
        onClick: () => {
          window.location.href = linkContext.url
          console.log(props.profileFormData)
        },
      }),
      form: new ProfileForm({ profileFormData: props.profileFormData }),
      title: new Title({
        ...title,
      }),
      links: new ProfileLinks({ profileFormData: props.profileFormData }),
      styles: {
        ...ProfilePageStyles,
      },
    })
  }

  render(): string {
    return ProfilePageTemplate
  }
}
