import { Typography } from "@mui/material"
import ModeToggle from "~/components/ModeToggle/ModeToggle"

function Home() {
  return (
    <>
      <ModeToggle />
      <Typography variant="h1" color="secondary">
        heading 1
      </Typography>
    </>
  )
}

export default Home