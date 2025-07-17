import React from 'react'

const Headers = ({text}) => {
  return (
    <div>
        <div className="w-full flex justify-center md:justify-start items-center text-center md:text-start text-white p-4 rounded">
                    <img
                      className="w-16 md:w-24 animate-sway"
                      src="/image/ss.png"
                      alt="logo"
                    />
                    <DecryptedText
                      className="text-5xl md:text-6xl font-anton text-secondary justify-start leading-relaxed"
                      text="About Me"
                      speed={100}
                      maxIterations={20}
                      characters="ABCD1234!?"
                      animateOn="view"
                      parentClassName="all-letters"
                      encryptedClassName="encrypted"
                    />
                  </div>
    </div>
  )
}

export default Headers