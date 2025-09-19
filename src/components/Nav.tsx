import { Link } from 'react-router-dom';
import Seedling from '../assets/seedling.svg?react';

const frozenFruitesList = [
   { name: 'Strawberries', link: '/products/frozen-fruits/strawberries' },
   { name: 'Mangoes', link: '/products/frozen-fruits/mangoes' },
   { name: 'Peaches', link: '/products/frozen-fruits/peaches' },
   { name: 'Pineapples', link: '/products/frozen-fruits/pineapples' },
   { name: 'Cherries', link: '/products/frozen-fruits/cherries' },
   { name: 'Blueberries', link: '/products/frozen-fruits/blueberries' },
   { name: 'Raspberries', link: '/products/frozen-fruits/raspberries' },
   { name: 'Blackberries', link: '/products/frozen-fruits/blackberries' },
   { name: 'Apricots', link: '/products/frozen-fruits/apricots' },
   { name: 'Mixed Berries', link: '/products/frozen-fruits/mixed-berries' },
]

export default function Nav({navKey = 'nav-', dark = false}: {navKey: string, dark: boolean}) {
   return (
   <nav key={navKey + 'nav'}>
   <ul className="flex gap-0 text-lg font-medium" onClick={e => {
      const target = e.target as HTMLElement;
      if(target.tagName === 'LI'){
         const active = document.querySelector('li.active');
         if(active) active.classList.remove('active');
         target.classList.add('active');
         }}
      }>
      <li 
      key={navKey + 'home'} 
      className='active'>
         <Link 
         className={`flex cursor-pointer gap-2 items-center justify-center ${!dark? 'hover:text-white': 'hover:text-text'} text-lg`}
         to='/home'>
            <span>
               <Seedling 
               className="text-primary w-7 h-7"/>
               </span>Home</Link>
      </li>
      <li 
      key={navKey + 'about'}>
         <Link 
         className={`flex cursor-pointer gap-2 items-center justify-center ${!dark? 'hover:text-white': 'hover:text-text'} text-lg`}
         to='/about'>
            <span>
               <Seedling className="text-primary w-7 h-7"/>
               </span>About Ogina</Link></li>
      <li 
      key={navKey + 'products'} 
      className="listed">
         <Link 
         className={`flex cursor-pointer gap-2 items-center justify-center ${!dark? 'hover:text-white': 'hover:text-text'} text-lg`}
         to='/products'>
         <span>
            <Seedling className="text-primary w-7 h-7"/>
            </span>Products
         </Link>
         <ul className="list">
            <li 
            key={navKey + 'products-list-fruits'} className='item fruits-listed'>
               Frozen Fruits
               <ul className='fruits-list'>
                  {frozenFruitesList.map(fruit => (
                     <li key={navKey + 'frozen-' + fruit.name} className='frozen-item'>
                        <Link to={fruit.link}>{fruit.name}</Link>
                     </li>
                  ))}
               </ul>
               </li>
            <li 
            key={navKey + 'products-list-vegetables'} className='item'>
               Frozen Vegetables
               </li>
            <li 
            key={navKey + 'products-list-mixed'} className='item'>
               Mixed Vegetables
               </li>
         </ul>
         </li>
      <li key={navKey + 'contact'}><Link className={`flex cursor-pointer gap-2 items-center justify-center ${!dark? 'hover:text-white': 'hover:text-text'} text-lg`}to='/contact'><span><Seedling className="text-primary w-7 h-7"/></span>Contact Us</Link></li>
   </ul>
</nav>
)
}
