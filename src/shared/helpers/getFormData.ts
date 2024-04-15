export function getFormData(formId?: string) {
  const form = document.getElementById(formId || 'form') as HTMLFormElement

  if (form) {
    const formData = new FormData(form)

    const formDataObject = {} as Record<string, unknown>
    formData.forEach((value, key) => {
      formDataObject[key] = value
    })

    return formDataObject
  }
}
