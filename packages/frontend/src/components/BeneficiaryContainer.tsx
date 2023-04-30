import Beneficiary from "./Beneficiary"

const BeneficiaryContainer = () => {
  const beneficiaries = [
    { address: "0x373B5054aa6920Ee13504F6524DFcACE9253cb66", percentage: "50%" },
    { address: "0x373B5054aa6920Ee13504F6524DFcACE9253cb66", percentage: "30%" },
    { address: "0x373B5054aa6920Ee13504F6524DFcACE9253cb66", percentage: "20%" }
  ]

  return <>
  <div className="w-[340px] m-auto hide-scroll flex flex-col gap-5">
    {beneficiaries.map((beneficiary) => <Beneficiary account={beneficiary.address} percentage={beneficiary.percentage} />)}
  </div>
  </>
}

export default BeneficiaryContainer;