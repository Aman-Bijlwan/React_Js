import React, { useId } from 'react'
// import useCurrencyInfo from useCurrencyInfo

function InputBox({ label, amount, onAmountChange, onCurrencyChange, currencyOptions = [], selectCurrecy = "inr", amountDisable = false, currencyDisable = false, className }) {

    const amountInputId = useId()

    return (

        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            {/*  in above div i have used curly braces along with template literals in className bcz i want to take some classes input from user as a option if he/she want to customize something */}

            <div className='w-1/2'>
                <label htmlFor={amountInputId} className='text-black/40 mb-2 inline-block'>
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className='outline-none w-full bg-transparent py-1.5'
                    type='number '
                    placeholder='Amount'
                    disabled="amountDisable"
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className='w-1/2 flex flex-wrap justify-end text-right'>
                <p className='text-black/40 mb-2 w-full'>
                    Currency Type
                </p>
                <select
                    className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'
                    value={selectCurrecy}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    {/* Below .map creates a loop */}
                    {currencyOptions.map((currency) => (

                        <option key={currency} value={currency}>{currency}</option>
                    ))}
                </select>
            </div>
        </div>

    )
}

export default InputBox