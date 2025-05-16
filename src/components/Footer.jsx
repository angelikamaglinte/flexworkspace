import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-100 text-gray-700">
            {/* top section */}
            <div className="container mx-auto px-4 py-8">
                <h2 className="text-lg font-semibold mb-4">Discover Your Next Workspace</h2>
                <div className="grid grid-cols-4 gap-4 text-sm">
                    <div>
                        <h3 className="font-medium">Popular</h3>
                        <p>Alberta</p>
                        <p className="text-gray-500">Conference rooms</p>
                        <p>Edmonton</p>
                        <p className="text-gray-500">Meeting rooms</p>
                    </div>
                    <div>
                        <h3 className="font-medium">Meeting rooms</h3>
                        <p>Alberta</p>
                        <p className="text-gray-500">Meeting rooms</p>
                        <p>Edmonton</p>
                        <p className="text-gray-500">Meeting rooms</p>
                    </div>
                    <div>
                        <h3 className="font-medium">Private office rooms</h3>
                        <p>Alberta</p>
                        <p className="text-gray-500">Open desk areas</p>
                        <p>Edmonton</p>
                        <p className="text-gray-500">Meeting rooms</p>
                    </div>
                    <div>
                        <h3 className="font-medium">Desks</h3>
                        <p>Alberta</p>
                        <p className="text-gray-500">Private office rooms</p>
                        <p>Edmonton</p>
                        <p className="text-gray-500">Meeting rooms</p>
                    </div>
                </div>
            </div>

            {/* divider */}
            <hr className="border-gray-300" />

            {/* bottom section */}
            <div className="container mx-auto px-4 py-8 grid grid-cols-3 gap-4 text-sm">
                {/* support */}
                <div>
                    <h3 className="font-medium mb-2">Support</h3>
                    <p>Help Centre</p>
                    <p>FlexCover</p>
                    <p>Anti-discrimination</p>
                    <p>Disability support</p>
                    <p>Cancellation options</p>
                    <p>Report concerns</p>
                </div>

                {/* Hosting */}
                <div>
                    <h3 className="font-medium mb-2">Hosting</h3>
                    <p>Flex your space</p>
                    <p>FlexCover</p>
                    <p>Hosting resources</p>
                    <p>Community forum</p>
                    <p>Hosting responsibly</p>
                    <p>Join a free hosting class</p>
                </div>

                {/* flexworkspace */}
                <div>
                    <h3 className="font-medium mb-2">FlexWorkspace</h3>
                    <p>Newsroom</p>
                    <p>New Features</p>
                    <p>Careers</p>
                    <p>Investors</p>
                    <p>Gift cards</p>
                    <p>FlexWorkspace.org emergency stays</p>
                </div>
            </div>

            {/* divider */}
            <hr className="border-gray-300" />

            {/* copyright section */}
            <div className="container mx-auto px-4 py-4 flex justify-between items-center text-sm">
                <p>© 2024 FlexWorkspace, Inc. · Privacy · Terms</p>
                <div className="flex space-x-4">
                    <a href="#" className="text-gray-500 hover:text-gray-700">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-gray-700">
                        <i className="fab fa-youtube"></i>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-gray-700">
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;