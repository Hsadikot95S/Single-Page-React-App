import React from 'react';
import Main from "./Main";
import Header from "./Header";
import Nav from "./Navbar";
import Footer from "./Footer";
import "./App.css"

class TruckingIndustry extends Main {

    render() {
        
        let url = window.location.href;
        let key = url.slice(-1);
        let finalItems = null;
        const itemsList = this.state.truckingIndustryList.Blogs.Post;
        itemsList.map((item) =>{ 
            
            if (parseInt(key) === parseInt(item.id)){            
                finalItems = (
                    <div key={item.id} className="divMain">
                        <h1 key='10'>{item.title}</h1>
                        <p key='11'>Date: {item.date}</p>                        
                        <p key='12' className="desc">{item.description}</p>
                        <img src={require('./'+ item.img + "")} alt={item.title} />
                        <br/><br/>
                    </div>
                );
            }
            return finalItems;
        });

        return (
            <main>
                <div className="main_container">
                    <Header />
                    <div className="maincontent">
                        {finalItems}
                        <Nav />
                    </div>
                    <Footer />
                </div>
            </main>            
        );
    }
}

export default TruckingIndustry;
