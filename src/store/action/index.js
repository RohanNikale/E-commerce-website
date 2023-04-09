export const depositMoney= (amount)=>{
    return {
            type:"deposit",
            payload:amount
        
    }
}

export const withdrawMony=(amount)=>{
    return {
            type:"withdraw",
            payload:amount
       
    }
}