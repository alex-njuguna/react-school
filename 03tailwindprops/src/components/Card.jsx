import React from 'react'

const Card = ({ image='https://images.unsplash.com/photo-1546795697-5f8c7239b497?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', username='HC', designation='N/A', quote='``Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, ex.``' }) => {
  return (
    <div>
        <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
            <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={image} alt="" width="384" height="512" />
            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                <blockquote>
                <p className="text-lg font-medium">
                    {quote}
                </p>
                </blockquote>
                <figcaption className="font-medium">
                <div className="text-sky-500 dark:text-sky-400">
                    {username}
                </div>
                <div className="text-slate-700 dark:text-slate-500">
                    {designation}
                </div>
                </figcaption>
            </div>
        </figure>
    </div>
  )
}

export default Card