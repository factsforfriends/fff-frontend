import Snack from "./Snack";

const SnackList = ({ snacks, searchTerm }) => {
    return(
        <div className="flex flex-wrap justify-center -mx-1 overflow-hidden text-justify font-sans">
        {snacks
          .filter(snack => {
            if (
              !searchTerm ||
              snack.Category.toLowerCase().includes(searchTerm.toLowerCase()) ||
              snack.Tags.toLowerCase().includes(searchTerm.toLowerCase()) ||
              snack.Location.toLowerCase().includes(searchTerm.toLowerCase())
            )
            return snack;
          })
          .map(snack => (
            <Snack
              snack={snack}
            />
          ))
        }
        </div>
    )
}

export default SnackList;