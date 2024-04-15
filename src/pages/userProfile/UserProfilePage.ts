import { linkContext, title } from './models/context'
import ProfilePageStyles from './profile.module.css'
import { ProfilePageTemplate } from './template'
import { Block, Props } from '@/app/lib'
import { ProfileForm } from '@/features'
import { Avatar } from '@/features/avatar'
import { BackButton, Title } from '@/shared/components'
import { router } from '@/shared/helpers/routes'

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
          router.go('/messenger')
        },
      }),
      avatar: new Avatar({}),
      form: new ProfileForm({ profileFormData: props.profileFormData }),
      title: new Title({
        ...title,
      }),
      styles: {
        ...ProfilePageStyles,
      },
    })
  }

  render(): string {
    return ProfilePageTemplate
  }
}
