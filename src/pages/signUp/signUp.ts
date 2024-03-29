import { linkContext, titleContext } from './models/context'
import SignUpStyles from './signUp.module.css'
import { SignUpPageTemplate } from './template'
import { Block, Props } from '@/app/lib'
import { SignUpForm } from '@/features'
import { Link, Title } from '@/shared/components'

interface SignUpPageProps extends Props {
  signUpFormData: Record<string, string>
}

export class SignUpPage extends Block {
  constructor(props: SignUpPageProps) {
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
