import {type NavigateFunction, useNavigate } from "react-router-dom"


const Beneficiaries = () => {
    const navigation: NavigateFunction = useNavigate()
    return <>
    <div className="w-[375px] h-[600px]">
        <div onClick={() => navigation("/home")}>Geri</div>
    </div>
    </> 
}

export default Beneficiaries