import React, {Component, Fragment} from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import GDSEButton from "../../components/Button";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";

class User extends Component {
    constructor(props) {
        super(props);


    }

    render() {
        return (
            <Fragment>

                <Grid container style={{backgroundColor: "gray"}}>


                    <Grid container className="pt-7" spacing={2}>

                        <Grid item xs={11} sm={11} md={11} lg={11}>
                            <Typography variant="h2" sx={{mb: 5}}>
                                User Registration
                            </Typography>
                        </Grid>


                    </Grid>

                    <ValidatorForm
                        ref="form"
                        className="pt-2"
                        // onSubmit={this.submitPayment}

                    >
                        <Grid container className="pt-2" spacing={3}>

                            <Grid item xs={12} sm={12} md={6} lg={6} >
                                <TextValidator
                                    id="outlinedbasic"
                                    placeholder="First Name"
                                    variant="outlined"
                                    size="small"
                                    // value={this.state.formData.pid}
                                    // onChange={(e) => {
                                    //     let formData = this.state.formData
                                    //     formData.pid = e.target.value
                                    //     this.setState({formData})
                                    // }}
                                    style={{width: '100%',backgroundColor:"white"}}
                                    validators={['required', 'matchRegexp:^(P00_)[0-9]{3,4}$']}

                                />
                            </Grid>

                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                <TextValidator
                                    id="outlinedbasic"
                                    placeholder="Last Name"
                                    variant="outlined"
                                    size="small"
                                    // value={this.state.formData.dropOffDate}
                                    // onChange={(e) => {
                                    //     let formData = this.state.formData
                                    //     formData.dropOffDate = e.target.value
                                    //     this.setState({formData})
                                    // }}
                                    style={{width: '100%',backgroundColor:"white"}}
                                    validators={['required', 'isString']}

                                />
                            </Grid>

                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                <TextValidator
                                    id="outlinedbasic"
                                    placeholder="Email"
                                    variant="outlined"
                                    size="small"
                                    // value={this.state.formData.dropOffLastDate}
                                    // onChange={(e) => {
                                    //     let formData = this.state.formData
                                    //     formData.dropOffLastDate = e.target.value
                                    //     this.setState({formData})
                                    // }}
                                    style={{width: '100%',backgroundColor:"white"}}
                                    validators={['required', 'isString']}

                                />
                            </Grid>


                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                <TextValidator
                                    id="outlinedbasic"
                                    placeholder="User Name"
                                    variant="outlined"
                                    size="small"
                                    // value={this.state.formData.cid}
                                    // onChange={(e) => {
                                    //     let formData = this.state.formData
                                    //     formData.cid = e.target.value
                                    //     this.setState({formData})
                                    // }}
                                    style={{width: '100%',backgroundColor:"white"}}
                                    validators={['required', 'matchRegexp:^(C00_)[0-9]{3,4}$']}

                                />
                            </Grid>


                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                <TextValidator
                                    id="outlinedbasic"
                                    placeholder="Password"
                                    variant="outlined"
                                    size="small"
                                    // value={this.state.formData.uid}
                                    // onChange={(e) => {
                                    //     let formData = this.state.formData
                                    //     formData.uid = e.target.value
                                    //     this.setState({formData})
                                    // }}
                                    style={{width: '100%',backgroundColor:"white"}}
                                    validators={['required', 'matchRegexp:^(U00_)[0-9]{3,4}$']}

                                />
                            </Grid>

                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                <TextValidator
                                    id="outlinedbasic"
                                    placeholder="City"
                                    variant="outlined"
                                    size="small"
                                    // value={this.state.formData.did}
                                    // onChange={(e) => {
                                    //     let formData = this.state.formData
                                    //     formData.did = e.target.value
                                    //     this.setState({formData})
                                    // }}
                                    style={{width: '100%',backgroundColor:"white"}}
                                    validators={['required', 'matchRegexp:^(D00_)[0-9]{3,4}$']}

                                />
                            </Grid>


                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                <TextValidator
                                    id="Street"
                                    placeholder="20000"
                                    variant="outlined"
                                    size="small"
                                    // value={this.state.formData.rentPrice}
                                    // onChange={(e) => {
                                    //     let formData = this.state.formData
                                    //     formData.rentPrice = e.target.value
                                    //     this.setState({formData})
                                    // }}
                                    style={{width: '100%',backgroundColor:"white"}}
                                    validators={['required', 'isPositive']}

                                />
                            </Grid>


                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                <TextValidator
                                    id="outlinedbasic"
                                    placeholder="Street Nm"
                                    variant="outlined"
                                    size="small"
                                    // value={this.state.formData.damagingPrice}
                                    // onChange={(e) => {
                                    //     let formData = this.state.formData
                                    //     formData.damagingPrice = e.target.value
                                    //     this.setState({formData})
                                    // }}
                                    style={{width: '100%',backgroundColor:"white"}}
                                    validators={['required', 'isPositive']}

                                />
                            </Grid>

                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                <TextValidator
                                    id="outlinedbasic"
                                    placeholder="Zip Code"
                                    variant="outlined"
                                    size="small"
                                    // value={this.state.formData.discount}
                                    // onChange={(e) => {
                                    //     let formData = this.state.formData
                                    //     formData.discount = e.target.value
                                    //     this.setState({formData})
                                    // }}
                                    style={{width: '100%',backgroundColor:"white"}}
                                    validators={['required', 'isPositive']}

                                />
                            </Grid>


                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                <TextValidator
                                    id="outlinedbasic"
                                    placeholder="Last Value"
                                    variant="outlined"
                                    size="small"
                                    // value={this.state.formData.totalPrice}
                                    // onChange={(e) => {
                                    //     let formData = this.state.formData
                                    //     formData.totalPrice = e.target.value
                                    //     this.setState({formData})
                                    // }}
                                    style={{width: '100%',backgroundColor:"white"}}
                                    validators={['required', 'isPositive']}

                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                <TextValidator
                                    id="outlinedbasic"
                                    placeholder="Long Value"
                                    variant="outlined"
                                    size="small"
                                    // value={this.state.formData.totalPrice}
                                    // onChange={(e) => {
                                    //     let formData = this.state.formData
                                    //     formData.totalPrice = e.target.value
                                    //     this.setState({formData})
                                    // }}
                                    style={{width: '100%',backgroundColor:"white"}}
                                    validators={['required', 'isPositive']}

                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                <TextValidator
                                    id="outlinedbasic"
                                    placeholder="Mobile No"
                                    variant="outlined"
                                    size="small"
                                    // value={this.state.formData.totalPrice}
                                    // onChange={(e) => {
                                    //     let formData = this.state.formData
                                    //     formData.totalPrice = e.target.value
                                    //     this.setState({formData})
                                    // }}
                                    style={{width: '100%',backgroundColor:"white"}}
                                    validators={['required', 'isPositive']}

                                />
                            </Grid>

                            <Grid container style={{marginTop: '10px'}} direction="row" justifyContent="flex-end"
                                  alignItems="center">
                                <GDSEButton type="submit" size="small" label={"Cancel"}
                                            variant="contained"/>
                                <GDSEButton type="submit" size="small" label={"Save"}
                                            variant="contained"/>
                            </Grid>


                        </Grid>


                    </ValidatorForm>


                    <Grid container style={{marginTop: '10px'}}>

                        <TableContainer component={Paper}>
                            <Table sx={{minWidth: 650}} aria-label="user table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="right">First Name</TableCell>
                                        <TableCell align="right">Last Name</TableCell>
                                        <TableCell align="right">Email</TableCell>
                                        <TableCell align="right">User Name</TableCell>
                                        <TableCell align="right">Password</TableCell>
                                        <TableCell align="right">City</TableCell>
                                        <TableCell align="right">Street</TableCell>
                                        <TableCell align="right">Street No</TableCell>
                                        <TableCell align="right">Zip Code</TableCell>
                                        <TableCell align="right">Last Value</TableCell>
                                        <TableCell align="right">Long Value</TableCell>
                                        <TableCell align="right">Mobile No</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>

                                    <TableRow>
                                        <TableCell align="right">sd</TableCell>
                                        <TableCell align="right">df</TableCell>
                                        <TableCell align="right">d</TableCell>
                                        <TableCell align="right">d</TableCell>
                                        <TableCell align="right">d</TableCell>

                                        <TableCell align="right">

                                        </TableCell>
                                    </TableRow>

                                </TableBody>
                            </Table>

                        </TableContainer>
                    </Grid>

                    {/*<GDSESnackBar*/}
                    {/*    open={this.state.alert}*/}
                    {/*    onClose={() => {*/}
                    {/*        this.setState({alert: false})*/}
                    {/*    }}*/}
                    {/*    message={this.state.message}*/}
                    {/*    autoHideDuration={3000}*/}
                    {/*    severity={this.state.severity}*/}
                    {/*    variant="filled"*/}

                    {/*/>*/}
                </Grid>


            </Fragment>


        )
    }

}

export default User