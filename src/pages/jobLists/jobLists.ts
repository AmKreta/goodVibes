interface JOB_DETAILS {
    jobTitle: string;
    companyName: string;
    industry: string;
    location: string;
    remoteType: 'In-office' | 'Remote';
    experience: {
        minimum: number;
        maximum: number;
    },
    salary: {
        minimum: number;
        maximum: number;
        currency: string;
        duration: 'Year' | 'Month' | 'Week' | 'Day' | 'Hour';
    },
    totalEmployee: {
        minimum:number;
        maximum:number;
    };
    applyType: 'quick' | 'external';
    jobType: 'Part-Time' | 'Full-Time';
    timing: {
        start: string;
        end: string;
        timezone: string;
    },
    companyLogo: string;
}

const jobList: JOB_DETAILS[] = [
    {
        jobTitle: 'UI UX Designer',
        companyName: 'Great Vibes',
        industry: 'Information Technology',
        location: 'Chennai, Tamil Nadu, India',
        remoteType: 'In-office',
        experience: {
            minimum: 1,
            maximum: 2
        },
        salary: {
            minimum: 30_000,
            maximum: 60_000,
            currency: 'INR',
            duration: 'Month'
        },
        totalEmployee: {
            minimum:50,
            maximum:100
        },
        applyType: 'quick',
        jobType: 'Part-Time',
        timing: {
            start: '09:00 am',
            end: '05:00 pm',
            timezone: 'IST'
        },
        companyLogo: '/assets/companyLogo.png'
    },
    {
        jobTitle: 'UI UX Designer',
        companyName: 'Great Vibes',
        industry: 'Information Technology',
        location: 'Chennai, Tamil Nadu, India',
        remoteType: 'In-office',
        experience: {
            minimum: 1,
            maximum: 2
        },
        salary: {
            minimum: 30_000,
            maximum: 60_000,
            currency: 'INR',
            duration: 'Year'
        },
        totalEmployee: {
            minimum:50,
            maximum:100
        },
        applyType: 'external',
        jobType: 'Full-Time',
        timing: {
            start: '09:00 am',
            end: '05:00 pm',
            timezone: 'IST'
        },
        companyLogo: '/assets/companyLogo.png'
    },
    {
        jobTitle: 'UI UX Designer',
        companyName: 'Great Vibes',
        industry: 'Information Technology',
        location: 'Chennai, Tamil Nadu, India',
        remoteType: 'In-office',
        experience: {
            minimum: 1,
            maximum: 2
        },
        salary: {
            minimum: 30_000,
            maximum: 60_000,
            currency: 'INR',
            duration: 'Week'
        },
        totalEmployee: {
            minimum:50,
            maximum:100
        },
        applyType: 'quick',
        jobType: 'Full-Time',
        timing: {
            start: '09:00 am',
            end: '05:00 pm',
            timezone: 'IST'
        },
        companyLogo: '/assets/companyLogo.png'
    },
    {
        jobTitle: 'UI UX Designer',
        companyName: 'Great Vibes',
        industry: 'Information Technology',
        location: 'Chennai, Tamil Nadu, India',
        remoteType: 'In-office',
        experience: {
            minimum: 1,
            maximum: 2
        },
        salary: {
            minimum: 30_000,
            maximum: 60_000,
            currency: 'INR',
            duration: 'Hour'
        },
        totalEmployee: {
            minimum:50,
            maximum:100
        },
        applyType: 'external',
        jobType: 'Part-Time',
        timing: {
            start: '09:00 am',
            end: '05:00 pm',
            timezone: 'IST'
        },
        companyLogo: '/assets/companyLogo.png'
    }
]

export default jobList;