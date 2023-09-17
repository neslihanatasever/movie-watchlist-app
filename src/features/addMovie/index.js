import React, {useState} from 'react'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchButton from '@mui/icons-material/Search';


const AddMovie = () => {
  const [query, setQuery] = useState("")
  return (
    <div style={{
      margin: "auto",
      padding: "15px",
      maxWidth: "570px",
      alignContent: "center",
      marginTop: "50px",
    }}>
      <Paper component="form"> sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 540 }}

      </Paper>
    </div>
  )
}

export default AddMovie