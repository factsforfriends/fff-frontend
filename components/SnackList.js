import Snack from "./Snack";

const SnackList = ({ snacks, searchTerm }) => {
    return(
        <div className="flex flex-wrap justify-center -mx-1 overflow-hidden text-justify font-sans">
        {snacks
          .filter(snack => {
            if (
              !searchTerm ||
              snack.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
              snack.tags.toLowerCase().includes(searchTerm.toLowerCase()) ||
              snack.location.toLowerCase().includes(searchTerm.toLowerCase())
            )
            return snack;
          })
          .map(snack => (
            <Snack
              snackData={snack}
            />
          ))
        }
        </div>
    )
}

export default SnackList;