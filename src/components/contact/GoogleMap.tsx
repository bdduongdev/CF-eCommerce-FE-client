import React from 'react'

const GoogleMap = () => {
    return (
        <>
            <section className="p-[30px] bg-white rounded-xl">
                <h2 className="text-[18px] mb-[30px] font-bold">FIND US ON GOOGLE MAP</h2>
                <div className="w-full h-[300px]">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3724.10234409193!2d105.72557257525662!3d21.028590580620612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDAxJzQyLjkiTiAxMDXCsDQzJzQxLjMiRQ!5e0!3m2!1svi!2s!4v1749005840236!5m2!1svi!2s"
                        className="w-full h-full border-0 rounded-lg"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </section>
        </>
    )
}

export default GoogleMap