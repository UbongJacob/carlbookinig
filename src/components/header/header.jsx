import { useState } from 'react';
import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from 'date-fns';

import './header.css';

const Header = () => {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);
  const [openDate, setOpenDate] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]:
          operation === 'increment' ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  return (
    <div className='header'>
      <div className='headerContainer'>
        <div className='headerList'>
          <div className='headerListItem active'>
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className='headerListItem'>
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className='headerListItem'>
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className='headerListItem'>
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className='headerListItem'>
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>
        </div>
        <h1 className='headerTitle'>
          Enjoy lifetime of discounts? It's Genius
        </h1>
        <p className='headerDesc'>
          Get rewareded for your travels - unlock instant savings of 10% or more
          with a free CarlBooking account
        </p>

        <button type='button' className='headerBtn' aria-label='Register'>
          Sign in / Register
        </button>

        <div className='headerSearch'>
          <div className='headerSearchItem'>
            <FontAwesomeIcon className='headerIcon' icon={faBed} />
            <input
              type='text'
              placeholder='Where are you going?'
              className='headerSearchInput'
            />
          </div>

          <div className='headerSearchItem'>
            <FontAwesomeIcon className='headerIcon' icon={faCalendarDays} />
            <span
              onClick={() => setOpenDate(!openDate)}
              className='headerSearchText'
            >
              {`${format(date[0].startDate, 'MM/dd/yyyy')} to ${format(
                date[0].endDate,
                'MM/dd/yyyy'
              )}`}
            </span>
            {openDate && (
              <DateRange
                editableDateInputs
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className='date'
              />
            )}
          </div>

          <div className='headerSearchItem'>
            <FontAwesomeIcon className='headerIcon' icon={faPerson} />
            <span
              onClick={() => setOpenOptions(!openOptions)}
              className='headerSearchText'
            >{`${options.adult} adult • ${options.children} children • ${options.room} room `}</span>

            {openOptions && (
              <div className='options'>
                <div className='optionItem'>
                  <span className='optionText'>Adult</span>
                  <div className='optionCounter'>
                    <button
                      disabled={options.adult <= 1}
                      className='optionCounterButton'
                      onClick={() => handleOption('adult', 'decrement')}
                    >
                      -
                    </button>
                    <span className='optionCounterNumber'>{options.adult}</span>
                    <button
                      className='optionCounterButton'
                      onClick={() => handleOption('adult', 'increment')}
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className='optionItem'>
                  <span className='optionText'>Children</span>
                  <div className='optionCounter'>
                    <button
                      disabled={options.children <= 0}
                      className='optionCounterButton'
                      onClick={() => handleOption('children', 'decrement')}
                    >
                      -
                    </button>
                    <span className='optionCounterNumber'>
                      {options.children}
                    </span>
                    <button
                      className='optionCounterButton'
                      onClick={() => handleOption('children', 'increment')}
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className='optionItem'>
                  <span className='optionText'>Room</span>
                  <div className='optionCounter'>
                    <button
                      disabled={options.room <= 1}
                      className='optionCounterButton'
                      onClick={() => handleOption('room', 'decrement')}
                    >
                      -
                    </button>
                    <span className='optionCounterNumber'>{options.room}</span>
                    <button
                      className='optionCounterButton'
                      onClick={() => handleOption('room', 'increment')}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className='headerSearchItem'>
            <button className='headerBtn headerBtn2'>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
