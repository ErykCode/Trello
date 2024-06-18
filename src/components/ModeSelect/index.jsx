import { useColorScheme } from '@mui/material/styles'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import LightMode from '@mui/icons-material/LightMode'
import DarkMode from '@mui/icons-material/DarkMode'

function ModeSelect() {
    const { mode, setMode } = useColorScheme()
    const handleChange = (event) => {
        const selectMode = event.target.value
        setMode(selectMode)
    }

    return (
        <FormControl sx={{ minWidth: 120 }} size="small">
            <InputLabel id="lable_select_drank_light_mode">Mode</InputLabel>
            <Select
                labelId="lable_select_drank_light_mode"
                id="demo-select-small"
                value={mode}//ahiiiiiiiiiii
                label="Mode"
                onChange={handleChange}
            >
                <MenuItem value='light'>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <LightMode fontSize='small' /> Light
                    </div>
                </MenuItem>
                <MenuItem value='dark'>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <DarkMode fontSize='small' /> Dark
                    </div>
                </MenuItem>
            </Select>
        </FormControl>
    )
}

export default ModeSelect
