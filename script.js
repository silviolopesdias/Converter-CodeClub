const button = document.getElementById('convert-button')
const select = document.getElementById('select-currency')



const convertValues = async () => {

  const inputReais = document.getElementById('input-real').value
  const realValueText = document.getElementById('real-value-text')
  const currencyValueText = document.getElementById('currency-value-text')

 const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())
 
 const dolar = data.USDBRL.high
 const euro = data.EURBRL.high
 const BitCoin = data.BTCBRL.high

 
  realValueText.innerHTML = new Intl.NumberFormat('pt-BR',
    { style: 'currency', currency: 'BRL' }
  ).format(inputReais)

  if (select.value === 'US$ Dólar Americano') {

    currencyValueText.innerHTML = new Intl.NumberFormat('en-US',
      { style: 'currency', currency: 'USD' }).format(inputReais / dolar)
  }

  if (select.value === '€ Euro') {

    currencyValueText.innerHTML = new Intl.NumberFormat('de-DE',
      { style: 'currency', currency: 'EUR' }).format(inputReais / euro)
  }

  if (select.value === 'BitCoin') {

    currencyValueText.innerHTML = new Intl.NumberFormat('de-DE',
      { style: 'currency', currency: 'BTC' }).format((inputReais / BitCoin) /1000)
  }

}


changeCurrency = () => {

  const currencyImage = document.getElementById('currency-img')
  const currencyName = document.getElementById('currency-name')

  if (select.value === "US$ Dólar Americano") {

    currencyImage.src = "./assets/eua.png"
    currencyName.innerHTML = 'Dólar Americano'
  }


  if (select.value === '€ Euro') {

    currencyImage.src = "./assets/Euro.png"
    currencyName.innerHTML = 'Euro'
  }

  if (select.value === 'BitCoin') {

    currencyImage.src = "./assets/BitCoin.png"
    currencyName.innerHTML = 'BitCoin'
  }


  convertValues()

}

button.addEventListener("click", convertValues)

select.addEventListener("change", changeCurrency)