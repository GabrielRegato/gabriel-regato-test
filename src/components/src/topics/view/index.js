import React, { useEffect, useState } from 'react';

import { withStyles } from '@material-ui/core/styles';

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Chip,
  LinearProgress,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@material-ui/core';

import StarIcon from '@material-ui/icons/Star';
import TopicIcon from '@material-ui/icons/Folder';

const styles = theme => ({
  root: {
    marginTop: '1rem'
  },
  summaryContainer: {
    flexDirection: 'column',
  },
  summaryHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '1rem'
  },
  chip: {
    marginLeft: '0.5rem'
  },
  accordion: {
    flexDirection: 'column',
  },
  list: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  noTopics: {
    textAlign: 'center',
  },
});

const TopicsView = props => {

  const {
    getTopics,
    topics,
    loading,
    classes,
  } = props;

  const [openTopic, setOpenTopic] = useState('');

  useEffect(() => {
      getTopics();
  }, []);

  const onClickOpen = (id) => (event, newExpanded)=> {
    setOpenTopic(newExpanded ? id : '');
  }

  return (
    <div>
      {loading && (
        <div>
          <Typography variant={'h5'}>Loading Topics</Typography>
          <LinearProgress />
        </div>
      )}
      {topics && topics.map((topic, index) => (
      <Accordion
        expanded={topic.id === openTopic}
        onChange={onClickOpen(topic.id)}
        className={classes.root}
        key={index}
      >
        <AccordionSummary classes={{content: classes.summaryContainer}}>
          <div className={classes.summaryHeader}>
            <Typography variant={'h6'}>{topic.name}</Typography>
            <div>
              <Chip label={`Related Topics: ${topic.relatedTopics.length}`} avatar={<TopicIcon/>} className={classes.chip}/>
              <Chip label={topic.stargazerCount} avatar={<StarIcon/>} className={classes.chip}/>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails className={classes.accordion}>
          <Typography variant={'h6'}>Related Topics of {topic.name}</Typography>
          <List className={classes.list}>
            { topic.relatedTopics && topic.relatedTopics.map(relatedTopic => (
            <ListItem key={relatedTopic.id}>
              <ListItemAvatar>
                <Avatar>
                  <TopicIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={relatedTopic.name} secondary={<Chip label={relatedTopic.stargazerCount} avatar={<StarIcon/>} className={classes.chip}/>} />
            </ListItem>
            ))}
          </List>
        </AccordionDetails>
      </Accordion> ))}
      {topics.length === 0 && !loading && (
        <Typography variant={'h5'} className={classes.noTopics}>There's no topics related with the term "React"</Typography>
      )}
    </div>
  );
};

export default withStyles(styles)(TopicsView);
