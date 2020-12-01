/* import React, {useState} from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import client from './client';
import {Typography, Container, makeStyles} from "@material-ui/core";
import RepositoryList from "./RepositoryList";
import SearchBar from "./SearchBar";

const useStyles = makeStyles({
  title: {
    marginTop: '1rem',
    marginBottom: '1rem',
    textAlign: 'center'
  }
});

const App = () => {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <ApolloProvider client={client}>
      <Container maxWidth={'sm'}>
        <Typography variant={'h3'} className={classes.title}>GraphQL Github Client</Typography>
        <SearchBar value={searchTerm} onChange={setSearchTerm}/>
        <RepositoryList searchTerm={searchTerm}/>
      </Container>
    </ApolloProvider>
  );
};

export default App; */


import React from 'react'

import { Provider } from 'react-redux'
import store from './redux/store'

import {Typography, Container, makeStyles} from "@material-ui/core";

import { Topics } from './components/src/index';

const useStyles = makeStyles({
  title: {
    marginTop: '15px',
    marginBottom: '15px',
    textAlign: 'center'
  }
});

const App = () => {

  const classes = useStyles();

  return (
    <Provider store={store}>
      <Container maxWidth={'sm'}>
        <Typography
          variant={'h4'}
          className={classes.title}
        >
          Topics Related With "React"
        </Typography>
        <Topics />
      </Container>
    </Provider>
  )
}
export default App