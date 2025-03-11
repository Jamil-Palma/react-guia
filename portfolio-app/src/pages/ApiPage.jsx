import { AppBar, Box, Button, Card, CardActionArea, CardActions, CardContent, Container, Grid, Pagination, Toolbar, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

///formas de consumir una api son: axios - fetch
const ApiPage = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const itemsPerPage = 5;
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
                setData(response.data);
                setLoading(false);
            }
            catch (error) {
                console.log("Error al obtener datos de la api");
                console.log(error);
                setLoading(false);
            }
        }
        fetchData();
    },[]);
    const totalPaginas = Math.ceil(data.length / itemsPerPage);
    const handleChange = (event, value) => {
        setPage(value);
    }
    const paginaActual = data.slice((page - 1) * itemsPerPage, page * itemsPerPage);
   
    
  const handleRedirect = (path) => {
    navigate(path);
  }
    return (
        <Container sx={{py: 8}}>
            <AppBar position="fixed">
                <Toolbar>
                    <Button color="inherit" onClick={() => handleRedirect('/')}>
                        Volver Atras
                    </Button>
                </Toolbar>
            </AppBar>
            <Typography variant="h3" align="center">
                Consumimos api axios
            </Typography>
            {loading ? 
                <Typography variant="body1" align="center">
                    Cargando datos...
                </Typography>
                :
                <Box>

                    <Typography variant="body1" align="center">
                        Mostramos datos de la api
                    </Typography>
                    <Grid container spacing={4}>
                        {paginaActual.map((item)=>(
                            <Grid item key={item.id}>
                                <Card>
                                    <CardContent>
                                        <Typography variant="h5" gutterBottom>
                                            {item.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {item.body}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            Ver más
                                        </Button>
                                    </CardActions>
                                </Card>
                                
                            </Grid>
                        ))}
                    </Grid>
                    <Box>
                        <Pagination count={totalPaginas} page={page} onChange={handleChange} />
                    </Box>
                </Box>
            }
        </Container>
    );
};
export default ApiPage;