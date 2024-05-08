import React from 'react'

const FeatureCard = (props) => {
    return (
      <div className="container items-center justify-center w-[250px] h-[250px] p-5 bg-[#5AB2FF] m-1 rounded-xl shadow-xl">
        <h3 className="font-bold text-[#FDDE55]">{props.tag}</h3>
        <h6 className="mt-2 line-clamp-5">{props.description}</h6>
      </div>
    );
}

export default FeatureCard 