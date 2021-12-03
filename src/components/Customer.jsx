import React from 'react'

function Customer(props) {
    return (
        <div>
           <CustomerProfile id={props.id} image={props.image} name={props.name}/>
           <CustomerInfo birthday={props.birthday} gender={props.gender}/>
           {/* 고객정보를 컴포넌트로 나눠서 구조화하여 계층적으로 화면에 출력 */}
        </div>
    )
}

function CustomerProfile(props){
    return(
        <div>
            <img src={props.image} alt="profile" />
            <h2>{props.name}({props.id})</h2>
        </div>
    )
}

function CustomerInfo(props){
    return(
        <div>
            <p>{props.birthday}</p>
            <p>{props.gender}</p>
            <p>{props.job}</p>
        </div>
    )
}

export default Customer
