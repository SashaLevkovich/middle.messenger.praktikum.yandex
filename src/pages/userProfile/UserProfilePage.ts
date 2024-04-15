import { linkContext, title } from './models/context'
import ProfilePageStyles from './profile.module.css'
import { ProfilePageTemplate } from './template'
import { Block, Props } from '@/app/lib'
import { UserController } from '@/entities/user'
import { BackButton, Title } from '@/shared/components'
import { isEmpty } from '@/shared/helpers'
import { profileForm, router } from '@/shared/helpers/routes'

export class UserProfile extends Block {
  constructor(props: Props) {
    super({
      ...props,
      backButton: new BackButton({
        ...linkContext,
        onClick: () => {
          router.go('/messenger')
        },
      }),
      form: new profileForm({}),
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
