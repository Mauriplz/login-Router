/*const x = {
    nombre:'Mauricio Plaza',
    mail: 'msdsadfs',
    logged : true

}*/


export const loginReducer = (state={}, action) =>{

    switch(action.type){
        case 'login':
            return ({
                nombre:action.payload,
                mail: 'msdsadfs',
                logged : true
            })
        
        case 'logout':
            return ({
                logged:false
            })

        default:
            return state
    }

}