const CURRENCY_FORMAT = new Intl.NumberFormat(undefined, {
    currency: "ARS",
    style: "currency",
});

export function currencyFormat(number: number) {
    return CURRENCY_FORMAT.format(number)
}
