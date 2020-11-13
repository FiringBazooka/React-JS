import React from 'react'
import axios from 'axios'


class App extends React.Component{

    state = {
      searchString : '',
      imagesList : []
    }

    searchPhoto =  async (event) =>  {
        
        event.preventDefault();
        console.log('search photo') 

      const response =  await axios.get('https://api.unsplash.com/search/photos', {
            params : { query : this.state.searchString},
            headers : { Authorization : 'Client-ID Il3LOicE8Ta8_O7bRTR4H1_03lpalJBRnPrVl8llbPo'}
        })
 
        this.setState({imagesList:response.data.results})
        console.log(this.state.imagesList) 
        
       
    }

    displayPics = () => {

       if(this.state.imagesList.length===0) {
           return;
       }
        return this.state.imagesList.map(image => {

            var desc = image.description!=null ?image.description:image.alt_description

            return (
            <div>
            <img src={image.urls.regular} alt={image.alt_description}></img>
            <br/>
            <h3>{desc}</h3>
            <br/>
            <br/>
            </div>
            )
        })

    }
   
    render(){
        return (

         <div> 
             <form>
             <label htmlFor='search'>Search image: </label>
             <input id='search' placeholder="enter any string" onChange={e => this.setState({searchString:e.target.value})} ></input>
             <button onClick={this.searchPhoto}>Submit</button>
            <br/>
            <br/>
            <br/>
            <br/>
             <div>{this.displayPics()}</div>
             </form>
        </div>

        )
       
        
    }

}

export default App;