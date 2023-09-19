import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Image from "../assets/istockphoto-538889138-612x612 (1) 1.png"

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image= {Image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Agroghala and Food Insecurity
          </Typography>
          <Typography variant="body2" color="text.secondary">
            For the past one year Agroghala has been at the fore-front of fighting food security in Kenya and Subsaharan Africa.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
