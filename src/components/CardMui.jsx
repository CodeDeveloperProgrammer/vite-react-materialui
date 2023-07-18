import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const CardMui = () => {
  return (
    <>
      <Card sx={{ 
        maxWidth: 345, 
        m: "auto",
        transition: "all .5s ease",
        transform: "scale(1)",
        rotate: "-15deg",
        "&:hover": {
          transform: "scale(1.1)",
          rotate: "0deg"
        }
      }}>
        <CardActionArea>
          <CardMedia
            component={"img"}
            image=" https://picsum.photos/500"
            height={"200"}
            width={"200"}
          />

          <CardContent>
            <Typography variant="h5" component="div">
              Card Title
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
              repellendus quo sint nisi non. At magnam nisi obcaecati explicabo
              debitis? Et deleniti quaerat incidunt accusamus sunt eius ducimus.
              Tenetur, laboriosam!
            </Typography>
          </CardContent>
        </CardActionArea>

        <CardActions>
          <Button variant="contained">Add</Button>
          <Button color="error">Edit</Button>
        </CardActions>
      </Card>
    </>
  );
};

export default CardMui;
