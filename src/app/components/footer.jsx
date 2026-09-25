import React from 'react';

const Footer = () => {
    return (
        <footer className="border-t border-[#1B2233] mt-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between">

                {/* Left */}
                <div className="flex items-center gap-3">
                    <div>
                        <img
                            src="/logo.png"
                            alt="logo"
                            width={25}
                            height={25}
                        />
                    </div>

                    <h2 className="text-white font-black uppercase tracking-wide">
                        FITLOG
                    </h2>
                </div>

                {/* Right */}
                <p className="text-[#7C8499] text-sm">
                    © 2026 FitLog — Workout Library. Train hard, log honest.
                </p>
            </div>
        </footer>
    );
};

export default Footer;