import React, { useState } from 'react';

const CurrencyConverter = () => {
let [amount, setAmount] = useState(0);
let [fromCurrency, setFromCurrency] = useState("EUR");
let [toCurrency, setToCurrency] = useState("USD");
let [conversionRate, setConversionRate] = useState(1.2);

const handleAmountChange = (event) => {
    setAmount(event.target.value);
};

const handleFromCurrencyChange = (event) => {
    setFromCurrency(event.target.value);
};

const handleToCurrencyChange = (event) => {
    setToCurrency(event.target.value);
};

return (
    <div>
    <input
        type="number"
        value={amount}
        onChange={handleAmountChange}
        placeholder="Montant à convertir"
    />
    <br />
    <br />
    <label>
        De :{" "}
        <select value={fromCurrency} onChange={handleFromCurrencyChange}>
        <option value="EUR">EUR</option>
        <option value="USD">USD</option>
        <option value="GBP">GBP</option>
        </select>
    </label>
    <br />
    <br />
    <label>
        À :{" "}
        <select value={toCurrency} onChange={handleToCurrencyChange}>
        <option value="EUR">EUR</option>
        <option value="USD">USD</option>
        <option value="GBP">GBP</option>
        </select>
    </label>
    <br />
    <br />
    <p>
        {amount} {fromCurrency} = {amount * conversionRate} {toCurrency}
    </p>
    </div>
);
};

export default CurrencyConverter;
