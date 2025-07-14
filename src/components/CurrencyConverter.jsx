import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CurrencyConverter = () => {
    const [amount, setAmount] = useState(1);
    const [fromCurrency, setFromCurrency] = useState('usd');
    const [toCurrency, setToCurrency] = useState('inr');
    const [options, setOptions] = useState(null)
    const [converted, setConverted] = useState(null);

    const getOptions = async () => {
        try {
            const { data } = await axios.get(
                `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurrency}.json`
            );
            //get currency list
            setOptions(Object.keys(data[fromCurrency]));
            console.log(options);

        } catch (error) {
            console.log(error.message);
        }
    }
    const convertCurrency = async () => {
        try {
            const { data } = await axios.get(
                `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurrency}.json`
            );

            const rate = data[fromCurrency][toCurrency];
            console.log(rate);

            setConverted((amount * rate).toFixed(2));
        } catch (error) {
            alert('Conversion failed. Please try again.');
            console.error(error);
        }
    };
    useEffect(() => {
        getOptions()
    }, [setOptions])

    useEffect(() => {
        convertCurrency()
    }, [fromCurrency, toCurrency, amount])
    return (

        <>
            <div className='flex flex-col items-center justify-center w-full h-screen bg-[url("https://static.vecteezy.com/system/resources/previews/019/523/909/non_2x/abstract-currency-digital-finance-technology-modern-currency-exchange-transfer-profit-on-modern-background-futuristic-wave-flowing-blue-vector.jpg")] text-white object-cover bg-cover'>
                <h1 className='text-5xl font-medium text-center py-6'>Currency Convertor</h1>

                <div className='max-w-5xl w-3xl h-max bg-white/50 backdrop-blur-xl text-black px-12 py-6 rounded-md shadow-2xl'>
                    <div className='w-full flex flex-col bg-white px-4 py-3 mb-3 rounded-md '>
                        <div className='flex justify-between'>
                            <p className='text-gray-500 text-lg font-medium' >From</p>
                            <p className='text-gray-500 text-lg font-medium'>Currency Type</p>
                        </div>
                        <div className='flex justify-between pt-4'>
                            <input type="text"
                                onChange={e => setAmount(e.target.value)} value={amount}
                                className='w-full text-xl font-medium bg-transparent outline-none'
                            />
                            <select onChange={e => setFromCurrency(e.target.value)} value={fromCurrency} className='px-2 py-2.5 outline-none rounded-md border-2 border-gray-600 bg-gray-100 font-medium w-30'>
                                {options && options.map((country) => (
                                    <option key={country} value={country}>{country.toUpperCase()}</option>
                                ))}
                            </select>
                        </div>

                    </div>
                    <div className='w-full flex flex-col bg-white px-4 py-3 mb-3 rounded-md '>
                        <div className='flex justify-between'>
                            <p className='text-gray-500 text-lg font-medium' >To</p>
                            <p className='text-gray-500 text-lg font-medium'>Currency Type</p>
                        </div>
                        <div className='flex justify-between pt-4'>
                            <input type="text"
                                onChange={e => setConverted(e.target.value)} value={converted}
                                className='w-full text-xl font-medium bg-transparent outline-none'
                            />
                            <select onChange={e => setToCurrency(e.target.value)} value={toCurrency} className='px-2 py-2.5 outline-none rounded-md border-2 border-gray-600 bg-gray-100 font-medium w-30'>
                                {options && options.map((country) => (
                                    <option key={country} value={country}>{country.toUpperCase()}</option>
                                ))}
                            </select>
                        </div>

                    </div>
                    <button
                        onClick={convertCurrency}
                        className='flex items-center w-full px-2 py-2.5 bg-blue-700 text-white rounded-md justify-center'>Convert </button>
                </div>
            </div>
        </>
    );
};

export default CurrencyConverter;
