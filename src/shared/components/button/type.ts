import { Props } from '../../../app/lib'

export interface ButtonProps extends Props {
  onClick?: (e: Event) => void
  onSubmit?: (e: Event) => void
}
