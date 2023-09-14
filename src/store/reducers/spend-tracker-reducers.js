import * as ActionTypes from '../../constants/actionTypes';

const initialState = {
    monthlyBudget: 0,
    spentPercent: 0,
    spentCategory: null,
    monthlySpend: 0, 
    healthAndFitnessPercent:0,
    beautyPercent:0,
    clothingPercent:0,
    cosmeticsPercent:0
}

const spendTrackerReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.TRACK_MONTHLY_SPEND: {
            return { 
                ...state,
                monthlyBudget: action.payload.monthlyBudget,
                spentPercent: action.payload.spentPercent,
                spentCategory: action.payload.spentCategory,
                monthlySpend: action.payload.monthlySpend,
            }
        }

        case ActionTypes.HEALTH_AND_FITNESS: {
            return { 
                ...state,
                healthAndFitnessPercent: action.payload.healthAndFitnessPercent
            }
        }

        case ActionTypes.BEAUTY: {
            return { 
                ...state,
                beautyPercent: action.payload.beautyPercent
            }
        }

        case ActionTypes.CLOTHING: {
            return { 
                ...state,
                clothingPercent: action.payload.clothingPercent
            }
        }

        case ActionTypes.COSMETICS: {
            return { 
                ...state,
                cosmeticsPercent: action.payload.cosmeticsPercent
            }
        }
            
        default:
            return state
    }
}

export default spendTrackerReducer
