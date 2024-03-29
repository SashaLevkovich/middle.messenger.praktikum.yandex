import { Block, Props } from '@/app/lib'
import { SignUpForm } from '@/features'
import { Link, Title } from '@/shared/components'
import { titleContext, linkContext } from './models/context'
import SignUpStyles from './signUp.module.css'
import { SignUpPageTemplate } from './template'

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
          click: (e) => {
            e.preventDefault()
            window.location.href = linkContext.url
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
