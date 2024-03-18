import React from 'react'

export default function Card() {
    return (
        <div>
            <div>
                <div className="card mt-3" style={{ width: '18rem', maxHeight: '360px' }}>
                    <img src="https://www.shutterstock.com/image-photo/classic-hamburger-stock-photo-isolated-600nw-2282033179.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example</p>
                        <div className='container w-100' style={{ padding: '10px' }}>
                            <select className='m-2 h-100 bg-success rounded'>
                                {
                                    Array.from(Array(6), (e, i) => {
                                        return (
                                            <option key={i + 1} value={i + 1}>
                                                {i + 1}
                                            </option>
                                        )
                                    })
                                }
                            </select>
                            <select className='m-2 h-100 bg-success rounded'>
                                <option value="half">
                                    Half
                                </option>
                                <option value="Full">
                                    Full
                                </option>
                            </select>
                            <div className='h-100 d-inline fs-5'>Total Price</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
