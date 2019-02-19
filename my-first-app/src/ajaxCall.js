import React from 'react';
import $ from 'jquery';

class AjaxCall extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        things: []
      };
    }
  
    componentDidMount() {
    //   fetch("https://api.thecatapi.com/v1/breeds2")
    //     .then(res => (res.status === 200) ? res.json() : 'error' )
    //     .then(
    //         result =>(result ==='error')? console.log('error') :
    //             this.setState({
    //                 isLoaded: true,
    //                 things : result
    //             }),
    //       // Note: it's important to handle errors here
    //       // instead of a catch() block so that we don't swallow
    //       // exceptions from actual bugs in components.
    //       (error) => {
    //         this.setState({
    //           isLoaded: true,
    //           error
    //         });
    //       }
    //     )

        $.ajax({
            url:"https://api.thecatapi.com/v1/breeds", 
            method: 'GET',
            success: (result) => {
                console.log(result);
                this.setState({
                    isLoaded: true,
                    things : result
                });
            },
            error: (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
        });
    }
  
    render() {
    
      const {error, isLoaded, things } = this.state;
      if (error) {
        return <tr><td>Error: {error.responseJSON.message}</td></tr>;
      } else if (!isLoaded) {
        return <tr><td>Loading......</td></tr>;
      } else {
        return (
          <tbody>
              {things.map((item, index) => (<tr key={index}><td>{item.id}</td>
                       <td>{item.name}</td>
                       <td>{item.origin}</td><td> {item.life_span}</td></tr>
                  
               ))}
          </tbody>
        );
      }
    }
  }
  export default AjaxCall;