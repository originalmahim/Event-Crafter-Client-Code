
import { FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

function TeamSection() {
  const teamMembers = [
          {
                    name: 'Johnson Stone',
                    role: 'Event Manager',
                    bio: 'Passionate about creating memorable social events that exceed expectations.',
                    imgSrc: 'https://cdn.tuk.dev/assets/photo-1566753323558-f4e0952af115.jfif',
                  },
                  {
                    name: 'Dean Jones',
                    role: 'Event Planning Specialist',
                    bio: 'An expert in event planning with 20 years of experience in organizing social gatherings.',
                    imgSrc: 'https://cdn.tuk.dev/assets/boy-smiling_23-2148155640.jpg',
                  },
                  {
                    name: 'Rachel Adams',
                    role: 'Party Design Expert',
                    bio: 'A product designer with a passion for immersive party experiences and emerging event technologies.',
                    imgSrc: 'https://cdn.tuk.dev/assets/blond-man-happy-expression_1194-2873.jpg',
                  }
    
  ];

  return (
          <div className='bg-white'>

          <div className=" max-w-7xl mx-auto py-32">
          <div className=" text-center">

          <h1 className="text-4xl font-semibold mb-6 lg:text-5xl">
          <span className="text-indigo-600">Our Dedicated Team Behind</span>  <br /> Successful Events
          </h1>
          
          </div>
          <div className="grid grid-cols-3">
          {teamMembers.map((member, index) => (
          <div key={index} className="card w-96 bg-base-100 shadow-xl">
          <figure> <img className='h-64 w-full' src= {member.imgSrc}/> </figure>
          <div className="card-body">
            <h2 className="card-title">{member.name}</h2>
            <p>{member.role}</p>
            <p>{member.bio}</p>
            <div className='flex gap-4 text-center items-center'>
          <FaGithub></FaGithub>
          <FaInstagram></FaInstagram>
          <FaTwitter></FaTwitter>
          </div>
          </div>
          
        </div>
          ))}
          </div>
          
          </div>
          </div>
  );
}

export default TeamSection;