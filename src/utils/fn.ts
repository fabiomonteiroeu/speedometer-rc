export const maskValue = (
  value: number,
  minimumFractionDigits = 2,
  maximumFractionDigits = 2
) => {
  return value
    ? value.toLocaleString('pt-BR', {
        minimumFractionDigits: minimumFractionDigits,
        maximumFractionDigits: maximumFractionDigits,
        currency: 'BRL'
      })
    : '0';
};

export const formatValueNotation = (
  value: number,
  maximumFractionDigits?: number,
  notation?: 'standard' | 'scientific' | 'engineering' | 'compact' | undefined
) => {
  return value
    ? Intl.NumberFormat('pt-Br', {
        maximumFractionDigits: maximumFractionDigits,
        notation: notation
      }).format(value)
    : '0';
};
