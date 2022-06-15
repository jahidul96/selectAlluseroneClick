
import React, { useState } from 'react'
import RightMarker from './images/rigth-mark.svg'

const personData = [
  {
    id: 1,
    name: "jahidul islam",
    image: "https://cdn-icons-png.flaticon.com/512/146/146031.png"
  },
  {
    id: 2,
    name: "akash",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScYXRnkESKPRmM_WH8ZWnJLZVhtcun1mEOY6_pvszBDEoqPvpecwk9eUulB6cyE4iZQns&usqp=CAU"
  },
  {
    id: 3,
    name: "Majedul islam",
    image: "https://ceytechsystemsolutions.com/wp-content/uploads/2021/10/favpng_avatar-user-profile-recommender-system.png"
  },
  {
    id: 4,
    name: "Tahidul islam",
    image: "https://cdn-icons-png.flaticon.com/512/236/236831.png"
  },
  {
    id: 5,
    name: "Nahid",
    image: "https://cdn-icons-png.flaticon.com/512/236/236831.png"
  },
  {
    id: 6,
    name: "Kaiser",
    image: "https://ceytechsystemsolutions.com/wp-content/uploads/2021/10/favpng_avatar-user-profile-recommender-system.png"
  },
  {
    id: 7,
    name: "Tahidul islam",
    image: "https://cdn-icons-png.flaticon.com/512/236/236831.png"
  },
]



export default function App() {

  const [selectedMember, setSelectedMember] = useState([])

  const selectMember = (id, personData) => {
    let newSelectedMember = [];

    if (id != 'all') {
      let selected = selectedMember.includes(id);
      newSelectedMember = selected ? selectedMember.filter(cMember => cMember != id) : [...selectedMember, id]
    } else {
      newSelectedMember = isAllSelected(personData) ? [] : personData.map(item => item.id)
    }
    setSelectedMember(newSelectedMember)
  }

  const isAllSelected = (data) => {
    let selected = data.map(d => selectedMember.includes(d.id));
    console.log(selected)
    return !selected.includes(false)
  }
  return (
    <div className='homeDiv'>
      <div className='userlistDiv '>
        {
          isAllSelected(personData) ?
            <div className='checkDivStyle isAllSelectedDiv' >
              <span className='checkImgWrapper' onClick={() => selectMember('all', personData)} ><img src={RightMarker} className="checkImgStyle" /></span>
            </div> : <div className='checkDivStyle' onClick={() => selectMember('all', personData)}></div>
        }
        <h2>User List</h2>
      </div>

      <div className='userWrapper'>
        {
          personData.map(data => (
            <div key={data.id} className="userDiv">
              {
                selectedMember.includes(data.id) ? <div className='checkDivStyle isAllSelectedDiv' >
                  <span className='checkImgWrapper' onClick={() => selectMember(data.id)}><img src={RightMarker} className="checkImgStyle" /></span>
                </div> : <div className='checkDivStyle' onClick={() => selectMember(data.id)}></div>
              }

              <div className='imgWrapper'>
                <img className='personImgStyle' src={data.image} alt={data.name} />
              </div>
              <h3>{data.name}</h3>
            </div>
          ))
        }
      </div>
    </div>
  )
}

