'use client';

import { Button, Typography, Grid, IconButton } from '@mui/material';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function DiscoverSection() {
  return (
    <section className="relative bg-gradient-to-b from-white via-slate-50 to-white dark:from-neutral-800 dark:via-neutral-900 dark:to-neutral-800 py-12 px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <Typography
          variant="h4"
          component="h2"
          className="font-bold text-neutral-800 dark:text-white mb-4 transition-transform duration-500 hover:scale-105 hover:text-indigo-600 dark:hover:text-indigo-400"
        >
          <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-sky-500 dark:from-indigo-400 dark:to-teal-400 animate-none hover:animate-pulse">
            Discover Ranchi Like Never Before!
          </span>
          <br className="hidden md:block" />
          <span className="text-indigo-500 dark:text-indigo-400">
            Renting with Ranchi Rides is the Best Choice.
          </span>
        </Typography>

        <Typography
          variant="body2"
          className="text-slate-600  dark:text-slate-300 leading-relaxed transition-all duration-300 hover:text-slate-800 dark:hover:text-white !mb-6"
        >
          Ride into the heart of Ranchi and uncover the city’s hidden charms at your own pace. 
          Ranchi Rides offers high-quality, stylish bikes that suit your lifestyle. 
          Enjoy more than just a ride — you’ll experience freedom, joy, and adventure.
        </Typography>
       
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              startIcon={<DirectionsBikeIcon />}
              className="!bg-gradient-to-r !from-blue-500 !to-purple-500 text-white"
            >
              Rent a Bike
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Button
              variant="outlined"
              color="primary"
              fullWidth
              startIcon={<LocationOnIcon />}
              className="!text-indigo-600 dark:!text-indigo-400 border-indigo-600 dark:border-indigo-400"
            >
              Find a Location
            </Button>
          </Grid>
        </Grid>
      </div>
    </section>
  );
}
