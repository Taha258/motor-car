const values = [
  {
    number: '01',
    title: 'Excellence',
    description: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt.',
  },
  {
    number: '02',
    title: 'Reliability',
    description: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt.',
  },
  {
    number: '03',
    title: 'Affordability',
    description: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt.',
  },
  {
    number: '04',
    title: 'Loyalty',
    description: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt.',
  },
];

export default function AboutCoreValues() {
  return (
    <section className="py-20 px-4" style={{ backgroundColor: '#d6d6d6' }}>
      <div className="max-w-4xl mx-auto">
        
        {/* Dark Card Container */}
        <div className="bg-[#0f172a] rounded-2xl p-10 md:p-14">
          
          {/* Header */}
          <div className="text-center mb-10">
            <h2
              className="text-white text-2xl font-bold uppercase tracking-wide mb-4"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              OUR CORE VALUES
            </h2>
            <p
              className="text-gray-400 text-sm max-w-md mx-auto"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.
            </p>
          </div>

          {/* Values Grid - Transparent Cards with Border */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {values.map((value) => (
              <div
                key={value.number}
                className="border border-white/10 rounded-xl p-5"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="w-8 h-8 rounded-lg bg-gray-600/50 text-white text-sm font-bold flex items-center justify-center"
                    style={{ fontFamily: 'Syne, sans-serif' }}
                  >
                    {value.number}
                  </span>
                  <h3
                    className="text-white text-base font-bold"
                    style={{ fontFamily: 'Syne, sans-serif' }}
                  >
                    {value.title}
                  </h3>
                </div>
                <p
                  className="text-gray-400 text-sm leading-relaxed"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}