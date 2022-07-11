const CURENCY_FORMATTER = new Intl.NumberFormat(undefined, { currency: 'USD', style: 'currency'})

export function formatCurrency(number: number) {
    return CURENCY_FORMATTER.format(number);
}
