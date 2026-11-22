const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit'
const ACCESS_KEY = import.meta.env?.VITE_WEB3FORMS_ACCESS_KEY ?? ''

export class Web3FormsError extends Error {
  constructor(message, code) {
    super(message)
    this.name = 'Web3FormsError'
    this.code = code
  }
}

export async function sendWeb3Form(formData, {
  fetchImpl = globalThis.fetch,
  accessKey = ACCESS_KEY,
} = {}) {
  if (!accessKey) {
    throw new Web3FormsError('Email submission is not configured.', 'configuration')
  }

  if (typeof fetchImpl !== 'function') {
    throw new Web3FormsError('Unable to connect to the email service.', 'network')
  }

  const payload = {
    ...formData,
    access_key: accessKey,
    form_name: 'ek-international',
    from_name: 'EK International Website',
    botcheck: formData?.botcheck ?? '',
  }

  let response
  try {
    response = await fetchImpl(WEB3FORMS_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    })
  } catch {
    throw new Web3FormsError('Unable to connect to the email service.', 'network')
  }

  if (response.status === 429) {
    throw new Web3FormsError('The email service is receiving too many requests.', 'rate_limit')
  }

  let result
  try {
    result = await response.json()
  } catch {
    throw new Web3FormsError('The email service returned an invalid response.', 'invalid_response')
  }

  if (!result || typeof result !== 'object' || Array.isArray(result)) {
    throw new Web3FormsError('The email service returned an invalid response.', 'invalid_response')
  }

  if (!response.ok || result.success !== true) {
    throw new Web3FormsError('The email service could not submit this form.', 'submission')
  }

  return result
}
