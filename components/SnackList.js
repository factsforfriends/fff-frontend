import Snack from "./Snack";

const SnackList = ({ snacks, searchTerm }) => {
    return(
        <section>
          <div class="container px-10 pt-6 mx-auto">
            <div class="flex flex-wrap -m-1">
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
                    fullWidth={false}
                  />
                ))
              }
            </div>
          </div>
        </section>
    )
}

export default SnackList;