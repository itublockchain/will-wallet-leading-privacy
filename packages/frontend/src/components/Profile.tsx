import { DocumentDuplicateIcon } from "@heroicons/react/24/solid"
import React from "react"
import QRCode from "react-qr-code"

import { shorthandAddress } from "../utils"

type ProfileProps = {
  accountName: string
  address: string
}

const Profile = (props: ProfileProps) => {
  const { accountName, address } = props
  return (
    <div className="px-[15px] -mt-1">
      <div className="w-full h-[168px] flex flex-col text-white items-center justify-center gap-2">
        <div className="w-fit h-fit p-2 bg-white rounded-md">
          <QRCode value={address} style={{ width: "80px", height: "80px" }} />
        </div>
        <div>{accountName}</div>
        <div className="border-[1px] rounded-full px-4 py-1 border-[#4CBBAA] flex justify-between gap-4">
          {shorthandAddress(address, 5)}
          <button
            onClick={() => {
              navigator.clipboard.writeText(address)
            }}>
            <DocumentDuplicateIcon className="w-[16px] hover:text-gray-200" />
          </button>
        </div>
      </div>
      <div className="h-[2px] bg-[#4CBBAA] w-full mt-2" />
    </div>
  )
}

export default Profile
