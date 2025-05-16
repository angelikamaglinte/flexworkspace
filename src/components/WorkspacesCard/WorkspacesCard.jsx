import React from 'react';

const WorkspacesCard = ({ image, location, type, price, rating }) => {
    return (
        <div className="">
            {/* Image Section */}
            <div className="relative">
                <img src={image} alt={type} className="object-contain rounded-t-lg" />
                {/* Details Section */}
                <div className="p-4">
                    <div className="flex justify-between items-center w-54"> {/* Set a fixed width */}
                        <h3 className="text-sm font-medium text-gray-800">{location}</h3>
                        <div className="flex items-center">
                            <span className="text-yellow-500 text-sm">★</span>
                            <span className="text-sm text-gray-600 ml-1">{rating}</span>
                        </div>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">{type}</p>
                    <p className="text-sm font-semibold text-gray-800 mt-2">{price} week</p>
                </div>
            </div>
        </div>
    );
};

export default WorkspacesCard;