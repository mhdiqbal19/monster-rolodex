import { Component } from "react";

class Test extends Component {
    constructor(props) {
        super(props);
       this.state = { 
            name: {
                firstName: "Muhammad",
                lastName: "Iqbal"
            },
            company: "Gojek.id",
         }

    }

    render() { 
        return ( 
            <div>
            <h1>Nama Saya : {this.state.name.firstName} {this.state.name.lastName}</h1>
            <h3>I'am Work in {this.state.company}</h3>
            <button onClick={() => {
                this.setState({
                    company: "Shoppe"
                })
            }}>Ganti Company</button>
            </div>
         );
    }
}
 
export default Test;