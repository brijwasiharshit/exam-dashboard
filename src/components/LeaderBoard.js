import { Box, Grid, Typography, Avatar } from "@mui/material";
import React from "react";
import { leaderboardData } from './leaderboardData.js';

const LeaderBoard = () => {
  const styles = {
    activeItem: {
      backgroundColor: '#37afca',
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
      color: 'white',
      textAlign: 'center',
      borderRadius: '16px',
      flex: 1,
      padding: '10px 0',
    },
    inactiveItem: {
      backgroundColor: 'white',
      color: 'black',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      borderRadius: '16px',
      flex: 1,
      padding: '10px 0',
    },
    header: {
      color: 'white',
      display: "flex",
      justifyContent: "space-between",
      paddingY: '20px',
      paddingX: '10px',
      alignItems: 'center',
      width: '100%',
      marginBottom: '20px',
    },
    navContainer: {
      display: 'flex',
      width: '70%',
      justifyContent: 'space-between',
      backgroundColor: 'white',
      padding: '4px',
      borderRadius: '16px',
      marginX: 'auto',
      marginBottom: '20px',
    },
    leaderboardItem: {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: 'white',
      borderRadius: '8px',
      padding: '10px',
      justifyContent: 'space-between',
      marginBottom: '10px',
    },
    leaderboardContainer: {
      width: '70%',
      marginX: 'auto',
    },
    rankNameContainer: {
      display: 'flex',
      alignItems: 'center',
      flex: 1,
    },
    rank: {
      marginRight: '10px',
    },
    name: {
      marginLeft: '10px',
    },
    topItem: {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#37afca',
      color: 'white',
      borderRadius: '8px',
      padding: '10px',
      justifyContent: 'center',
      flexDirection: 'column',
      textAlign: 'center',
      width: '100%',
    },
    avatarContainer: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '10px',
    },
    rankLabel: {
      position: 'absolute',
      bottom: '-10px',
      backgroundColor: '#fff',
      color: '#37afca',
      borderRadius: '50%',
      padding: '1px 6px',
      fontSize: '12px',
      fontWeight: 'bold',
    },
    crownLabel: {
      position: 'absolute',
      top: '-15px',
      width: '24px',
      height: '24px',
    },
    topThreeContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      width: '100%',
    },
    topItemWrapper: {
      flex: '1',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  };

  const topThree = leaderboardData.slice(0, 3);
  const rest = leaderboardData.slice(3);

  return (
    <Grid container sx={{ backgroundColor: "#37afca", minHeight: "100vh" }}>
      <Box sx={styles.header}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
          aria-label="Back"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
        <Typography variant="h5" sx={{ fontWeight: '600' }}>
          Leaderboard
        </Typography>
        <span></span>
      </Box>
      <Box sx={styles.navContainer}>
        <Box sx={styles.activeItem}>All time</Box>
        <Box sx={styles.inactiveItem}>This week</Box>
        <Box sx={styles.inactiveItem}>Month</Box>
      </Box>

      <Box sx={{ width: '70%', marginX: 'auto', marginBottom: '20px' }}>
        <Box sx={styles.topThreeContainer}>
          <Box sx={styles.topItemWrapper}>
            <Box sx={styles.topItem}>
              <Box sx={styles.avatarContainer}>
                <Avatar src={topThree[2].photo} alt={topThree[2].name} sx={{ width: '60px', height: '60px', borderColor : '#54cba1', borderWidth : '3px' }} />
                <Box sx={styles.rankLabel}>{topThree[2].rank}</Box>
              </Box>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>{topThree[2].name}</Typography>
              <Typography variant="body1">{topThree[2].score}</Typography>
            </Box>
          </Box>
          <Box sx={styles.topItemWrapper}>
            <Box sx={styles.topItem}>
              <Box sx={styles.avatarContainer}>
                <Avatar src={topThree[0].photo} alt={topThree[0].name} sx={{ width: '100px', height: '100px' , borderColor : '#e8df6a', borderWidth : '3px' }} />
                <Box sx={styles.crownLabel}>
                </Box>
                <Box sx={styles.rankLabel}>{topThree[0].rank}</Box>
              </Box>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>{topThree[0].name}</Typography>
              <Typography variant="body1">{topThree[0].score}</Typography>
            </Box>
          </Box>
          <Box sx={styles.topItemWrapper}>
            <Box sx={styles.topItem}>
              <Box sx={styles.avatarContainer}>
                <Avatar src={topThree[1].photo} alt={topThree[1].name} sx={{ width: '60px', height: '60px' , borderColor : '#edbe86', borderWidth : '3px' }} />
                <Box sx={styles.rankLabel}>{topThree[1].rank}</Box>
              </Box>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>{topThree[1].name}</Typography>
              <Typography variant="body1">{topThree[1].score}</Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box sx={styles.leaderboardContainer}>
        {rest.map((item) => (
          <Box key={item.rank} sx={styles.leaderboardItem}>
            <Box sx={styles.rankNameContainer}>
              <Typography variant="body1" sx={styles.rank}>{item.rank}</Typography>
              <Avatar src={item.photo} alt={item.name} sx={{ marginRight: '10px' }} />
              <Typography variant="body1" sx={styles.name}>{item.name}</Typography>
            </Box>
            <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#37afca' }}>{item.score}</Typography>
          </Box>
        ))}
      </Box>
    </Grid>
  );
};

export default LeaderBoard;
