import daiImage from "../assets/daiImage.png"
import ethImage from "../assets/ethImage.png"
import usdcImage from "../assets/usdcImage.png"
import usdtImage from "../assets/usdtImage.png"
import Token from "./Token"

const tokens = [
  {
    name: "ETH",
    image: ethImage,
    balance: 1883.1883
  },
  {
    name: "DAI",
    image: daiImage,
    tokenAddress: "0x4BEf76b6b7f2823C6c1f4FcfEACD85C24548ad7e",
    balance: 123.134
  },
  {
    name: "USDT",
    image: usdtImage,
    tokenAddress: "0x5aea5775959fbc2557cc8789bc1bf90a239d9a91",
    balance: 0.38497
  },
  {
    name: "USDC",
    image: usdcImage,
    tokenAddress: "0x3355df6D4c9C3035724Fd0e3914dE96A5a83aaf4",
    balance: 1773.1773
  },
  {
    name: "WETH",
    image: daiImage,
    tokenAddress: "0x5aea5775959fbc2557cc8789bc1bf90a239d9a91",
    balance: 982.2354
  }
]

const TokenContainer = () => {
  return (
    <div className="overflow-hidden h-52 py-2">
      <ul className="w-[340px] h-full flex justify-start items-center m-auto flex-col gap-[5px] overflow-y-scroll overflow-x-hidden scrollbar-hide">
        {tokens.map((coin) => (
          <li className="w-full" key={coin.name}>
            <Token coin={coin} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TokenContainer
