const selectedCart = [
    { price: 20 },
    { price: 45 },
    { price: 67 },
    { price: 1305 }
];

const currentsPairsWithRubles = {
    RUB: 1,
    EUR: 65.321000,
    USD: 58.578600,
    GBP: 74.2894,
    JPY: 52.4968
};


const totalCartPrice = selectedCart.map(selected => selected.price).reduce((total, price) => total + price, 0);
const totalCartPriceEachCurrency = Object.keys(currentsPairsWithRubles)
    .map(currencyName => ({
        name: currencyName,
        value: currentsPairsWithRubles[currencyName]*totalCartPrice,
    }))
    .reduce((result, priceInCurrency) => {
        result[priceInCurrency.name] = priceInCurrency.value;
        return result;
    }, {});

console.log('Selected Cart:');
console.log(selectedCart);
console.log('Currents Pairs WIth Rubles:');
console.log(currentsPairsWithRubles);
console.log('Total Cart Price in Currencies:');
console.log(totalCartPriceEachCurrency);