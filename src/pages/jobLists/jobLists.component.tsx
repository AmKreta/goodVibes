import React from 'react';
import jobList from './jobLists';
import getCurrencySymbol from '../../util/getCurrencySymbol';
import Button from '../../components/button/button.component';

const JobListsComponent = () => {
    return <div className='job-list-container'>
        {jobList.map((jobDetail, index) => {
            const isQuickApply = jobDetail.applyType === 'quick';
            return <div key={index} className='mx-auto my-6 flex flex-row flex-nowrap items-start h-[320px] w-[830px] border-border-color rounded-xl border-solid border-[1px] px-4 py-6 gap-2 font-poppins'>
                <img src={jobDetail.companyLogo} alt="company logo" className='h-[48px] w-[48px] object-cover' />
                <div className='flex-1 h-[100%] text-font-dark-color'>
                    <div>
                        <div className='font-normal text-font-24 leading-8'>{jobDetail.jobTitle}</div>
                        <div className='text-font-16 leading-6'>{jobDetail.companyName} - {jobDetail.industry}</div>
                        <div className='text-font-16 leading-6 text-grey-color'>{jobDetail.location} ({jobDetail.remoteType})</div>
                    </div>
                    <div className='my-6 flex flex-col flex-nowrap gap-2 text-font-16 leading-6'>
                        <div>{jobDetail.jobType} ({jobDetail.timing.start} - {jobDetail.timing.end} {jobDetail.timing.timezone})</div>
                        <div>Experience ({jobDetail.experience.minimum} - {jobDetail.experience.minimum} years)</div>
                        <div>{jobDetail.salary.currency} ({getCurrencySymbol(jobDetail.salary.currency)}) {jobDetail.salary.minimum.toLocaleString('en-IN')} - {jobDetail.salary.maximum.toLocaleString('en-IN')} / {jobDetail.salary.duration}</div>
                        <div>{jobDetail.totalEmployee.minimum} - {jobDetail.totalEmployee.maximum} employees</div>
                    </div>
                    <Button title={isQuickApply ? 'Apply Now' : 'External Apply'} inverted={!isQuickApply}/>
                </div>
            </div>
        })}
    </div>
}

export default JobListsComponent;