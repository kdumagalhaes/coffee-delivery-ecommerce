export const fetchAddressData = async (postalCode: string) => {
  const postalCodeWithoutHifen = postalCode.replace(/-/g, '')
  const VIA_CEP_ENDPOINT = `https://viacep.com.br/ws/${postalCodeWithoutHifen}/json/`

  try {
    const response = await fetch(VIA_CEP_ENDPOINT)
    const json = await response.json()
    return json
  } catch (error) {
    return console.log(error)
  }
}
