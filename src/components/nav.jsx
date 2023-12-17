import React from 'react'

export default function Nav() {
  return (
<>

<nav className='navbar navbar-expand-lg bg-primary h-auto '>
    <a href="#" className='navbar-brand fs-1 ms-3 fw-bold text-uppercase text-white'>logo</a>
   <button className='navbar-toggler' type='button' data-bs-toggle="collapse" data-bs-target="#coll"><span className='navbar-toggler-icon'>  </span></button>
    <div className=' collapse navbar-collapse' id='coll'>
        <ul className='navbar-nav m-auto'>


            <li className='nav-item  ms-5 '><a href="#" className='nav-link fs-3 fw-bold text-white text-capitalize'>home</a></li>
            <li className='nav-item  ms-5 '><a href="#" className='nav-link fs-3 fw-bold text-white text-capitalize'>about</a></li>
            <li className='nav-item  ms-5 '><a href="#" className='nav-link fs-3 fw-bold text-white text-capitalize'>service</a></li>
            <li className='nav-item  ms-5 '><a href="#" className='nav-link fs-3 fw-bold text-white text-capitalize'>contact</a></li>
            <li className='nav-item  ms-5 text-white fs-3 fw-bold nav-link'><i className=' fs-3 fw-bold text-white'></i>icon</li>
            <li className='nav-item  ms-5 text-white fs-3 fw-bold nav-link'><i className=' fs-3 fw-bold text-white'></i>icon</li>
        </ul>

    </div>
</nav>


</>  )
}
