import React, {Component, Fragment} from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import user from "../../assets/img/user.png"
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import GDSEButton from "../../components/Button";
class ProductManage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <Grid  container className="pt-7" spacing={3} style={{backgroundColor:"#d9d9d9"}}>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <div>
                            <Typography variant="h4">Product Management</Typography>
                        </div>
                    </Grid>

                </Grid>

                <ValidatorForm
                    ref="form"
                    className="pt-2"
                    // onSubmit={this.submitPayment}

                >
                    <Grid container className="pt-2" spacing={3} style={{backgroundColor:"#d9d9d9"}}>
                        <Grid item xs={12} sm={12} md={6} lg={6} >
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Title"
                                variant="outlined"
                                size="small"
                                style={{width: '100%',backgroundColor:"white"}}
                                validators={['required', 'matchRegexp:^(P00_)[0-9]{3,4}$']}

                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} >
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Price"
                                variant="outlined"
                                size="small"
                                style={{width: '100%',backgroundColor:"white"}}
                                validators={['required', 'matchRegexp:^(P00_)[0-9]{3,4}$']}

                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} >
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Category"
                                variant="outlined"
                                size="small"
                                style={{width: '100%',backgroundColor:"white"}}
                                validators={['required', 'matchRegexp:^(P00_)[0-9]{3,4}$']}

                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} >
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Description"
                                variant="outlined"
                                size="small"
                                style={{width: '100%',backgroundColor:"white"}}
                                validators={['required', 'matchRegexp:^(P00_)[0-9]{3,4}$']}

                            />
                        </Grid>
                    </Grid>
                </ValidatorForm>


                <Grid  container className="pt-2" spacing={3} style={{backgroundColor:"#d9d9d9"}}>
                    <Grid item xs={5} sm={5} md={5} lg={5} >
                        <div sx={{maxWidth: 120}}>
                            {/*{console.log(this.handleChange.event)}*/}
                            {/*<img src={this.handleChange.event} alt=""/>*/}
                            <img src={user} alt=""/>
                        </div>
                        <TextField
                            id="input-with-icon-textfield"
                            label="Add Product"
                            type={'file'}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">

                                    </InputAdornment>
                                ),
                            }}
                            // onClick={this.setState.file}
                            variant="standard"
                        />
                    </Grid>


                </Grid>

                <Grid container style={{marginTop: 150}} direction="row" justifyContent="flex-end"
                      alignItems="center" style={{backgroundColor:"#d9d9d9"}}>
                    <GDSEButton type="submit" size="bif" label={"Clear"}
                                variant="contained"
                                style={{marginRight: 20,backgroundColor:"#98801C"}}
                    />
                    <GDSEButton type="submit" size="big" label={"Save"}
                                style={{marginRight: 20}}
                                variant="contained"/>
                </Grid>

            </Fragment>
        )
    }
}

export default ProductManage