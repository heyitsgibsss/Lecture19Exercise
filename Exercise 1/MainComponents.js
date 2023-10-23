class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            angka1 : "0",
            angka2 : "0",
            result : "0" 
        };
    }

    // Set Values
    setValue1 = (val1) => {this.setState({ angka1: ""+val1 }); }
    setValue2 = (val2) => {this.setState({ angka2: ""+val2 }); }

    funcMultiply = (val1) => {
        var hasil = parseInt(this.state.angka1) * parseInt(this.state.angka2);
        this.setState({ result: ""+hasil });
    }

    funcDivided = (val1) => {
        var hasil = parseInt(this.state.angka1) / parseInt(this.state.angka2);
        this.setState({ result: ""+hasil });
    }

    funcSubstract = (val1) => {
        var hasil = parseInt(this.state.angka1) - parseInt(this.state.angka2);
        this.setState({ result: ""+hasil });
    }

    funcAdd = (val1) => {
        var hasil = parseInt(this.state.angka1) + parseInt(this.state.angka2);
        this.setState({ result: ""+hasil });
    }

    render() {
        return (
            <div>
                <h1>Simple Calculator ReactJS</h1>
                Input 1: <input value={this.state.angka1} onChange={(e) => { this.setValue1(e.target.value) }} />
                <br />
                Input 2: <input value={this.state.angka2} onChange={(e) => { this.setValue2(e.target.value) }} />
                <h1>Result: {this.state.result}</h1>
                <button onClick={this.funcMultiply}>Multiply</button>
                <button onClick={this.funcDivided}>Division</button>
                <button onClick={this.funcSubstract}>Subtract</button>
                <button onClick={this.funcAdd}>Addition</button>
            </div>
        );
    }
}

ReactDOM.render(<Header />, document.getElementById("app"));