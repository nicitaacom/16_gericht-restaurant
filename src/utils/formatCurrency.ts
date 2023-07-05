const CURRENCY_FORMATER = new Intl.NumberFormat('ru-RU', { 
  style: 'currency', 
  currency: 'RUB'
})

export function formatCurrency(number:number) {
 return CURRENCY_FORMATER.format(number)
}
