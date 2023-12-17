import React from 'react'
import Nav from './nav'
import bgImg from '../assets/bg-1.jpg'
export default function Header() {
  return (
    <div>

<Nav/>

<section>
  <div className='w-100 text-white'>
  <img src={bgImg} alt="..." className='card-img-top' style={{width:'100%',height:'90vh',backgroundPosition:'right top',backgroundSize:'cover',objectFit:'cover'}} />

    <div className='card-img-overlay d-flex flex-column justify-content-center align-items-center'>
      <h1 className='text-uppercase display-3  p-3 text-white fw-bolder' >aos header h1  title for my-frist</h1>
      <p className='fs-5 text-center p-4 shadow-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga reiciendis soluta est vel quod, at asperiores aut doloremque ad debitis laboriosam. Aliquid vel nisi delectus consequuntur nostrum at explicabo vero. Reiciendis quos quaerat eveniet, autem nesciunt, soluta aliquid blanditiis, rem cum culpa numquam dolores. Labore error aperiam commodi nisi vero!</p>
<button className='btn bg-secondary text-uppercase text-white fw-bold w-fit h-fit  p-3 mt-3 shadow-lg '>click more</button>
    </div>
  </div>
</section>

    </div>
  )
}
