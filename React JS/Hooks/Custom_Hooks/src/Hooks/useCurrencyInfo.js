import React, { useEffect } from 'react'

function useCurrencyInfo(currency) {
    const [data, setData] = useState({})//in case koi fetch call nhi aa rhi , to vo crash na kre , so empty object is used inside useState
    return (
        useEffect(() => {
            fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
                .then((res) => res.json())
                .then((res) => setData(res[currency]))
            //Ab agr is data ko mai regular variable me hold kr dunga to vo UI me update nhi hoga.. that's why setData is used

            console.log(data)
        }, [currency]))

    console.log(data);
    return data

}

export default useCurrencyInfo