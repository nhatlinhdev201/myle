/* eslint-disable no-unused-vars */
import { Box, FormControl, InputLabel, MenuItem, Select, Typography, useColorScheme } from '@mui/material'
import LightModeIcon from '@mui/icons-material/LightMode'
import NightsStayIcon from '@mui/icons-material/NightsStay'
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings'

function ModeToggle() {
  const { mode, setMode } = useColorScheme()

  const handleChange = (event) => {
    const modeSelected = event.target.value
    setMode(modeSelected)
  }

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl sx={{ m: 1, minWidth: 160 }} size='small'>
        <InputLabel id="select-theme-label">Mode</InputLabel>
        <Select
          labelId="select-theme-label"
          id="select-theme"
          value={mode}
          label="Mode"
          onChange={handleChange}
        >
          <MenuItem value="light" >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center'
              }}
              gap={3}
            >
              Light
              <LightModeIcon />
            </Box>
          </MenuItem>
          <MenuItem value="dark">
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center'
              }}
              gap={3}
            >
              Dark
              <NightsStayIcon />
            </Box>
          </MenuItem>
          <MenuItem value="system">
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center'
              }}
              gap={3}
            >
              System
              <DisplaySettingsIcon />
            </Box>
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}

export default ModeToggle