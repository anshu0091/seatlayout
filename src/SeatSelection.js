/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
// import { FaAngleDoubleDown } from "react-icons/fa";
import './Tab.css'
export default function SeatSelection() {
    const [name, setName] = useState([])
     const [arrowDown, setArrowDown] = useState(false)
    const [gender, setGender] = useState([])
    const [reservedSeat, setReservedSeat] = useState(["1A", "2A", "2B", "3B", "4A", "5C", "6A", "7B",  "12B","12A", "13B",
    "7C", '8B', "9B", "9C", "11A" , "14A" ,"16A", "17B", "18B", "19B",])
    const [seatNumber, setSeatnumber] = useState([])
    
    const getSeatNumber = (e) => {
        renderPassengerData(seatNumber)
        let newSeat = e.target.value
        if (reservedSeat.includes(newSeat)) {
            e.disabled = true
            if (seatNumber.includes(newSeat)) {
                setSeatnumber(seatNumber.filter(seat => seat !== newSeat))
            }
        } else {
            setSeatnumber([...seatNumber, newSeat])
            setReservedSeat([...reservedSeat, newSeat])
            console.log(seatNumber)
        }
    }
    const handleGender = (e, seatNo) => {
        const { value } = e.target
        setGender(gender.concat(value))
        
    }
    const handlePassengerName = (e, seatNo) => {
        e.preventDefault()
        let value = e.target.value
        // console.log(value)
        if (!value) {
            return (setName("name is required"))
        } else {
            setName(name.concat(value))
            
        }
    }
    const handleSubmitDetails = e => {
        e.preventDefault()
        setArrowDown(true)
        localStorage.setItem("reservedSeats", JSON.stringify(seatNumber))
        localStorage.setItem("nameData", JSON.stringify(name))
        console.log(name)
        console.log(gender)
    }

    const renderPassengerData = (seatArray) => {
        return seatArray.map((seat, idx) => {
            return (
                <form key={idx} className="form seatfrm">
                    <p class="text-capitalize text-center">Seat No:{seat}</p>
                    <input className="form-control seatInp" onBlur={e => handlePassengerName(e, seat)} type="text" name="passenger-name" placeholder="Enter Name" />
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="gender" id="male" value="Male" onClick={e => handleGender(e, seat)} />
                        <label class="form-check-label" for="male">Male</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="gender" id="female" value="Female" onClick={e => handleGender(e, seat)} />
                        <label class="form-check-label" htmlFor="female">Female</label>
                    </div>
                </form>)

        })
    }
    return (
        <div className="ss">
            <div className="row">
                <div className="column1">
                    <div className="plane">
                        <form onChange={e => getSeatNumber(e)}>
                            <ol className="cabin fuselage">
                                <li className="row row--1">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox" disabled value="1A" id="1A" />
                                            <label htmlFor="1A">1A</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" id="1B" value="1B" />
                                            <label htmlFor="1B">1B</label>
                                        </li>
                                        
                                        
                                    </ol>
                                </li>
                                <li className="row row--2">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox" disabled value="2A" id="2A" />
                                            <label htmlFor="2A">2A</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" disabled value="2B" id="2B" />
                                            <label htmlFor="2B">2B</label>
                                        </li>
                                        

                                    </ol>
                                </li>
                                <li className="row row--3">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox" value="3A" id="3A" />
                                            <label htmlFor="3A">3A</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" disabled value="3B" id="3B" />
                                            <label htmlFor="3B">3B</label>
                                        </li>
                                        

                                    </ol>
                                </li>
                                <li className="row row--4">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox" disabled value="4A" id="4A" />
                                            <label htmlFor="4A">4A</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="4B" id="4B" />
                                            <label htmlFor="4B">4B</label>
                                        </li>
                                        

                                    </ol>
                                </li>
                                <li className="row row--5">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox" value="5A" id="5A" />
                                            <label htmlFor="5A">5A</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="5B" id="5B" />
                                            <label htmlFor="5B">5B</label>
                                        </li>
                                        

                                    </ol>
                                </li>
                                <li className="row row--6">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox" disabled value="6A" id="6A" />
                                            <label htmlFor="6A">6A</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="6B" id="6B" />
                                            <label htmlFor="6B">6B</label>
                                        </li>
                                        

                                    </ol>
                                </li>
                                <li className="row row--7">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox" value="7A" id="7A" />
                                            <label htmlFor="7A">7A</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" disabled value="7B" id="7B" />
                                            <label htmlFor="7B">7B</label>
                                        </li>
                                       
                                    </ol>
                                </li>
                                <li className="row row--8">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox" value="8A" id="8A" />
                                            <label htmlFor="8A">8A</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" disabled value="8B" id="8B" />
                                            <label htmlFor="8B">8B</label>
                                        </li>
                                        

                                    </ol>
                                </li>
                                <li className="row row--9">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox" value="9A" id="9A" />
                                            <label htmlFor="9A">9A</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" disabled value="9B" id="9B" />
                                            <label htmlFor="9B">9B</label>
                                        </li>
                                        

                                    </ol>
                                </li>
                                <li className="row row--10">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox" value="10A" id="10A" />
                                            <label htmlFor="10A">10A</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="10B" id="10B" />
                                            <label htmlFor="10B">10B</label>
                                        </li>
                                        
                                    </ol>
                                </li>
                            </ol>
                        </form>
                    </div>
                    <hi>     Lower Deck</hi>
                </div>



                <div className="column3">
                    <div className="plane">
                        <form onChange={e => getSeatNumber(e)}>
                            <ol className="cabin fuselage">
                                <li className="row row--1">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox" disabled value="11A" id="11A" />
                                            <label htmlFor="11A">11A</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" id="11B" value="11B" />
                                            <label htmlFor="11B">11B</label>
                                        </li>
                                        
                                        
                                    </ol>
                                </li>
                                <li className="row row--2">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox" disabled value="12A" id="12A" />
                                            <label htmlFor="12A">12A</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" disabled value="12B" id="12B" />
                                            <label htmlFor="12B">12B</label>
                                        </li>
                                        

                                    </ol>
                                </li>
                                <li className="row row--3">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox" value="13A" id="13A" />
                                            <label htmlFor="13A">13A</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" disabled value="13B" id="13B" />
                                            <label htmlFor="13B">13B</label>
                                        </li>
                                        
                                    </ol>
                                </li>
                                <li className="row row--4">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox" disabled value="14A" id="14A" />
                                            <label htmlFor="14A">14A</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="14B" id="14B" />
                                            <label htmlFor="14B">14B</label>
                                        </li>
                                        

                                    </ol>
                                </li>
                                <li className="row row--5">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox" value="15A" id="15A" />
                                            <label htmlFor="15A">15A</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="15B" id="15B" />
                                            <label htmlFor="15B">15B</label>
                                        </li>
                                        

                                    </ol>
                                </li>
                                <li className="row row--6">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox" disabled value="16A" id="16A" />
                                            <label htmlFor="16A">16A</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="16B" id="16B" />
                                            <label htmlFor="16B">16B</label>
                                        </li>
                                        

                                    </ol>
                                </li>
                                <li className="row row--7">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox" value="17A" id="17A" />
                                            <label htmlFor="17A">17A</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" disabled value="17B" id="17B" />
                                            <label htmlFor="17B">17B</label>
                                        </li>
                                        

                                    </ol>
                                </li>
                                <li className="row row--8">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox" value="18A" id="18A" />
                                            <label htmlFor="18A">18A</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" disabled value="18B" id="18B" />
                                            <label htmlFor="18B">18B</label>
                                        </li>
                                        

                                    </ol>
                                </li>
                                <li className="row row--9">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox" value="19A" id="19A" />
                                            <label htmlFor="19A">19A</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" disabled value="19B" id="19B" />
                                            <label htmlFor="19B">19B</label>
                                        </li>
                                        

                                    </ol>
                                </li>
                                <li className="row row--10">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox" value="20A" id="20A" />
                                            <label htmlFor="20A">20A</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="20B" id="20B" />
                                            <label htmlFor="20B">20B</label>
                                        </li>
                                        
                                    </ol>
                                </li>
                            </ol>
                        </form>
                    </div>
                    <hi>     Upper Deck</hi>
                </div>






                <div className="column2">
                    <div className="seatInfo">
                        <form className="form-group">
                            {renderPassengerData(seatNumber)}
                        </form>
                        <div>
                            <button onClick={e => handleSubmitDetails(e)} className="btn btn-info seatBT">
                                Confirm Details
                            </button>
                        </div>
                        {/* <div className={arrowDown ? "activeArrow2" : "nonActive"}>
                            <FaAngleDoubleDown />
                        </div> */}
                    </div>
                </div>
            </div>

        </div>

    )
}
