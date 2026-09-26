"use client";
import Image from 'next/image';
import React from 'react';
import Link from 'next/link'
import PlanPage from '../plan/page'
import SavedPage from '../saved/page'


import { useEffect, useState } from "react";



const Navbar = () => {


    // const Navbar = () => {

    const [planCount, setPlanCount] = useState(0);
    const [savedCount, setSavedCount] = useState(0);

    useEffect(() => {
    const updateCount = () => {

        const planData =
            JSON.parse(localStorage.getItem("todayPlan")) || [];

        const savedData =
            JSON.parse(localStorage.getItem("savedPlan")) || [];

        setPlanCount(planData.length);
        setSavedCount(savedData.length);
    };

    updateCount();

    window.addEventListener("storage", updateCount);

    return () => {
        window.removeEventListener("storage", updateCount);
    };

}, []);

    const links = <>
        <li className='text-[#C2F800] bg-[#29381c] rounded-[90px]'> <Link href="/workouts">Workouts</Link></li>
        <li> <Link href="/myplan">MyPlan</Link></li>
    </>;
    const links2 = <>
        <li>
            <Link href="/myplan">
                Plan
                <samp className="rounded-full w-7 h-7 bg-[#C2F800] text-black p-1 text-center">
                    {planCount}
                </samp>
            </Link>
        </li>

        <li>
            <Link href="/saved">
                Save
                <samp className="rounded-full w-7 h-7 border border-gray-300 text-white p-1 text-center">
                    {savedCount}
                </samp>
            </Link>
        </li>
    </>;

    return (
        <div className="navbar bg-black shadow-sm container mx-auto rounded-3xl px-4 sm:px-6 lg:px-8">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={-1}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <div>
                    <Image
                        src="/logo.png"
                        alt="logo"
                        width={40}
                        height={40}
                    />
                </div>
                <Link href="/" className="btn btn-ghost normal-case text-xl text-white">FitLog </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">

                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {/* <a className="btn bg-black border-none"> Plan <samp className="rounded-full w-7 h-7 bg-[#C2F800] text-black p-1">0</samp></a>
                <a className="btn bg-black border-none"> Saved <samp className="rounded-full w-7 h-7 border border-gray-300 text-white p-1">0</samp></a> */}


                <ul className="menu menu-horizontal px-1">

                    {links2}
                </ul>


            </div>
        </div>






    );
};

export default Navbar;