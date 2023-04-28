const Token = ({ coin }) => {
  return (
    <div className="flex justify-center items-center bg-gradient-to-b from-[#16c9ae] to-[#4e75a2] w-full h-[50px] rounded-full">
      <div
        className="w-full h-[47px] rounded-full flex justify-left items-center px-3"
        style={{ background: "#5986AD" }}>
        <img src={coin.image} className="w-[30px] h-[30px] mr-2 object-cover" />
        <p className="text-lg opacity-70 shadow-sm select-none">{coin.name}</p>
      </div>
    </div>
  )
}

export default Token
