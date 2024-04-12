export function getFormData() {
  const form = document.getElementById('form') as HTMLFormElement

  if (form) {
    const formData = new FormData(form)

    const formDataObject = {} as Record<string, unknown>
    formData.forEach((value, key) => {
      formDataObject[key] = value
    })

    console.log('formDataObject:', formDataObject)

    return formDataObject
  }
}
