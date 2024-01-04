import { useId } from "react";

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
  const id = useId();

  return (
    <div className={`container bg-light p-3 rounded ${className}`}>
      <div className="row">
        <div className="col-md-6">
          <label htmlFor={id} className="form-label text-primary mb-2">
            {label}
          </label>
          <input
            id={id}
            type="number"
            className="form-control border-0"
            placeholder="0"
            disabled={amountDisabled}
            value={amount}
            onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
          />
        </div>
        <div className="col-md-6 text-md-end mt-3 mt-md-0">
          <label htmlFor={id} className="form-label text-success mb-2">
            Currency Type
          </label>
          <select
            id={id}
            className="form-select rounded bg-warning cursor-pointer border-0"
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
    </div>
  );
};

export default InputBox;
