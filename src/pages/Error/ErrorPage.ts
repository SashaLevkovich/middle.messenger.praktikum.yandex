import ErrorSrtles from './error.module.css'
import { linkContext } from './models/context'
import { ErrorPageTemplate } from './template'
import { Block, Props } from '@/app/lib'
import { Divider, Link, Title } from '@/shared/components'

export class ErrorPage extends Block {
  constructor(props: Props) {
    super({
      ...props,
      title: new Title({
        title: props.title,
      }),
      divider: new Divider({
        text: props.text,
      }),
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
        ...ErrorSrtles,
      },
    })
  }

  override render(): string {
    return ErrorPageTemplate
  }
}
