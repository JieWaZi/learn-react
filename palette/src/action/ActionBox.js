

export const CHANGE_R = 'CHANGE_R';
export const CHANGE_G = 'CHANGE_G';
export const CHANGE_B = 'CHANGE_B';

export const changeR = (value) => {
    return {
        'type' : CHANGE_R,
        'value' : value
    }
}

export const changeG = (value) => {
    return {
        'type' : CHANGE_G,
        'value' : value
    }
}

export const changeB = (value) => {
    return {
        'type' : CHANGE_B,
        'value' : value
    }
}