export const maskValue = (value, minimumFractionDigits = 2, maximumFractionDigits = 2) => {
    return value
        ? value.toLocaleString('pt-BR', {
            minimumFractionDigits: minimumFractionDigits,
            maximumFractionDigits: maximumFractionDigits,
            currency: 'BRL'
        })
        : '0';
};
export const formatValueNotation = (value, maximumFractionDigits, notation) => {
    return value
        ? Intl.NumberFormat('pt-Br', {
            maximumFractionDigits: maximumFractionDigits,
            notation: notation
        }).format(value)
        : '0';
};
