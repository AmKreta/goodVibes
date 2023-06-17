function getCurrencySymbol(currency: string) {
    const symbol_map: { [key: string]: string } = {
        INR: '₹'
    };

    return symbol_map[currency];
}

export default getCurrencySymbol;