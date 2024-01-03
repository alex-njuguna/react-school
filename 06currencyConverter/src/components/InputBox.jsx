const InputBox = ({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = 'usd',
  amountDisabled = false,
  currencyDisabled = false,
  className = ''
}) => {

return (
  <div className={`container bg-light p-3 rounded ${className}`}>
      <div className="w-50">
          <label htmlFor="amountInput" className="text-dark mb-2">{label}</label>
          <input
            id="amountInput"
            type="number"
            className="w-100 border-0"
            placeholder="0"
            disabled={amountDisabled}
            value={amount}
            onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
          />
      </div>
      <div className="w-50 text-right">
        <p className="text-dark mb-2">
          Currency Type
        </p>
        <select
          id="currencySelect"
          className="rounded bg-secondary cursor-pointer border-0" 
          value={selectedCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisabled}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
  </div>
);
};

export default InputBox;
