import React, {Component, Fragment} from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import GDSEButton from "../../components/Button";

class CartManage extends Component{
    constructor(props) {
        super(props);

        this.state={
            formData:{

            }
        }
    }
    render() {
        return(
            <Fragment>
                <Grid  container className="pt-7" spacing={3} style={{backgroundColor:"#d9d9d9"}}>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <div>
                            <Typography variant="h4">Cart Management</Typography>
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
                                placeholder="User Name"
                                variant="outlined"
                                size="small"
                                style={{width: '100%',backgroundColor:"white"}}
                                validators={['required', 'matchRegexp:^(P00_)[0-9]{3,4}$']}

                            />

                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} >
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Date"
                                variant="outlined"
                                size="small"
                                type={"date"}
                                style={{width: '100%',backgroundColor:"white"}}
                                validators={['required', 'matchRegexp:^(P00_)[0-9]{3,4}$']}

                            />

                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} >
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Product Title"
                                variant="outlined"
                                size="small"
                                style={{width: '100%',backgroundColor:"white"}}
                                validators={['required', 'matchRegexp:^(P00_)[0-9]{3,4}$']}

                            />

                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} >
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Qty"
                                variant="outlined"
                                size="small"
                                style={{width: '100%',backgroundColor:"white"}}
                                validators={['required', 'matchRegexp:^(P00_)[0-9]{3,4}$']}

                            />

                        </Grid>
                    </Grid>

                </ValidatorForm>

                <Grid container style={{marginTop: 250}} direction="row" justifyContent="flex-end"
                      alignItems="center" style={{backgroundColor:"#d9d9d9"}}>
                    <GDSEButton type="submit" size="bif" label={"Clear"}
                                variant="contained"
                                style={{marginTop:50,marginRight: 20,backgroundColor:"#98801C"}}
                    />
                    <GDSEButton type="submit" size="big" label={"Save"}
                                style={{marginTop:50,marginRight: 20}}
                                variant="contained"/>
                </Grid>
            </Fragment>
        )
    }
}

export default CartManage