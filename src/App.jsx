import { useState } from 'react'
import './App.css'
import InputBox from './Components/InputBox.jsx'
import UseCurrencyInfo from './Custom_hooks/useCurrencyInfo.js'

function App() {

    let [amount, setAmount] = useState(0)
    let [from, setFrom] = useState('usd')
    let [to, setTo] = useState('inr')
    let amountDisabled = true;
    let currency = UseCurrencyInfo('usd');
    let currencyOptions = Object.keys(currency);
    let [convertedAmt, setConvertedAmt] = useState(0)

    let convert = () => {
        setConvertedAmt(amount*currency[to])
        // console.log(currency);
    }

    let swap = () => {
        setFrom(to)
        setTo(from)
        setConvertedAmt(amount)
        setAmount(convertedAmt)
    }

  return (
    <div className='flex flex-col items-center bg-gray-400 p-4 rounded-xl
    '>
        <div>
            <InputBox
                label = 'From'
                currencyOptions = {currencyOptions}
                amount = {amount}
                onAmountChange = {(amount) => {
                    setAmount(amount)
                }}
                onCurrencyChange = {(currency) => {
                    setFrom(currency)
                }}
                amountDisabled = {!amountDisabled}
                currentCurrency = {from}
            />
        </div>
        <div>
            <button className=' rounded bg-green-700 p-2 m-1 shadow-xl
            shadow-green-600'
                    onClick={swap}
            >
                Swap
            </button>
        </div>
        <div>
            <InputBox
                label = 'To'
                currencyOptions = {currencyOptions}
                // amountDisabled = {amountDisabled}
                currentCurrency = {to}
                onCurrencyChange = {(currency) => {
                    setTo(currency)
                }}
                amount = {convertedAmt}
            />
        </div>
        <div>
            <button className='p-2 bg-green-700 rounded m-1'
            onClick={convert}
            >
                Convert {from} to {to}
            </button>
        </div>
    </div>
  )
}

export default App
