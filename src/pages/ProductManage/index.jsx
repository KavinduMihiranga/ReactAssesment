import React, {Component, Fragment} from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import user from "../../assets/img/user.png"
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import GDSEButton from "../../components/Button";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ProductServices from "../../service/ProductServices";
import GDSESnackBar from "../../components/SnackBar";
import Autocomplete from "@mui/material/Autocomplete";
import {Category} from "@mui/icons-material";
class ProductManage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formData: {
                title: "",
                price: "",
                description: "",
                image: "",
                category: ""

            },
            alert: false,
            message: '',
            severity: '',

            data: [],
            btnLabel: 'Save',
            btnColor: 'primary',

            file: null,

            category:[
                { label: 'Fruits' },
                { label: 'Vegitabal' },
                { label: 'Fish'},
                { label: 'Sweets' },
                { label: 'Spicy' },
            ]
        }



    }
    deleteProduct = async (pid) => {
        let params = {
            pid: pid
        }
        let res = await ProductServices.deleteProduct(params);
        if (res.status === 200) {
            this.setState({
                alert: true,
                message: res.data.message,
                severity: "success"
            })
            this.loadData();
        } else {
            this.setState({
                alert: true,
                message: res.response.data.message,
                severity: "error"
            });
        }
    }
    updateProduct = (data) => {
        console.log(data);
        this.setState({
            btnLabel: "update",
            btnColor: "success",
            formData: {
                title: "",
                price: "",
                description: "",
                image: "",
                category: ""


            }
        })
    };

    clearFields = (e) => {
        this.setState({
            formData: {
                title: "",
                price: "",
                description: "",
                image: "",
                category: ""

            }
        });
    }

    submitProduct = async () => {
        let formData = this.state.formData;
        if (this.state.btnLabel === "Save") {
            let res = await ProductServices.postProduct(formData);
            console.log(res);

            if (res.status === 201) {
                this.setState({
                    alert: true,
                    message: res.data.message,
                    severity: "success"
                });
                this.clearFields();
                this.loadData();
            } else {
                this.setState({
                    alert: true,
                    message: res.response.data.message,
                    severity: "error"
                });
            }

        } else {
            let res = await ProductServices.putProduct(formData);
            if (res.status === 200) {
                this.setState({
                    alert: true,
                    message: res.data.message,
                    severity: "success",
                    btnLabel: "Save",
                    btnColor: "primary"
                });
                this.clearFields();
                this.loadData();
            } else {
                this.setState({
                    alert: true,
                    message: res.response.data.message,
                    severity: "error"
                });
            }
        }
    }

    loadData = async () => {
        let res = await ProductServices.fetchProduct();
        if (res.status === 200) {
            this.setState({
                data: res.data.data
            })
        }
        console.log(this.state.data)
    }

    componentDidMount() {
        this.loadData();

        console.log(this.state.data)
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
                                value={this.state.formData.title}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.title = e.target.value
                                    this.setState({formData})
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} >
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Price"
                                variant="outlined"
                                size="small"
                                style={{width: '100%',backgroundColor:"white"}}
                                value={this.state.formData.price}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.price = e.target.value
                                    this.setState({formData})
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} >
                            {/*<TextValidator*/}
                            {/*    id="outlinedbasic"*/}
                            {/*    placeholder="Category"*/}
                            {/*    variant="outlined"*/}
                            {/*    size="small"*/}
                            {/*    style={{width: '100%',backgroundColor:"white"}}*/}
                            {/*    value={this.state.formData.category}*/}
                            {/*    onChange={(e) => {*/}
                            {/*        let formData = this.state.formData*/}
                            {/*        formData.category = e.target.value*/}
                            {/*        this.setState({formData})*/}
                            {/*    }}*/}
                            {/*/>*/}


                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={this.state.category}
                                sx={{ width: 300 }}
                                style={{width: '100%',backgroundColor:"white"}}
                                renderInput={(params) => <TextField {...params} label="Category" />}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} style={{height:150}}>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Description"
                                // variant="elevation"
                                size="small"
                                style={{width: '100%',backgroundColor:"white"}}
                                value={this.state.formData.description}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.description = e.target.value
                                    this.setState({formData})
                                }}
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
                      alignItems="center" style={{backgroundColor:"#d9d9d9"}} onClick={this.clearFields}>
                    <GDSEButton type="submit" size="bif" label={"Clear"}
                                variant="contained"
                                style={{marginRight: 20,backgroundColor:"#98801C"}}
                    />
                    <GDSEButton type="submit" size="big" label={"Save"}
                                style={{marginRight: 20}}
                                variant="contained"/>
                </Grid>


                <Grid container style={{marginTop: '10px'}}>

                    <TableContainer component={Paper}>
                        <Table sx={{minWidth: 650}} aria-label="user table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="right">Title</TableCell>
                                    <TableCell align="right">Price</TableCell>
                                    <TableCell align="right">Category</TableCell>
                                    <TableCell align="right">Description</TableCell>
                                    <TableCell align="right">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {/*{this.state.data.map((row)=>(*/}
                                <TableRow>
                                    <TableCell align="right">row.title}</TableCell>
                                    <TableCell align="right">row.price}</TableCell>
                                    <TableCell align="right">row.category}</TableCell>
                                    <TableCell align="right">row.description}</TableCell>


                                    <TableCell align="right">
                                        <Tooltip title="Edit">
                                            <IconButton
                                                onClick={() => {
                                                    console.log("edit icon clicked!")
                                                    this.updateProduct();
                                                }}
                                            >
                                                <EditIcon color={"primary"}/>
                                            </IconButton>
                                        </Tooltip>
                                    </TableCell>
                                    <TableCell align="right">
                                        <Tooltip title="Delete">
                                            <IconButton
                                                onClick={() => {
                                                    console.log("delete icon clicked!")
                                                    this.deleteProduct();
                                                }}
                                            >
                                                <DeleteIcon color={"error"}/>
                                            </IconButton>
                                        </Tooltip>
                                    </TableCell>

                                </TableRow>
                                {/*))*/}
                                {/*}*/}

                            </TableBody>
                        </Table>

                    </TableContainer>
                </Grid>
                <GDSESnackBar
                    open={this.state.alert}
                    onClose={() => {
                        this.setState({alert: false})
                    }}
                    message={this.state.message}
                    autoHideDuration={3000}
                    severity={this.state.severity}
                    variant="filled"

                />

            </Fragment>
        )
    }
}

export default ProductManage