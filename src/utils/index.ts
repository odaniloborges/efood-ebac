export const formatarPreco = (valor?: number) => {
  if (!valor) return '0,00'
  return valor.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })
}

export const getTotalPrice = (items: Prato[]) => {
  return items.reduce((acumulador, valorAtual) => {
    if (valorAtual.preco) {
      return (acumulador += valorAtual.preco)
    }
    return 0
  }, 0)
}
