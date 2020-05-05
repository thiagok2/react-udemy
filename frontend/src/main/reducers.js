import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    todo: () => ({
        description: 'Ler livro',
        list: [{
                _id: 1,
                description: 'Pagar fatura do cartão',
                done: true
            },
            {
                _id: 2,
                description: 'Consulta médica sexta',
                done: true
            },
            {
                _id: 3,
                description: 'Reunião normativas',
                done: true
            }

        ]
    })
})

export default rootReducer