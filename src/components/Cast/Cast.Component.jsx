import React from "react";

const Cast = (props) => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="w-36 h-36">
          <img
            src={`https://image.tmdb.org/t/p/original${props.image}`}
            alt="cast&crew"
            className="w-full h-full rounded-full object-cover"
          />
        </div>
        <h1 className="text-md text-gray-800 font-semibold text-center">
          {props.castname}
        </h1>
        <h1 className="text-sm text-gray-600 text-center">as {props.role}</h1>
      </div>
    </div>
  );
};

export default Cast;
