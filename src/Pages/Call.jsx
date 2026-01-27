import React from 'react'
import CallList from '../components/CallLogs/CallList'
import Field from '../components/common/Field'
import { ArrowDownNarrowWide, Search } from 'lucide-react'
import { callList } from '../utils'

function Call() {

  return (
    <div>
      {/* Left Side Call List */}
      <div>
        <Field>
          <div className="relative border border-white/10 bg-primary rounded-xl ">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              id="text"
              className={`input pl-10 p-3 pr-10 w-full $`}
              placeholder="Search by phone number, issue type..."
            />
          </div>
        </Field>
        <div className='bg-primary rounded-xl border-b border-white/10 mt-8 py-8'>
          <h1 className='border-b border-white/10 pl-4 pb-2 text-lg md:text-2xl font-bold' >Call List</h1>
          {
            callList.map(call => (
              <CallList key={call.id} call={call} />
            ))
          }
        </div>
      </div>

      {/* Right Side Call Details */}
      <div>
        <div className='flex items-center justify-between px-10'>
          <Field>
            <div className="relative border w-fit px-2 border-white/10 bg-primary rounded-xl ">
              <select
                id="text"
                className={`input p-3 pr-10 bg-primary w-fit $`}
                placeholder="Search by phone number, issue type..."
              >
                <option >All Type <ArrowDownNarrowWide /></option>
                <option >AI Resolved </option>
                <option >Warm Transfer </option>
                <option >Appointment </option>
                <option >Dropped </option>
              </select>
            </div>
          </Field>
          <Field>
            <div className="relative border w-fit px-2 border-white/10 bg-primary rounded-xl ">
              <select
                id="text"
                className={`input p-3 pr-10 bg-primary w-fit $`}
                placeholder="Search by phone number, issue type..."
              >
                <option >All Issues <ArrowDownNarrowWide /></option>
                <option >Screen </option>
                <option >Software </option>
                <option >Battery </option>
                <option >Unknown </option>
              </select>
            </div>
          </Field>
          <Field>
            <div className="relative border w-fit px-2 border-white/10 bg-primary rounded-xl ">
              <select
                id="text"
                className={`input p-3 pr-10 bg-primary w-fit $`}
                placeholder="Search by phone number, issue type..."
              >
                <option >Today <ArrowDownNarrowWide /></option>
                <option >3 Days Ago </option>
                <option >7 Days Ago </option>
                <option >15 Days Ago </option>
                <option >30 Days Ago </option>
              </select>
            </div>
          </Field>
        </div>

      </div>
    </div>
  )
}

export default Call