import React, { useEffect } from 'react';
import { FaTimes, FaStream } from "react-icons/fa";
import $ from "jquery";
import Link from 'next/link'

function Navbar() {

    useEffect(() => {
        window.onscroll = function() {scrollFunction()};

        function scrollFunction() {
            if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
                document.getElementById("navbar").classList.remove("nav-full");
                document.getElementById("navbar").classList.add("nav-shrink");
                document.getElementById("brand-icon-full").classList.add("hidden");
                document.getElementById("brand-icon").classList.remove("hidden");
            } else {
                document.getElementById("navbar").classList.remove("nav-shrink");
                document.getElementById("navbar").classList.add("nav-full");
                document.getElementById("brand-icon-full").classList.remove("hidden");
                document.getElementById("brand-icon").classList.add("hidden");
            }
        }
    }, []);

    const sidebarToggle = () => {
        $("#sidebar-trigger").toggleClass("close open")
        $(".sidebar").toggleClass("close")
    };

    return(
        <>
            <nav className="flex md:justify-around bg-gray-900" id="navbar">
                <a className="nav-brand hide-on--mobile" href="#">
                    <Link href="/">
                        <img src="/images/full-logo.png" className="brand-icon-full" id="brand-icon-full"/>
                    </Link>
                    <Link href="/">
                        <img src="/images/logo.png" className="brand-icon hidden" id="brand-icon"/>
                    </Link>
                </a>
                <a className="nav-brand hide-on--desktop" href="#">
                    <Link href="/">
                        <img src="/images/logo.png" className="brand-icon-mobile"/>
                    </Link>
                </a>
                <ul className="nav-list hide-on--mobile">
                    <li className="nav-item">
                        <Link href="/career">
                            <a className="nav-link" href="#">Career Map</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/work-gallery">
                            <a className="nav-link" href="#">Work Gallery</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/resources">
                            <a className="nav-link" href="#">Resources</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/json-viewer">
                            <a className="nav-link" href="#">JSON Viewer</a>
                        </Link>
                    </li>
                </ul>
                <div className="sidebar-trigger open p-4 hide-on--desktop" id="sidebar-trigger">
                    <FaStream size={27} color="white" className="menu" onClick={sidebarToggle}/>
                    <FaTimes size={30} color="white" className="times" onClick={sidebarToggle}/>
                </div>
            </nav>
            <section className="sidebar sidebar-mobile bg-gray-900">
                <div className="mt-3">
                    <ol type="1" className="flex-col">
                        <li className="nav-item">
                            <Link href="/career">
                                <a className="nav-link" href="#">Career Map</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/work-gallery">
                                <a className="nav-link" href="#">Work Gallery</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/resources">
                                <a className="nav-link" href="#">Resources</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/json-viewer">
                                <a className="nav-link" href="#">JSON Viewer</a>
                            </Link>
                        </li>
                    </ol>
                </div>
            </section>
        </>
    );
}

export default Navbar;