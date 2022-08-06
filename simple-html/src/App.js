import './App.css';
import './AppMedia.css';
import { AiFillPrinter } from 'react-icons/ai';
import { MdEmail, MdComputer } from 'react-icons/md';

function App() {
  return (
    <main>
      <h1>Transaction</h1>
      <section className='transaction'>
        <div className='transaction__header'>
          <p>02/14/2018 13:30 Fri</p>
          <p>CXL 201803080014</p>
        </div>
        <div className='transaction__main'>
          <ul className='transaction__column'>
            <label className='transaction__label'>Name</label>
            <li className='transaction__item'>HCM: Mens haircut</li>
            <li className='transaction__item'>AWPM: Awapui Shampoo</li>
            <li className='transaction__item'>
              PMCO: Paul Mitchell Conditioner
            </li>
          </ul>
          <ul className='transaction__column'>
            <label className='transaction__label'>Type</label>
            <li className='transaction__item'>Service</li>
            <li className='transaction__item'>Product</li>
            <li className='transaction__item'>Product</li>
          </ul>
          <ul className='transaction__column'>
            <label className='transaction__label'>QTY.</label>
            <li className='transaction__item'>1</li>
            <li className='transaction__item'>1</li>
            <li className='transaction__item'>1</li>
          </ul>
          <ul className='transaction__column'>
            <label className='transaction__label'>Employee</label>
            <li className='transaction__item'>JKON: Aktas, John</li>
            <li className='transaction__item'>CCHAN: Chan, Chris</li>
            <li className='transaction__item'>JKON: Aktas, John</li>
          </ul>
          <ul className='transaction__column'>
            <label className='transaction__label'>Price</label>
            <li className='transaction__item'>$30.00</li>
            <li className='transaction__item'>$12.50</li>
            <li className='transaction__item'>$10.00</li>
          </ul>
        </div>
        <div className='transaction__footer'>
          <div className='transaction__location'>
            Altamonte Springs Mall Salon 0321
          </div>
          <div className='transaction__buttons'>
            <button aria-label='Print'>
              <AiFillPrinter />
            </button>
            <button aria-label='Email'>
              <MdEmail />
            </button>
            <button aria-label='Send'>
              <MdComputer />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
