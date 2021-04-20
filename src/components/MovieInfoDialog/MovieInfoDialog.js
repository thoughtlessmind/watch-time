import Dialog from "CustomComponents/Dialog"
import React from "react"

const MovieInfoDialog = () => {
  return (
    <Dialog open className='p-8' onClose={() => console.log("asdf")}>
      <div>
        <h4 className='text-3xl text-white font-medium'>Movie Name</h4>
      </div>
    </Dialog>
  )
}

export default MovieInfoDialog
