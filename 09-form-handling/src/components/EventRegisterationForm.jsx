import React, { useState } from 'react'

const EventRegisterationForm = () => {
    const[formData, setFormData] = useState({
        name:'',
        email:'',
        password:'',
        confirmPassword:'',
        bio:'',
        country:'',
        shift:'',
        isAgree:false
    });
    const handleChange = (e)=>{
        const {name, value} = e.target;
        setFormData(prev => ({...prev, [name]:value}));
    };
  return (
    <div className="min-h-screen bg-slate-100 px-4 py-10 text-slate-900 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl shadow-slate-300/40">
            <div className="border-b border-slate-200 bg-slate-900 px-6 py-7 sm:px-10">
                <h1 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Event Registeration Form</h1>
            </div>
            <div className="grid gap-10 p-6 sm:p-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-5">
        <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700" htmlFor="name">Name : </label>
            <input className="w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20" id='name' type="text" name='name' placeholder='Enter your name' value={formData.name} onChange={(e)=> handleChange(e)} />
        </div>
        <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700" htmlFor="email">Email : </label>
            <input className="w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20" id='email' type="email" name='email' placeholder='add email' value={formData.email} onChange={(e)=> handleChange(e)}  />
        </div>
        <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700" htmlFor="password">Password : </label>
            <input className="w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20" id='password' type="password" name='password' placeholder='add password' value={formData.password} onChange={(e)=> handleChange(e)} />
        </div>
        <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700" htmlFor="confirm-password">Confirm Password : </label>
            <input className="w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20" id='confirm-password' type="password" name='confirmPassword' placeholder='confirm password' value={formData.confirmPassword} onChange={(e)=> handleChange(e)} />
        </div>
        <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700" htmlFor="bio">Bio : </label>
            <textarea className="min-h-32 w-full resize-y rounded-md border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20" id='bio' name="bio" placeholder='Add about yourself...' value={formData.bio} onChange={(e) => handleChange(e)}/>
        </div>
        <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700" htmlFor="country">Country : </label>
            <select className="w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20" name="country" id="country" value={formData.country} onChange={(e)=> handleChange(e)}>
                
                    <option value="">Select Country</option>
                    <option value="pakistan">Pakistan</option>
                    <option value="germany">Germany</option>
                    <option value="usa">USA</option>
                    <option value="uk">UK</option>
                    <option value="Australia">Australia</option>
            
            </select>
        </div>
        <div>
            <div className="space-y-3">
                <input className="h-4 w-4 accent-teal-700" type="radio" id='morning' name='shift' value="morning" checked={formData.shift === 'morning'} onChange={(e)=>handleChange(e)}  />
                <label className="ml-2 text-sm text-slate-700" htmlFor="morning">Morning</label>
            </div>
            <div className="space-y-3">
                <input className="h-4 w-4 accent-teal-700" type="radio" id='evening' name='shift' value="evening" checked={formData.shift === 'evening'} onChange={(e)=>handleChange(e)} />
                <label className="ml-2 text-sm text-slate-700" htmlFor="evening">Evening</label>
            </div>
            <div className="space-y-3">
                <input className="h-4 w-4 accent-teal-700" type="radio" id='night' name='shift' value="night" checked={formData.shift === 'night'} onChange={(e)=>handleChange(e)} />
                <label className="ml-2 text-sm text-slate-700" htmlFor="night">Night</label>
            </div>
        </div>
        <div>
            <div className="mt-6 flex items-center gap-3 border-t border-slate-200 pt-5">
                <input className="h-4 w-4 rounded accent-teal-700" checked={formData.isAgree} onChange={(e)=> setFormData(prev => ({...prev, isAgree: e.target.checked}))} type="checkbox" name='isAgree' id='checkbox' />
                <label className="text-sm text-slate-700" htmlFor="checkbox">Agree with terms and conditions</label>
            </div>
        </div>


        </div>
        <div className="h-fit rounded-lg border border-slate-200 bg-slate-50 p-6 sm:p-7">
            <h1 className="mb-6 border-b border-slate-200 pb-4 text-xl font-semibold text-slate-900">Live Preview</h1>
            <div className="space-y-4 text-sm">
            <h4 className="flex justify-between gap-4 border-b border-slate-200 pb-3 text-slate-600">Name : <span className="text-right font-medium text-slate-900">{formData.name}</span></h4>
            <h4 className="flex justify-between gap-4 border-b border-slate-200 pb-3 text-slate-600">Email : <span className="text-right font-medium text-slate-900">{formData.email}</span></h4>
            <h4 className="flex justify-between gap-4 border-b border-slate-200 pb-3 text-slate-600">Password : <span className="text-right font-medium text-slate-900">{formData.password}</span></h4>
            <h4 className="border-b border-slate-200 pb-3 text-slate-600 break-all w-full max-w-full ">Bio : <span className="mt-2 block whitespace-pre-wrap break-words font-medium leading-6 text-slate-900">{formData.bio}</span></h4>
            <h4 className="flex justify-between gap-4 border-b border-slate-200 pb-3 text-slate-600">Country : <span className="text-right font-medium text-slate-900">{formData.country}</span></h4>
            <h4 className="flex justify-between gap-4 border-b border-slate-200 pb-3 text-slate-600">Shift : <span className="text-right font-medium text-slate-900">{formData.shift}</span></h4>
            <h4 className="flex justify-between gap-4 text-slate-600">CheckBox Checked : <span className="text-right font-semibold text-teal-700">{formData.isAgree ? "yes" : "No"}</span></h4>
            </div>
        </div>
            </div>
        </div>
    </div>
  )
}

export default EventRegisterationForm