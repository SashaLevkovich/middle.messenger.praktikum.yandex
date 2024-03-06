import { ITemplateData, renderTemplate } from '../../helpers/renderTemplate'

import ProfileStyles from './profile.module.css'
import { ProfileTemplate } from '../../templates'

export const renderProfile = (
  profileContext: ITemplateData,
  styles?: Record<string, string>,
) => {
  const Profile = renderTemplate({
    template: ProfileTemplate,
    styles: { ...ProfileStyles, ...styles },
    context: profileContext,
  })

  return Profile
}
