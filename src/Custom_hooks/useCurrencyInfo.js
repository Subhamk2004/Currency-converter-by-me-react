import {useState, useEffect} from "react";

function UseCurrencyInfo(currency){
    let [data, setData] = useState({});
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
        .then((res) => {
            return res.json();

        }).then((res) => {
        setData(res[currency]);
        // here currency is the currency which hold the value from which we
            // will be converting the values
            // so res[currency] will return all the countries currencies and
            // the value of how much that 1 passed currency in their currencies
    })
    }, [currency]);
    return data;
}

export default UseCurrencyInfo;