import React, {useState} from 'react'
import call0 from '../../assets/call0.png'
import call1 from '../../assets/call1.png'
import call2 from '../../assets/call2.png'

const Contact = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  }
  return (
    <div className='p-8 space-y-4'>
      <h1 className='text-2xl font-bold mt-4 mb-3 cursor-pointer' onClick={handleToggle} >Frequantly asked questions ?</h1>
      <div className=''>
            <p  style={{ cursor: 'pointer', color: 'darkblue' }}>
                ~Is sevice providers will be available 24/7 ?
            </p>
            {isExpanded && (
                <div style={{ marginTop: '10px' }}>
                    <p>
                    Availability depends on the individual service provider. Some providers offer 24/7 services, while others may have specific working hours.
                    </p>
                </div>
            )}
      </div>
      <div>
            <p  style={{ cursor: 'pointer', color: 'darkblue' }}>
              ~How do I book a service provider?
            </p>
            {isExpanded && (
                <div style={{ marginTop: '10px' }}>
                    <p>
                    Once you find a service provider that meets your needs, you can check on the contact details on their profile page.
                    </p>
                </div>
            )}
      </div>
      <div>
            <p  style={{ cursor: 'pointer', color: 'darkblue' }}>
                ~Is there a cost associated with using this platform?
            </p>
            {isExpanded && (
                <div style={{ marginTop: '10px' }}>
                    <p>
                    The platform itself is free to use. However, the cost of the services provided by the professionals will vary based on the service type, provider experience, and other factors
                    </p>
                </div>
            )}
      </div>
      <div>
            <p  style={{ cursor: 'pointer', color: 'darkblue' }}>
                ~How do I know if a service provider is trustworthy?
            </p>
            {isExpanded && (
                <div style={{ marginTop: '10px' }}>
                    <p>
                    Our platform allows users to rate and review service providers based on their experiences. You can check the ratings, read reviews, and verify the service provider’s credentials before making a decision.
                    </p>
                </div>
            )}
      </div>
      <div>
            <p  style={{ cursor: 'pointer', color: 'darkblue' }}>
              ~Can I cancel a booking after it has been made?
            </p>
            {isExpanded && (
                <div style={{ marginTop: '10px' }}>
                    <p>
                    You can directly cancle the booking by contacting the service provider. 
                    </p>
                </div>
            )}
      </div>
      <div>
            <p  style={{ cursor: 'pointer', color: 'darkblue' }}>
              ~Is there a way to request a specific service not listed on the platform?
            </p>
            {isExpanded && (
                <div style={{ marginTop: '10px' }}>
                    <p>
                    If you need a service that isn't listed, you can contact our support team, and we will try to find a provider who can fulfill your request.
                    </p>
                </div>
            )}
      </div>
      <div>
            <p  style={{ cursor: 'pointer', color: 'darkblue' }}>
              ~What payment methods are accepted?
            </p>
            {isExpanded && (
                <div style={{ marginTop: '10px' }}>
                    <p>
                    Payment methods vary by service provider. Common methods include cash, bank transfer, and online payment platforms. Please confirm the payment options directly with the service provider.
                    </p>
                </div>
            )}
      </div>
      <div className='mt-12 flex cursor-pointer'>
      <img src={call0} className='w-14 flex ml-6'/>
      <p className='mt-4 ml-4'>+91 80000 80000 <span className='ml-3'>TollFree*</span></p>
      </div>
      <div className='mt-8 flex cursor-pointer'>
      <img src={call1} className='w-12 flex ml-6'/>
      <p className='mt-4 ml-4 cursor-pointer'>+91 80000 80000</p>
      </div>
      <div className='mt-8 flex cursor-pointer'>
      <img src={call2} className='w-12 flex ml-6'/>
      <p className='mt-4 ml-4 '>serviceFinder@gmail.com</p>
      </div>
    </div>
  )
}

export default Contact
