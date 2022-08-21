import React, { useEffect, useState } from 'react';
import Individualinstructor from '../individualinstructor/IndividualInstructor';
import './Special.css';
const Special = () => {
    const [hello, setHello] = useState([])
    useEffect(()=>{
fetch('https://pacific-chamber-54725.herokuapp.com/special')
.then(res => res.json())
.then(data => setHello(data))
    },[])

    return (
        <div className='bg-dark special'>
            <h1 className='text-center fw-bold mb-5 text-white'>OUR Specials</h1>
            <div className="service-container">
                <div className="container">
            <div class="row row-cols-1 row-cols-lg-3 g-4">
                {
                    hello.map(hellos => <Individualinstructor
                        key={hellos._id}
                        hellos={hellos}
                    ></Individualinstructor>)
                }
                </div>
                </div>
            </div>
        </div>
    );
};

export default Special;