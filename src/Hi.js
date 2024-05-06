function Hi(){
    let myName='Devanshu'
    let number=456;

    let fullName=()=>{
        return 'Devanshu Kansal'
    }

    return(
        <h3>
            Message Number: {number},  
            this is the future speaking. My name is {myName}, And my full name is {fullName()}
        </h3>
    )
}

export default Hi;