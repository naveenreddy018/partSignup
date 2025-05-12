import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
const RazorpayDevPage = () => {
    return (
        <div className="bg-gray-900 text-white min-h-screen">

            <div className="bg-green-900 bg-opacity-30 text-green-500 py-1 overflow-hidden">
                <div className="flex animate-scroll">
                    {Array(5).fill().map((_, index) => (
                        <div key={index} className="flex whitespace-nowrap">
                            <span className="mx-2">NODE.JS</span>
                            <span className="mx-2">•</span>
                            <span className="mx-2">CURL</span>
                            <span className="mx-2">•</span>
                            <span className="mx-2">JAVA</span>
                            <span className="mx-2">•</span>
                            <span className="mx-2">PYTHON</span>
                            <span className="mx-2">•</span>
                            <span className="mx-2">PHP</span>
                            <span className="mx-2">•</span>
                        </div>
                    ))}
                </div>
            </div>


            <div className="container mx-auto px-4 py-12">

                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold mb-2">Razorpay is built</h1>
                    <h2 className="text-green-500 text-2xl">&lt;for developers by developers&gt;</h2>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">

                    <div className="bg-gray-900 p-6 rounded-lg text-center">
                        <div className="flex justify-center mb-4">
                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Integrations</h3>
                        <p className="text-gray-400 mb-4">Find all popular platform SDKs, plugin, server integrations in our integration stack.</p>
                        <button className="bg-gray-900 border border-gray-600 px-4 py-2 rounded-md hover:bg-gray-800 transition">
                            View Docs →
                        </button>
                    </div>


                    <div className="bg-gray-900 p-6 rounded-lg text-center">
                        <div className="flex justify-center mb-4">
                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                                <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-2">API Reference</h3>
                        <p className="text-gray-400 mb-4">Comprehensive documentation to build powerful payment solutions.</p>
                        <button className="bg-gray-900 border border-gray-600 px-4 py-2 rounded-md hover:bg-gray-800 transition">
                            View Docs →
                        </button>
                    </div>


                    <div className="bg-gray-900 p-6 rounded-lg text-center">
                        <div className="flex justify-center mb-4">
                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zM2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3zm2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Webhooks</h3>
                        <p className="text-gray-400 mb-4">Receive real-time notifications for all payment related transactions and events.</p>
                        <button className="bg-gray-900 border border-gray-600 px-4 py-2 rounded-md hover:bg-gray-800 transition">
                            View Docs →
                        </button>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-8 my-16">
                    <div className="md:w-1/3">
                        <h2 className="text-2xl font-bold">Try it out</h2>
                        <h3 className="text-xl font-bold">for yourself <span className="ml-2">↘</span></h3>
                    </div>
                    <div className="md:w-2/3 w-full">
                        <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden">
                            <div className="flex justify-between items-center p-3 border-b border-gray-700">
                                <div className="flex items-center">
                                    <span className="text-gray-400 mr-2">Curl</span>
                                    <span className="text-gray-400 border border-gray-700 rounded px-2 py-1 text-xs">change language</span>
                                </div>
                                <div>
                                    <span className="text-yellow-500 mx-1">•</span>
                                    <span className="text-gray-400 mx-1">⇱</span>
                                </div>
                            </div>
                            <pre className="p-4 text-sm overflow-auto text-white">
                                {`1  curl -X POST https://api.razorpay.com/v1/orders
2  -H [key_id]:[YOUR_KEY_SECRET]
3  -H "Content-Type:application/json"
4  -d {
5    "amount": 500,
6    "currency": "INR",
7    "receipt": "qwsaq1",
8    "partial_payment": true,
9    "first_payment_min_amount": 230
10 }`}
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RazorpayDevPage;
