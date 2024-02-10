import React from 'react';
import {Link} from 'react-router-dom';
import Menu from '../components/menu';
import user from '../images/4.jpg';
import fruits from '../images/fruits.jpg';
import edit from '../images/edit.png';
import del from '../images/delete.jpg';

const single = () => {
  return (
    <div className='flex mx-32 gap-10'>
      <div className='w-2/3'>
        <img src={fruits} alt='' className='w-full'/>
        <div className='flex '>
          <div className='flex gap-2 mt-3'>
            <img src={user} alt='' className='w-10 h-10 rounded-full'/>
            <div className='items-center justify-center'>
            <span className='font-bold'>Roshan</span>
            <p>posted 2 days ago</p>
            </div>
          </div>
          
          <div className='flex items-center ml-5'>
          <Link to='/edit'>
          <img src={edit} alt='' className='w-6 h-6'/>
          </Link>
          <Link to='/delete'>
          <img src={del} alt='' className='w-8 h-8'/>
          </Link> 
          </div>
        </div>
        <h1 className='text-2xl'>Description of fruits for study about the fruits in the world</h1>
        <p className=' text-wrap text-justify leading-7'>Fruit, the fleshy or dry ripened ovary of a 
          flowering plant, enclosing the seed or seeds. 
          Thus, apricots, bananas, and grapes, as well 
          as bean pods, corn grains, tomatoes, cucumbers, 
          and (in their shells) acorns and almonds, are 
          all technically fruits. Popularly, however, 
          the term is restricted to the ripened ovaries 
          that are sweet and either succulent or pulpy. 
          For treatment of the cultivation of fruits, 
          see fruit farming. For treatment of the nutrient 
          composition and processing of fruits, see fruit 
          processing.<br/>Botanically, a fruit is a mature ovary 
          and its associated parts. It usually contains 
          seeds, which have developed from the enclosed 
          ovule after fertilization, although development 
          without fertilization, called parthenocarpy, is known, 
          for example, in bananas. Fertilization induces 
          various changes in a flower: the anthers and 
          stigma wither, the petals drop off, and the 
          sepals may be shed or undergo modifications; 
          the ovary enlarges, and the ovules develop into 
          seeds, each containing an embryo plant. The 
          principal purpose of the fruit is the protection 
          and dissemination of the seed. (See also seed.)</p>
      </div>

      <Menu/>
    </div>
  )
}

export default single;