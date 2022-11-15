import React from 'react'

const Currencies = () => {
  return (
    <div>
        <h1>
           today's top 5 currencies
        </h1>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Market Cap</th>
                        <th>24h</th>
                        <th>7d</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Bitcoin</td>
                        <td>$ 56,000</td>
                        <td>$ 1,000,000,000</td>
                        <td>5%</td>
                        <td>10%</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Ethereum</td>
                        <td>$ 2,000</td>
                        <td>$ 200,000,000</td>
                        <td>5%</td>
                        <td>10%</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Cardano</td>
                        <td>$ 1.50</td>
                        <td>$ 50,000,000</td>
                        <td>5%</td>
                        <td>10%</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Polkadot</td>
                        <td>$ 30</td>
                        <td>$ 10,000,000</td>
                        <td>5%</td>
                        <td>10%</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Uniswap</td>
                        <td>$ 30</td>
                        <td>$ 10,000,000</td>
                        <td>5%</td>
                        <td>10%</td>
                    </tr>
                </tbody>
         </table>

        </div>
        </div>
  )
}

export default Currencies