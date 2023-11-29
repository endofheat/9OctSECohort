import { useEffect, useState } from 'react'
import { useData } from '../hooks/useData'
import EmojiChanger from './Emoji'

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD']

function BitcoinRates () {
  const [currency, setCurrency] = useState(currencies[0])
  //const [bitcoinRate, setBitcoinRate] = useState('')
  const bitcoinData = useData(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`)
  const bitcoinPrice = bitcoinData.bitcoin ? bitcoinData.bitcoin[currency.toLowerCase()] : "";
  //console.log(bitcoinData.bitcoin)

  /* useEffect(() => {
    let ignore = false

    fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`)
      .then(response => response.json())
      .then(json => {
        //console.log(json.bitcoin)
        console.log(json.bitcoin[currency.toLowerCase()])
        if (!ignore) setBitcoinRate(json.bitcoin[currency.toLowerCase()])
      })

    return () => {
      ignore = true
    }
  }, [currency]) */
  console.log(bitcoinPrice);
  
  const options = currencies.map((curr) => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ))

  return (
    <div className='BitcoinRates componentBox'>
      <h3>Bitcoin Exchange Rate</h3>
      <h2>${bitcoinPrice}</h2>
      <label>
        Choose currency:
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          {options}
        </select>
      </label>
      <EmojiChanger />
    </div>
  )
}

export default BitcoinRates;
