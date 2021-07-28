import { useState } from 'react'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
    formControl: {
        minWidth: 400,
        margin: 30,
        font: 20,
        color: "#000"
    }
}))

function SimpleSelect() {
    const classes = useStyles();
    const [age, setAge] = useState("")

    const handleChange = (e) => {
        setAge(e.target.value)
    }

    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel>Choose a topic</InputLabel>
                <Select 
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    vlaue={age}
                    onChange={() => handleChange}
                >
                    <MenuItem value={10}>CustomerService & Support</MenuItem>
                    <MenuItem value={20}>Finance</MenuItem>
                    <MenuItem value={30}>Human Resources</MenuItem>
                    <MenuItem value={30}>Information Technology</MenuItem>
                    <MenuItem value={30}>Legal and Compliance</MenuItem>
                    <MenuItem value={30}>Marketing</MenuItem>
                    <MenuItem value={30}>operations</MenuItem>
                    <MenuItem value={30}>Sales</MenuItem>
                    <MenuItem value={30}>Supply Chain</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}

export default SimpleSelect
