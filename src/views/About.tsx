

const About = () => {






  return (
    
<div className="p-8 mx-40 h-screen">
  <h1 className="text-3xl font-bold mb-4">About Us</h1>
  
  <div className='flex'>
    {/* Story of the Cafe */}
    <div className="mb-8 w-[70%]">
      <h2 className="text-xl font-bold mb-2">Our Story</h2>
      <p className='max-w-[50%]'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo sit ut accusantium reprehenderit quod dolorum numquam eius aliquid consequuntur, blanditiis iusto sequi, quam odit nostrum amet libero harum maxime. Totam!
      </p>
    </div>
    
    {/* Contact Details */}
    <div className='ml-auto'>
      <h2 className="text-xl font-bold mb-2">Contact Us</h2>
      <ul className="list-disc ml-6">
        <li>Email: example@example.com</li>
        <li>Phone: 123-456-7890</li>
        <li>Address: 123 Cafe Street, City, Country</li>
      </ul>
    </div>
      </div>
      

      {/* Contact Form */}
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Get In Touch</h2>
        <form>
          <div className="mb-4">
            <label className="block font-bold mb-2" htmlFor="name">Name</label>
            <input 
              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500" 
              type="text" 
              id="name" 
              name="name" 
            />
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-2" htmlFor="email">Email</label>
            <input 
              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500" 
              type="email" 
              id="email" 
              name="email" 
            />
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-2" htmlFor="message">Message</label>
            <textarea 
              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500" 
              id="message" 
              name="message" 
              rows="4" 
            />
          </div>
          <button 
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:bg-blue-700"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default About;
