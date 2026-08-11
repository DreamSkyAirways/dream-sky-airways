import PersonalInformationForm from '@/components/profile/PersonalDetails';
import React from 'react'

const page = () => {
  return (
 <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-8">
  <div className="max-w-4xl mx-auto">
    <PersonalInformationForm />
  </div>
</main>
  )
}

export default page