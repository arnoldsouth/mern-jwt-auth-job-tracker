const FormRowSelect = ({ labelText, name, value, handleChange, list }) => {
    return (
        <div className="form-row">
            <label htmlFor={name} className="form-label">
                {labelText || name}
            </label>
            <select
                name={name}
                id={name}
                value={value}
                onChange={handleChange}
                className="form-select"
            >
                {list.map((itemValue, index) => {
                    const capitalizedValue =
                        // itemValue.charAt(0).toUpperCase() + itemValue.slice(1)
                        itemValue
                            .split('-')
                            .map(
                                (word) =>
                                    word.charAt(0).toUpperCase() + word.slice(1)
                            )
                            .join('-')

                    return (
                        <option key={index} value={itemValue}>
                            {/* {itemValue} */}
                            {capitalizedValue}
                        </option>
                    )
                })}
            </select>
        </div>
    )
}
export default FormRowSelect
