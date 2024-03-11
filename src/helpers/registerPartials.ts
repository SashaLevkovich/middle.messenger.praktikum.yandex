import Handlebars from 'handlebars'

interface IRegisterParams {
  name: string
  component: string
}

export function register({ name, component }: IRegisterParams) {
  Handlebars.registerPartial(name, component)
}

export function registerPartials(partialsObject: Record<string, string>) {
  Object.entries(partialsObject).forEach(([name, component]) => {
    register({ name, component })
  })
}
