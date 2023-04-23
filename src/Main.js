import React from 'react'
import  './App.css'
import {Link} from 'react-router-dom';
import jsonObject from './TruckingIndustryList';


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            truckingIndustryList: jsonObject
        }       
        this.myRef = React.createRef() 
    }

    componentDidMount() {
        window.scrollTo(0, 0)
      }      

    render() {
        const listItems = this.state.truckingIndustryList.Blogs.Post.map((d) =>        
            <div key={d.id} className="divMain">
                <h2 key='10'><Link to={`/truckingindustry/${d.id}`}>{d.title}</Link></h2>
                <p key='11'>Date: {d.date}</p>
                <p key='12'>Author: {d.author}</p>
                <p key='13'>Summary: {d.summary}</p>
                <br/>
            </div>
        );
        return (
            <main>
                {listItems}
            </main>
        );
    }    
}

export default Main;

