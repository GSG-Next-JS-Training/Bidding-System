interface IProps{
    title:string
    counter:number
    color:string
}

const DataCard = (props:IProps) => {

  return (
    <div
    className="text-white px-10 py-10 rounded-2xl xl:w-[23%] md:w-[48%] sm:w-full w-full"
    style={{ backgroundColor: props.color }}
  >
        <h1 className="my-2 text-[20px] font-bold">{props.title}</h1>
        <p className="text-[35px] font-bold">{props.counter}</p>

    </div>
  )
}

export default DataCard