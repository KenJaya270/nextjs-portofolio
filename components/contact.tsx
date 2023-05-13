"use client"
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
    const [state, handleSubmit] = useForm("xvonyale");
    if (state.succeeded) {
        return(
            <div>
                <div className="mb-3">
                    <h2 className='text-black font-bold text-3xl tracking-[0.3rem] my-3'>Contact Me</h2>
                    <p className='text-2xl'>If you have any question, just fill form below. I will read your message as soon as possible.</p>
                </div>
                <div className="rounded py-10 mt-1">
                    <div id='modalID' className='bg-lime-600 px-4 py-6 flex items-center justify-between'>
                        <p className='font-semibold text-lg text-white' data-modal-hide="modalID">Thanks For Messaging Me!</p>
                        <span className='text-white text-lg'>&times;</span>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label className='text-gray-700 block mb-1 font-bold' htmlFor="email">Email Address</label>
                            <input id="email" type="email" name="email" className='w-full h-12 mb-5 rounded px-4 py-4 bg-transparent border-2 border-slate-950 text-black focus:outline-none'/>
                            <ValidationError prefix="Email" field="email" errors={state.errors}/>
                        </div>
                        <label className='text-gray-700 block font-bold mb-1' htmlFor="message">Message</label>
                        <textarea id="message" name="message" className='h-200 w-full rounded px-4 py-4 bg-transparent border-2 border-slate-900 text-black focus:outline-none'/>
                        <ValidationError 
                            prefix="Message" 
                            field="message"
                            errors={state.errors}
                        />
                        <button className='bg-[#19A7CE] text-white px-5 py-2 rounded-lg hover:bg-transparent hover:text-[#19A7CE] hover:border-2 hover:border-[#19A7CE] font-semibold transition-colors' id='submit' type="submit" disabled={state.submitting}>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        )
    }
    return (
        <div>
            <div className="mb-3">
                <h2 className='text-black font-bold text-3xl tracking-[0.3rem] my-3'>Contact Me</h2>
                <p className='text-2xl'>If you have any question, just fill form below. I will read your message as soon as possible.</p>
            </div>
            <div className="rounded py-10 mt-1">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className='text-gray-700 block mb-1 font-bold' htmlFor="email">Email Address</label>
                        <input id="email" type="email" name="email" className='w-full h-12 mb-5 rounded px-4 py-4 bg-transparent border-2 border-slate-950 text-black focus:outline-none'/>
                        <ValidationError prefix="Email" field="email" errors={state.errors}/>
                    </div>
                    <label className='text-gray-700 block font-bold mb-1' htmlFor="message">Message</label>
                    <textarea id="message" name="message" className='h-200 w-full rounded px-4 py-4 bg-transparent border-2 border-slate-900 text-black focus:outline-none'/>
                    <ValidationError 
                        prefix="Message" 
                        field="message"
                        errors={state.errors}
                    />
                    <button className='bg-[#19A7CE] text-white px-5 py-2 rounded-lg hover:bg-transparent hover:text-[#19A7CE] hover:border-2 hover:border-[#19A7CE] font-semibold transition-colors' id='submit' type="submit" disabled={state.submitting}>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
function App() {
    return (
        <ContactForm />
    );
}
export default App;

// import React from 'react';
// import { useForm, ValidationError } from '@formspree/react';
// function ContactForm() {
//   const [state, handleSubmit] = useForm("xvonyale");
//   if (state.succeeded) {
//       return <p>Thanks for joining!</p>;
//   }
//   return (
//       <form onSubmit={handleSubmit}>
//       <label htmlFor="email">
//         Email Address
//       </label>
//       <input
//         id="email"
//         type="email" 
//         name="email"
//       />
//       <ValidationError 
//         prefix="Email" 
//         field="email"
//         errors={state.errors}
//       />
//       <textarea
//         id="message"
//         name="message"
//       />
//       <ValidationError 
//         prefix="Message" 
//         field="message"
//         errors={state.errors}
//       />
//       <button type="submit" disabled={state.submitting}>
//         Submit
//       </button>
//     </form>
//   );
// }
// function App() {
//   return (
//     <ContactForm />
//   );
// }
// export default App;