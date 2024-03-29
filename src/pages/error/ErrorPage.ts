import ErrorStyles from './error.module.css'
import { linkContext } from './models/context.ts'
import { Block, Props } from '@/app/lib'
import { ErrorPageTemplate } from '@/pages/error/template'
import { Divider, Link, Title } from '@/shared/components'

export class Error extends Block {
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
        ...ErrorStyles,
      },
    })
  }

  override render(): string {
    return ErrorPageTemplate
  }
}
