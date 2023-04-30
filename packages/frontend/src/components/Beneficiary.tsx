const Beneficiary = ({ account, percentage }) => {
    return <div className="w-full">
        <div className="w-[340px] h-[65px] bg-gradient-to-b from-[#4DB8A9] to-[#6C408E] rounded-full">
            <div className="w-[336px] h-[61px] bg-[#5B428F] rounded-full">
                <div><a href={`https://goerli.explorer.zksync.io/address/${account}`} target="blank">{account}</a></div>
                <div>{percentage}</div>
            </div>
        </div>
    </div>
}

export default Beneficiary