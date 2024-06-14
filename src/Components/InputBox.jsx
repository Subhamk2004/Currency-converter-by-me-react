import React, {useId} from "react";

function InputBox(props) {
    let label = props.label;
    let amount = props.amount;
    let onAmountChange = props.onAmountChange;
    let currencyOptions = props.currencyOptions;
    let onCurrencyChange = props.onCurrencyChange;
    let currentCurrency = props.currentCurrency;
    let amountDisabled = props.amountDisabled;
    let amountId = useId();
    return(
        <div className="input-box
        p-3 bg-gray-600 rounded-lg shadow-sm flex flex-row gap-3"
        >
            <div className='flex flex-col justify-center'>
                <label className="text-lg label">
                    {label}
                </label>
                <input className=' w-40 text-black rounded'
                       type='number'
                       value={amount}
                       onChange={(e) => {
                           onAmountChange(e.target.value)
                       }}
                       disabled={amountDisabled}
                />
            </div>

            <div className='flex flex-col justify-center items-end'>
                <label className="text-lg label">
                   Currency Type
                </label>
                <select className='w-40 bg-white rounded text-black'
                    value={currentCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                >
                    {currencyOptions.map((currency) => {
                        return (
                            <option key={currency} value={currency}>
                                {currency}
                            </option>
                        )
                    })}
                </select>

            </div>

        </div>
    )
}

export default InputBox;