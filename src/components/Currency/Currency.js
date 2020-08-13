import React, {Component} from 'react';
import 'materialize-css/dist/css/materialize.css';
import M from 'materialize-css/dist/js/materialize.min.js'

class CurrencyInput extends Component {
    state = {
        items: []
    };

    componentDidMount(){
        M.AutoInit();

        fetch(
            `https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5`
        )
            .then(res => res.json())
            .then(json => {
                this.setState({
                    items: json
                })
            });
    }

    render() {
        const currency = this.state.items.map((value, key) =>
            <tr key={key}>
                <td>{value.ccy}</td>
                <td>{value.buy}</td>
                <td>{value.sale}</td>
            </tr>
        );

        return (
            <div className="row">
                <table className="bordered highlight centered">
                    <thead>
                    <tr>
                        <th>Валюта</th>
                        <th>Покупка</th>
                        <th>Продажа</th>
                    </tr>
                    </thead>
                    <tbody>
                        {currency}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default CurrencyInput
