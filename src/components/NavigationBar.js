import React from 'react'
import { NavLink } from "react-router-dom";
export default function NavigationBar() {
    return (
        <nav className="bg-white px-4 py-4">
            <ul className="flex justify-center mx-auto space-x-4">
                <li>
                    <NavLink to="/" activeClassName="text-blue-600 font-bold" exact>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" activeClassName="text-blue-600 font-bold">
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" activeClassName="text-blue-600 font-bold">
                        Contact
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/blog" activeClassName="text-blue-600 font-bold">
                        Blog
                    </NavLink>
                </li>

            </ul>
        </nav>
    )
}
