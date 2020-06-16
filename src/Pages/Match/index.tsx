import React from 'react';
import Iframe from 'react-iframe';

interface MatchProps {}

const Match: React.FC<MatchProps> = () => {
  return <Iframe url="http://localhost:4000/" width="550px" height="550px" id="match" />;
};

export default Match;
