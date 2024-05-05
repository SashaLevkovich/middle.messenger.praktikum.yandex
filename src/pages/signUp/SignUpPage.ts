import { titleContext, linkContext } from './models/context'
import SignUpStyles from './signUp.module.css'
import { SignUpPageTemplate } from './template'
import { Props, Block } from '../../app/lib'
import { SignUpForm } from '../../features'
import { Title, Link } from '../../shared/components'
import { router } from '../../shared/helpers/routes'

interface SignUpProps extends Props {
  signUpFormData: Record<string, string>
}

export class SignUp extends Block {
  constructor(props: SignUpProps) {
    super({
      ...props,
      title: new Title({
        ...titleContext,
      }),
      form: new SignUpForm({ signUpFormData: props.signUpFormData }),
      link: new Link({
        ...linkContext,
        events: {
          click: (e: Event) => {
            e.preventDefault()
            router.go('/')
          },
        },
      }),
      styles: {
        ...SignUpStyles,
      },
    })
  }

  override render() {
    return SignUpPageTemplate
  }
}
