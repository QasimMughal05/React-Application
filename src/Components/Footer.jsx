// Footer.js
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-10">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-2xl font-bold mb-4">Stay Connected</h2>
                <p className="text-gray-400 mb-6">
                    Follow us on social media or drop us an email. We’d love to hear from you!
                </p>
                <div className="flex justify-center space-x-6 mb-4">
                    <a href="#" className="text-gray-400 hover:text-white">
                        Facebook
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white">
                        Twitter
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white">
                        LinkedIn
                    </a>
                </div>
                <p className="text-gray-500 text-sm">
                    © 2025 Blog Website. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
