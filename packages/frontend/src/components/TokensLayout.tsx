import daiImage from "../assets/daiImage.png"
import ethImage from "../assets/ethImage.png"
import usdcImage from "../assets/usdcImage.png"
import usdtImage from "../assets/usdtImage.png"
import Token from "./Token"

const TokensLayout = () => {
  return (
    <div className="w-[345px] h-64 flex justify-center items-center m-auto flex-col gap-2">
      {[
        { name: "ETH", image: ethImage },
        { name: "DAI", image: daiImage },
        { name: "USDT", image: usdtImage },
        { name: "USDC", image: usdcImage }
      ].map((coin) => (
        <Token coin={coin} />
      ))}
    </div>
  )
}

export default TokensLayout
