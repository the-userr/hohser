import * as React from 'react';
import { IconButton, List, ListItem, ListItemText, ListItemSecondaryAction, Divider } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { Domain } from 'src/types';

interface Props {
  domainsList: Array<Domain>;
}

const DomainsList = (props: Props) => {
  return (
    <List style={{paddingTop: 64, paddingBottom: 124}}>
      {Object.keys(props.domainsList).map((item, i, arr) => ([
        <ListItem button>
          <ListItemText primary={props.domainsList[item].domainName} />
          <ListItemSecondaryAction>
            <IconButton aria-label="Delete">
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>,
        <div>{arr.length !== i+1 ? <Divider /> : null}</div>
      ]))}
    </List>
  );
};

export default (DomainsList);
