import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import InputMask from 'react-input-mask'

import { RootReducer } from '../../store'
import { usePurchaseMutation } from '../../services/api'

import Card from '../Card'
import Button from '../Button'
import { openCart, clearCart } from '../../store/reducers/cart'
import { closeCheckout, closeConfirmation } from '../../store/reducers/checkout'
import { formatarPreco, getTotalPrice } from '../../utils'

import * as S from './styles'

const Checkout = () => {
  const { isOpen, completed } = useSelector(
    (state: RootReducer) => state.checkout
  )
  const [purchase, { isLoading, data, isSuccess }] = usePurchaseMutation()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const [payment, setPayment] = useState(false)

  const close = () => {
    dispatch(closeCheckout())
  }

  useEffect(() => {
    if (isSuccess) {
      dispatch(clearCart())
    }
  }, [isSuccess, dispatch])

  const finalize = () => {
    dispatch(closeConfirmation())
  }

  const backToCart = () => {
    dispatch(openCart())
    close()
  }

  const form = useFormik({
    initialValues: {
      fullname: '',
      endereco: '',
      cidade: '',
      cep: '',
      numero: '',
      complemento: '',
      cardDisplayName: '',
      cardNumber: '',
      cvv: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      fullname: Yup.string()
        .min(5, 'O nome deve ter pelo menos 5 caracteres')
        .required('Campo obrigatório'),
      endereco: Yup.string().required('Campo obrigatório'),
      cidade: Yup.string().required('Campo obrigatório'),
      cep: Yup.string()
        .matches(/^\d{5}-\d{3}$/, 'CEP deve estar no formato 12345-678')
        .required('Campo obrigatório'),
      numero: Yup.string().required('Campo obrigatório'),
      complemento: Yup.string(),
      cardDisplayName: Yup.string().required('Campo obrigatório'),
      cardNumber: Yup.string().required('Campo obrigatório'),
      cvv: Yup.string()
        .matches(/^\d{3}$/, 'CVV deve conter 3 dígitos')
        .required('Campo obrigatório'),
      expiresMonth: Yup.string()
        .matches(/^(0[1-9]|1[0-2])$/, 'Mês deve estar entre 01 e 12')
        .required('Campo obrigatório'),
      expiresYear: Yup.string()
        .matches(/^\d{4}$/, 'Ano deve conter 4 dígitos')
        .required('Campo obrigatório')
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.fullname,
          adress: {
            description: values.endereco,
            city: values.cidade,
            zipCode: values.cep,
            number: Number(values.numero),
            complement: values.complemento
          }
        },
        payment: {
          card: {
            name: values.cardDisplayName,
            number: values.cardNumber,
            code: Number(values.cvv),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.preco
        }))
      })
    }
  })

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  return (
    <>
      {isSuccess && data ? (
        <S.Container className={completed ? 'completed' : ''}>
          <S.Overlay onClick={close} />
          <S.Sidebar>
            <Card title={`Pedido Realizado - ${data.orderId}`}>
              <>
                <p>
                  Estamos felizes em informar que seu pedido já está em processo
                  de preparação e, em breve, será entregue no endereço
                  fornecido.
                </p>
                <p>
                  Gostaríamos de ressaltar que nossos entregadores não estão
                  autorizados a realizar cobranças extras.
                </p>
                <p>
                  Lembre-se da importância de higienizar as mãos após o
                  recebimento do pedido, garantindo assim sua segurança e
                  bem-estar durante a refeição.
                </p>
                <p>
                  Esperamos que desfrute de uma deliciosa e agradável
                  experiência gastronômica. Bom apetite!
                </p>
                <Button
                  type="button"
                  onClick={finalize}
                  variant="secondary"
                  title="Concluir o checkout"
                >
                  Concluir
                </Button>
              </>
            </Card>
          </S.Sidebar>
        </S.Container>
      ) : (
        <S.FormContainer
          className={isOpen ? 'is-open' : ''}
          onSubmit={form.handleSubmit}
        >
          <S.Overlay onClick={close} />
          <S.Sidebar>
            {!payment ? (
              <Card title="Entrega">
                <>
                  <S.InputGroup>
                    <label htmlFor="fullName">Quem irá receber</label>
                    <input
                      type="text"
                      id="fullname"
                      name="fullname"
                      value={form.values.fullname}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('fullName') ? 'error' : ''}
                    />
                  </S.InputGroup>
                  <S.InputGroup>
                    <label htmlFor="endereco">Endereço</label>
                    <input
                      type="text"
                      id="endereco"
                      name="endereco"
                      value={form.values.endereco}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('endereco') ? 'error' : ''}
                    />
                  </S.InputGroup>
                  <S.InputGroup>
                    <label htmlFor="cidade">Cidade</label>
                    <input
                      type="text"
                      id="cidade"
                      name="cidade"
                      value={form.values.cidade}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('cidade') ? 'error' : ''}
                    />
                  </S.InputGroup>
                  <S.Row>
                    <S.InputGroup>
                      <label htmlFor="cep">CEP</label>
                      <InputMask
                        type="text"
                        id="cep"
                        name="cep"
                        value={form.values.cep}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={checkInputHasError('cep') ? 'error' : ''}
                        mask="99999-999"
                      />
                    </S.InputGroup>
                    <S.InputGroup>
                      <label htmlFor="numero">Número</label>
                      <input
                        type="text"
                        id="numero"
                        name="numero"
                        value={form.values.numero}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={checkInputHasError('numero') ? 'error' : ''}
                      />
                    </S.InputGroup>
                  </S.Row>
                  <S.InputGroup>
                    <label htmlFor="complemento">Complemento</label>
                    <input
                      type="text"
                      id="complemento"
                      name="complemento"
                      value={form.values.complemento}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('complemento') ? 'error' : ''
                      }
                    />
                  </S.InputGroup>
                  <Button
                    type="button"
                    onClick={() => setPayment(true)}
                    variant="secondary"
                    title="Clique para o Pagamento"
                  >
                    Continuar com o pagamento
                  </Button>
                  <Button
                    type="button"
                    onClick={backToCart}
                    variant="secondary"
                    title="Clique para o carrinho"
                  >
                    Voltar para o carrinho
                  </Button>
                </>
              </Card>
            ) : (
              <Card
                title={`Pagamento - Valor a pagar R$ ${formatarPreco(
                  getTotalPrice(items)
                )}`}
              >
                <>
                  <S.InputGroup>
                    <label htmlFor="cardDisplayName">Nome no cartão</label>
                    <input
                      type="text"
                      id="cardDisplayName"
                      name="cardDisplayName"
                      value={form.values.cardDisplayName}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('cardDisplayName') ? 'error' : ''
                      }
                    />
                  </S.InputGroup>
                  <S.Row>
                    <S.InputGroup>
                      <label htmlFor="cardNumber">Número do cartão</label>
                      <InputMask
                        type="text"
                        id="cardNumber"
                        name="cardNumber"
                        value={form.values.cardNumber}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('cardNumber') ? 'error' : ''
                        }
                        mask="9999.9999.9999.9999"
                      />
                    </S.InputGroup>
                    <S.InputGroup maxWidth="87px">
                      <label htmlFor="cvv">CVV</label>
                      <InputMask
                        type="text"
                        id="cvv"
                        name="cvv"
                        value={form.values.cvv}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={checkInputHasError('cvv') ? 'error' : ''}
                        mask="999"
                      />
                    </S.InputGroup>
                  </S.Row>
                  <S.Row>
                    <S.InputGroup>
                      <label htmlFor="expiresMonth">Mês de vencimento</label>
                      <InputMask
                        type="text"
                        id="expiresMonth"
                        name="expiresMonth"
                        value={form.values.expiresMonth}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('expiresMonth') ? 'error' : ''
                        }
                        mask="99"
                      />
                    </S.InputGroup>
                    <S.InputGroup>
                      <label htmlFor="expiresYear">Ano de vencimento</label>
                      <InputMask
                        type="text"
                        id="expiresYear"
                        name="expiresYear"
                        value={form.values.expiresYear}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('expiresYear') ? 'error' : ''
                        }
                        mask="9999"
                      />
                    </S.InputGroup>
                  </S.Row>
                  <Button
                    type="submit"
                    onClick={form.handleSubmit}
                    variant="secondary"
                    title="Clique para o pagamento"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Finalizando compra...' : 'Finalizar compra'}
                  </Button>
                  <Button
                    type="button"
                    onClick={() => setPayment(false)}
                    variant="secondary"
                    title="Clique para edicao de endereco"
                  >
                    Voltar para edição de endereço
                  </Button>
                </>
              </Card>
            )}
          </S.Sidebar>
        </S.FormContainer>
      )}
    </>
  )
}

export default Checkout
