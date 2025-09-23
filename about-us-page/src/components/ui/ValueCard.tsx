import React from 'react';

interface ValueCardProps {
  title: string;
  description: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ title, description }) => {
  return (
    <div className="self-stretch relative flex min-w-60 gap-[-67px] grow shrink w-[210px] my-auto">
      <article className="border shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] z-0 min-w-60 w-[262px] bg-white p-[38px] rounded-[30px] border-solid border-[#E0E0E0] max-md:px-5">
        <div className="flex min-h-[54px] w-[54px] h-[54px] bg-[#097484] py-3 rounded-[10px]" />
        <div className="w-full mt-6">
          <h3 className="text-[#181818] text-xl font-medium">
            {title}
          </h3>
          <p className="text-[#393C3D] text-base font-normal leading-6 mt-2">
            {description}
          </p>
        </div>
      </article>
    </div>
  );
};

export default ValueCard;
