import React, { useState } from 'react';
import Box from '@mui/material/Box';
import CustButton from './CustButton';
import TextField from '@mui/material/TextField';
import SmallButtons from './SmallButtons';

const Calculator = () => {
    const [number, setNumber] = useState("");
    const updateTextField = (data) => {
        setNumber((num) => `${num}${data}`);
        console.log(number)
    }
    const clearTextField = () => {
        setNumber("");
    }
    console.log(number);
    return (
        <Box style={{ backgroundColor: '#d3d3d3', width: '20%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: '40px auto' }}>
            <TextField
                variant="outlined"
                size="small"
                sx={{ backgroundColor: 'white', width: '100%', margin: '10px' }}
                value={number}
            />
            <Box style={{ display: 'flex', flexWrap: 'wrap', width: '200px', justifyContent: 'center' }}>
                <SmallButtons data="9" onClick={() => { updateTextField("9") }} />
                <SmallButtons data="8" onClick={() => { updateTextField("8") }} />
                <SmallButtons data="7" onClick={() => { updateTextField("7") }} />
                <SmallButtons data="6" onClick={() => { updateTextField("6") }} />
                <SmallButtons data="5" onClick={() => { updateTextField("5") }} />
                <SmallButtons data="4" onClick={() => { updateTextField("4") }} />
                <SmallButtons data="3" onClick={() => { updateTextField("3") }} />
                <SmallButtons data="2" onClick={() => { updateTextField("2") }} />
                <SmallButtons data="1" onClick={() => { updateTextField("1") }} />
                <SmallButtons data="0" onClick={() => { updateTextField("0") }} />
                <SmallButtons data="." onClick={() => { updateTextField(".") }} />
                <SmallButtons data="-" onClick={() => { updateTextField("-") }} />
            </Box>
            <CustButton data="Clear All" length={125} onClick={() => { clearTextField() }} />
        </Box>
    );
};

export default Calculator;
