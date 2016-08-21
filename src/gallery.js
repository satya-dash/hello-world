import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: '60%',
    height: 500,
    overflowY: 'auto',
    marginBottom: 0,
  },
};

export default class GridListExampleSimple extends React.Component{
  constructor(){
    super();
    this.state = {
      images : [
        {
          img: 'http://www.material-ui.com/images/grid-list/00-52-29-429_640.jpg',
          title: 'Breakfast',
          author: 'jill111',
        },
        {
          img: 'http://www.material-ui.com/images/grid-list/burger-827309_640.jpg',
          title: 'Tasty burger',
          author: 'pashminu',
        },
        {
          img: 'http://www.material-ui.com/images/grid-list/camera-813814_640.jpg',
          title: 'Camera',
          author: 'Danson67',
        },
        {
          img: 'http://www.material-ui.com/images/grid-list/morning-819362_640.jpg',
          title: 'Morning',
          author: 'fancycrave1',
        },
        {
          img: 'http://www.material-ui.com/images/grid-list/hats-829509_640.jpg',
          title: 'Hats',
          author: 'Hans',
        },
        {
          img: 'http://www.material-ui.com/images/grid-list/honey-823614_640.jpg',
          title: 'Honey',
          author: 'fancycravel',
        },
        {
          img: 'http://www.material-ui.com/images/grid-list/vegetables-790022_640.jpg',
          title: 'Vegetables',
          author: 'jill111',
        },
        {
          img: 'http://www.material-ui.com/images/grid-list/water-plant-821293_640.jpg',
          title: 'Water plant',
          author: 'BkrmadtyaKarki',
        },
      ]
    }
  }

  render(){
    return (<div style={styles.root}>
              <GridList
                style={styles.gridList}
                cellHeight={400}>
                <Subheader>December</Subheader>
                {this.state.images.map((tile) => (
                  <GridTile
                    key={tile.img}
                    title={tile.title}
                    subtitle={<span>by <b>{tile.author}</b></span>}
                    actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                  >
                    <img src={tile.img} role="presentation"/>
                  </GridTile>
                ))}
              </GridList>
            </div>
    );
  }
}