import Snack from "./Snack";

const SnackList = ({ snacks }) => {
    return(
        <div className="flex flex-wrap justify-center -mx-1 overflow-hidden text-justify font-sans">
        {snacks.map(snack => (
          <Snack
            snack={snack}
          />
        ))}
        </div>
    )
}

export default SnackList;