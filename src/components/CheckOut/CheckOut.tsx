import { Button, FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import { useState } from "react";
import { _IsValidAddress, _IsValidCity, _IsValidCountry, _IsValidFname, _IsValidState, _IsValidZipcode, errorMessages } from "../../helpers/Validations";
import { useNavigate } from "react-router-dom";

const CheckOut: React.FC = () => {
    const [fname, setName] = useState<string>("");
    const [address, setAddress] = useState<string>("");
    const [country, setCountry] = useState<string>("");
    const [state, setState] = useState<string>("");
    const [city, setCity] = useState<string>("");
    const [zipcode, setZipcode] = useState<string>("");
    const [nameErr, setNameErr] = useState<string>("");
    const [addressErr, setAddressErr] = useState<string>("");
    const [countryErr, setCountryErr] = useState<string>("");
    const [stateErr, setStateErr] = useState<string>("");
    const [cityErr, setCityErr] = useState<string>("");
    const [zipcodeErr, setZipcodeErr] = useState<string>("");

    const navigate = useNavigate();

    const handleShippingForm = (e: React.FormEvent) => {
        e.preventDefault();

        const errors = {
            fname: !_IsValidFname(fname) ? errorMessages.name : "",
            address: !_IsValidAddress(address) ? errorMessages.address : "",
            country: !_IsValidCountry(country) ? errorMessages.country : "",
            state: !_IsValidState(state) ? errorMessages.state : "",
            city: !_IsValidCity(city) ? errorMessages.city : "",
            zipcode: !_IsValidZipcode(zipcode) ? errorMessages.zipcode : ""
        }

        if (errors.fname || errors.address || errors.country || errors.state || errors.city || errors.zipcode) {
            setNameErr(errors.fname);
            setAddressErr(errors.address);
            setCountryErr(errors.country);
            setStateErr(errors.state);
            setCityErr(errors.city);
            setZipcodeErr(errors.zipcode);
            return;

            clearErrors();
        }
        navigate("/ordersuccess")
        
    }

    const clearErrors = () => {
        setNameErr("");
        setAddressErr("");
        setCountryErr("");
        setStateErr("");
        setCityErr("");
        setZipcodeErr("");
    }

    return (
        <>
            <Grid container spacing={2}>
                <Grid size={{ xs: 6, md: 8 }}>
                    <Box sx={{ width: 500, marginLeft: 10 }}>
                        <form id="shippingDetailsForm" onSubmit={handleShippingForm}>
                            <Typography variant="h6">Shipping Details</Typography>
                            <TextField
                                id="name"
                                fullWidth
                                margin="normal"
                                label="Name"
                                value={fname}
                                onChange={(e) => setName(e.target.value)}
                                variant="outlined"
                                type="text"
                                size="small"
                                error={!!nameErr}
                                helperText={nameErr}
                            />
                            <TextField
                                id="address"
                                fullWidth
                                margin="normal"
                                label="Address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                variant="outlined"
                                type="text"
                                size="small"
                                error={!!addressErr}
                                helperText={addressErr}
                            />
                            <FormControl sx={{ minWidth: 120 }} size="small" fullWidth margin="normal">
                                <InputLabel id="demo-select-country-label">Country</InputLabel>
                                <Select
                                    labelId="demo-select-country-label"
                                    id="demo-select-country"
                                    value={country}
                                    label="Country"
                                    onChange={(e) => setCountry(e.target.value)}
                                    error={!!countryErr}
                                >
                                    <MenuItem value=""> <em>Select a country</em>
                                    </MenuItem>
                                    <MenuItem value="IN">India</MenuItem>
                                    <MenuItem value="USA">United States of America</MenuItem>
                                    <MenuItem value="UK">United Kingdom</MenuItem>
                                </Select>
                                <FormHelperText>{countryErr}</FormHelperText>
                            </FormControl>
                            <TextField
                                id="city"
                                fullWidth
                                margin="normal"
                                label="City"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                variant="outlined"
                                type="text"
                                size="small"
                                error={!!cityErr}
                                helperText={cityErr}
                            />


                            <FormControl sx={{ minWidth: 120 }} size="small" margin="normal">
                                <InputLabel id="demo-select-state-label">State</InputLabel>
                                <Select
                                    labelId="demo-select-state-label"
                                    id="demo-select-state"
                                    value={state}
                                    label="State"
                                    onChange={(e) => setState(e.target.value)}
                                    error={!!stateErr}
                                >
                                    <MenuItem value=""> <em>Select a state</em>
                                    </MenuItem>
                                    <MenuItem value="KA">Karnataka</MenuItem>
                                    <MenuItem value="MH">Maharashtra</MenuItem>
                                    <MenuItem value="AP">Andhra Pradesh</MenuItem>
                                </Select>
                                <FormHelperText>{stateErr}</FormHelperText>
                            </FormControl>
                            <FormControl sx={{ m: 1, minWidth: 120 }} variant="standard">
                                <TextField
                                    id="zipcode"
                                    fullWidth
                                    margin="dense"
                                    label="Zip Code"
                                    value={zipcode}
                                    onChange={(e) => setZipcode(e.target.value)}
                                    variant="outlined"
                                    type="text"
                                    size="small"
                                    error={!!zipcodeErr}
                                    helperText={zipcodeErr}
                                />
                            </FormControl>

                            <Button type="submit" variant="contained" fullWidth>
                                Place your order
                            </Button>
                        </form>
                    </Box>
                </Grid>
                <Grid size={{ xs: 6, md: 4 }}>
                    Checkout Details
                </Grid>
            </Grid>
        </>
    )
}

export default CheckOut;