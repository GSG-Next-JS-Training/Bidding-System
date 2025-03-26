"use client";
import { UserRoles } from "@/@types";
import Link from "next/link";
import { useMemo } from "react";
import { usePathname } from "next/navigation";

interface IUser {
  name: string;
  role: UserRoles;
}

interface ILink {
  name: string;
  url: string;
}

const Navbar = () => {
  const pathname = usePathname();

  const USERS: IUser[] = [
    { name: "Palestine Biddings", role: "bedding-company" },
    { name: "Rads Offers", role: "offer-company" },
    { name: "Doe Admin", role: "admin" }
  ];

  const user: IUser | false = USERS[2];

  const links: ILink[] = useMemo(() => {
    if (!user) return [];

    switch (user.role) {
      case "admin":
        return [
          { name: "Create Account", url: "/create-account" },
          { name: "New Biddings", url: "/new-biddings" },
          { name: "Users", url: "/users" }
        ];
      case "bedding-company":
        return [
          { name: "New Offers", url: "/new-offers" },
          { name: "My Biddings", url: "/my-biddings" },
          { name: "Add Bidding", url: "/add-bidding" }
        ];
      case "offer-company":
        return [
          { name: "My Offers", url: "/my-offers" },
          { name: "New Biddings", url: "/new-biddings" }
        ];
      default:
        return [];
    }
  }, [user]);

  return (
    <div className="navbar bg-base-100 shadow-sm px-4 lg:px-20">
     
   

      <div className="flex-1">
        <Link href="/" className="text-xl btn-ghost text-primary font-bold">
          Tending <span className="text-accent">System</span>
        </Link>
      </div>
   <div className="lg:hidden">
        <label htmlFor="menu-drawer" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </label>
      </div>
     
      <div className="hidden lg:flex gap-9 items-center">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.url}
            className={`relative font-extrabold text-primary cursor-pointer pb-1 ${
              pathname === link.url ? "active-link" : "hover-link"
            }`}
          >
            {link.name}
          </Link>
        ))}
        <Link
          className={`relative font-extrabold  text-primary cursor-pointer pb-1 ${
            pathname === "/" ? "active-link" : "hover-link"
          }`}
          href="/"
        >
          Home
        </Link>
        {user ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost avatar font-extrabold text-primary">
              {user.name}
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
              <li><a className="justify-between">Profile<span className="badge">New</span></a></li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        ) : (
          <Link href="/login" className="btn font-bolder btn-primary">Login</Link>
        )}
      </div>

 
      <input type="checkbox" id="menu-drawer" className="drawer-toggle" />
      <div className="drawer-side">
        <label htmlFor="menu-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200">
          <li><Link href="/">Home</Link></li>
          {links.map((link, index) => (
            <li key={index}>
              <Link className="" href={link.url}>{link.name}</Link>
            </li>
          ))}
          {user ? (
            <>
              <li><a>Profile</a></li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </>
          ) : (
            <li><Link href="/login">Login</Link></li>
          )}
        </ul>
      </div>

      
     
    </div>
  );
};

export default Navbar;
