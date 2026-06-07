import Image from 'next/image';

const team = [
  {
    name: 'Ryan Thompson',
    role: 'Founder & CEO',
    image: '/images/men.jpg',
  },
  {
    name: 'Ethan Caldwell',
    role: 'Sales Manager',
    image: '/images/Ethan Caldwell.jpg',
  },
  {
    name: 'Sofia Anderson',
    role: 'Finance Head',
    image: '/images/Sofia Anderson.jpg',
  },
  {
    name: 'Marcus Fields',
    role: 'Service Rep',
    image: '/images/Marcus Fields.jpg',
  },
];

export default function AboutTeam() {
  return (
    <section className="py-20 px-4" style={{ backgroundColor: '#dedede' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className="text-[#0f172a] text-2xl font-bold uppercase tracking-wide mb-4"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            MEET OUR TEAM
          </h2>
          <p
            className="text-[#0f172a] text-base max-w-2xl mx-auto opacity-70"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <div key={member.name} className="text-center">
              <div className="relative h-64 rounded-xl overflow-hidden mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3
                className="text-[#0f172a] text-lg font-bold"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                {member.name}
              </h3>
              <p
                className="text-gray-500 text-sm"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}