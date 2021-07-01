import React from 'react';
import Annim from './Annim';

class Annims extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            annims: []
        };
    }

    
    render(){
        const { isLoaded, annims } = this.state;
        if(isLoaded){
            return (
                <div className='row mt-3'>
                  {annims.map( (item,index) => (
                      <Annim title={item.attributes.titles.en} image={item.attributes.posterImage.tiny} id={index+1} key={index+1}/>
                  ))}
                </div>
              );
        }else{
            return (<div>Chargement des annims...</div>);
        }
    }

    capitalize(str){
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    componentDidMount(){
        fetch("https://kitsu.io/api/edge/anime?page[limit]=20")
        .then(res => res.json())
        .then(
          (result) => {
              console.log(result)
            this.setState({
                isLoaded: true,
                annims: result.data
              });
          }
        )
    }
}

export default Annims;