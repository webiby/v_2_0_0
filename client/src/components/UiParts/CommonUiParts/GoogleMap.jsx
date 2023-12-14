import React from 'react'

export default function GoogleMap() {
  return (
    <>
        <div className="h-[50dvh] w-full rounded-xl shadow-xl">
            <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.721908576088!2d-0.14032708395713337!3d51.50105187963694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604c148c0a3f9%3A0x5e918f6cf7e84a9f!2sBig%20Ben!5e0!3m2!1sen!2suk!4v1639105342775!5m2!1sen!2suk"
            className="w-full h-full"
            allowFullScreen=""
            loading="lazy"
            ></iframe>
        </div>
    </>
  )
}
