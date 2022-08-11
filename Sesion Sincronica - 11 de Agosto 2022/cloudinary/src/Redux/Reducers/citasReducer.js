import { citasTypes } from "../Types/citasTypes";

export const citasReducer = ( state = [], action ) => {
    switch (action.type) {
        case citasTypes.add:
            return [...state, action.payload ];

        case citasTypes.read:
            return action.payload

        case citasTypes.delete:
            return state.filter( date => date.email !== action.payload )

        case citasTypes.edit:
            const stateNew = state.filter( date => date.email !== action.payload.email )
            return [...stateNew, action.payload]
            
        default:
            return state;
    }
}