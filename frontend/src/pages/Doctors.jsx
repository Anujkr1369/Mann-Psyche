import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate, useParams } from 'react-router-dom'

const Doctors = () => {

  const { speciality } = useParams()

  const [filterDoc, setFilterDoc] = useState([])
  const [showFilter, setShowFilter] = useState(false)
  const navigate = useNavigate();

  const { doctors } = useContext(AppContext)

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
    } else {
      setFilterDoc(doctors)
    }
  }

  useEffect(() => {
    applyFilter()
  }, [doctors, speciality])

  return (
    <div>
      <p className='text-gray-600'>Browse through the doctors specialist.</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <button onClick={() => setShowFilter(!showFilter)} className={`py-1 px-3 border rounded text-sm  transition-all sm:hidden ${showFilter ? 'bg-primary text-white' : ''}`}>Filters</button>
        <div className={`flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex' : 'hidden sm:flex'}`}>
          <p onClick={() => speciality === 'NeuroMuscular Consultant' ? navigate('/doctors') : navigate('/doctors/NeuroMuscular Consultant')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'NeuroMuscular Consultant' ? 'bg-[#E2E5FF] text-black ' : ''}`}>Neuromuscular Consultant</p>
          <p onClick={() => speciality === 'Dental Surgeon' ? navigate('/doctors') : navigate('/doctors/Dental Surgeon')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Dental Surgeon' ? 'bg-[#E2E5FF] text-black ' : ''}`}>Dental Surgeon</p>
          <p onClick={() => speciality === 'Special Educator' ? navigate('/doctors') : navigate('/doctors/Special Educator')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Special Educator' ? 'bg-[#E2E5FF] text-black ' : ''}`}>Special Educator</p>
          <p onClick={() => speciality === 'Psychologist' ? navigate('/doctors') : navigate('/doctors/Psychologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Psychologist' ? 'bg-[#E2E5FF] text-black ' : ''}`}>Psychologist</p>
          <p onClick={() => speciality === 'Clinical Nutritionist' ? navigate('/doctors') : navigate('/doctors/Clinical Nutritionist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Clinical Nutritionist' ? 'bg-[#E2E5FF] text-black ' : ''}`}>Clinical Nutritionist</p>
          <p onClick={() => speciality === 'Head & Neck Cancer Specialist' ? navigate('/doctors') : navigate('/doctors/Head & Neck Cancer Specialist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Head & Neck Cancer Specialist' ? 'bg-[#E2E5FF] text-black ' : ''}`}>Head & Neck Cancer Specialist</p>
          <p onClick={() => speciality === 'Occupational Therapist' ? navigate('/doctors') : navigate('/doctors/Occupational Therapist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Occupational Therapist' ? 'bg-[#E2E5FF] text-black ' : ''}`}>Occupational Therapist</p>
          <p onClick={() => speciality === 'Developmental Delays' ? navigate('/doctors') : navigate('/doctors/Developmental Delays')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Developmental Delays' ? 'bg-[#E2E5FF] text-black ' : ''}`}>Developmental Delays</p>
          <p onClick={() => speciality === 'General Physician' ? navigate('/doctors') : navigate('/doctors/General Physician')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'General Physician' ? 'bg-[#E2E5FF] text-black ' : ''}`}>General Physician</p>
          <p onClick={() => speciality === 'Pediatrician' ? navigate('/doctors') : navigate('/doctors/Pediatrician')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Pediatrician' ? 'bg-[#E2E5FF] text-black ' : ''}`}>Pediatrician</p>
          <p onClick={() => speciality === 'Physical Therapy Aide' ? navigate('/doctors') : navigate('/doctors/Physical Therapy Aide')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Physical Therapy Aide' ? 'bg-[#E2E5FF] text-black ' : ''}`}>Physical Therapy Aide</p>
          <p onClick={() => speciality === 'Cognitive Behavioral Therapist (CBT)' ? navigate('/doctors') : navigate('/doctors/Cognitive Behavioral Therapist (CBT)')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Cognitive Behavioral Therapist (CBT)' ? 'bg-[#E2E5FF] text-black ' : ''}`}>Cognitive Behavioral Therapist (CBT)</p>

          




          


        </div>
        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
          {filterDoc.map((item, index) => (
            <div onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0, 0) }} className='border border-[#C9D8FF] rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
              <img className='bg-[#EAEFFF]' src={item.image} alt="" />
              <div className='p-4'>
                <div className={`flex items-center gap-2 text-sm text-center ${item.available ? 'text-green-500' : "text-gray-500"}`}>
                  <p className={`w-2 h-2 rounded-full ${item.available ? 'bg-green-500' : "bg-gray-500"}`}></p><p>{item.available ? 'Available' : "Not Available"}</p>
                </div>
                <p className='text-[#262626] text-lg font-medium'>{item.name}</p>
                <p className='text-[#5C5C5C] text-sm'>{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Doctors