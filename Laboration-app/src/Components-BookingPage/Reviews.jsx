import React, { useEffect, useState } from "react";
import {
  Container,
  Paper,
  Rating,
  Typography,
  Box,
  Grid2,
} from "@mui/material";
import { fetchReviews } from "../Api/Products-rewiev";

const Reviews = () => {
  const [Reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      const allReviews = await fetchReviews();
      const reviews10 = allReviews.slice(0, 10);
      const reviewsFiltered = reviews10.filter((Review) => Review.rating >= 3);

      console.log(reviewsFiltered);

      setReviews(reviewsFiltered);
    };
    getReviews();
  }, []);

  return (
    <Container className="reviews-section">
      <Box className="sun-icon-content">
        <img
          className="sun-icon"
          src="/sun-color-icon.png"
          alt="ikon på en sol"
          loading="lazy"
        />
      </Box>

      <Typography className="reviews-title" variant="h4">
        Recensioner
      </Typography>

      <Box className="reviews-content">
        <Grid2 container spacing={0}>
          {Reviews.map((Review, index) => (
            <Grid2 size={{ xs: 12, sm: 6, md: 12, lg: 12 }} key={index}>
              <Paper className="reviews-card" style={{ margin: "1rem" }}>
                <Typography className="reviews-card-title" variant="h5">
                  {Review.reviewerName}
                </Typography>

                <Rating name="read-only" value={Review.rating} readOnly />
                <Typography className="reviews-card-comment" variant="h6">
                  {Review.comment}
                </Typography>
              </Paper>
            </Grid2>
          ))}
        </Grid2>
      </Box>
    </Container>
  );
};
export default Reviews;
