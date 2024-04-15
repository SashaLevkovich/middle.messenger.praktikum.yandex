import { linkContext, title } from './models/context'
import ProfilePageStyles from './profile.module.css'
import { ProfilePageTemplate } from './template'
import { Block, Props } from '@/app/lib'
import { store } from '@/app/store/store'
import { UserController } from '@/entities/user'
import { ProfileForm } from '@/features'
import { Avatar } from '@/features/avatar'
import { BackButton, Title } from '@/shared/components'
import { isEmpty } from '@/shared/helpers'
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
      form: new ProfileForm({}),
      title: new Title({
        ...title,
      }),
      styles: {
        ...ProfilePageStyles,
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

    console.log(user)

    if (!isEmpty(user)) {
      router.go('/settings')
    } else {
      router.go('/')
    }
  }

  render(): string {
    return ProfilePageTemplate
  }
}
