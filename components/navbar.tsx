"use client"
import { UserRoles } from "@/@types"
import Link from "next/link"
import { useMemo } from "react"

interface IUser {
  name: string
  role: UserRoles
}
interface ILink {
  name: string
  url: string
}

const Navbar = () => {
  const USERS: IUser[] = [
    { name: "Palestine Biddings", role: 'bedding-company' },
    { name: "Rads Offers", role: "offer-company" },
    { name: "Doe Admin", role: "admin" }
  ];

  const user: IUser | false = USERS[0];

 
  const links: ILink[] = useMemo(() => {
    if (!user) return [];

    switch (user.role) {
      case "admin":
        return [
          { name: "Create Account", url: "create-account" },
          { name: "New Biddings", url: "new-biddings" },
          { name: "Users", url: "users" }
        ];
      case 'bedding-company':
        return [
          { name: "New Offers", url: "new-offers" },
          { name: "My Biddings", url: "my-biddings" },
          { name: "Add Bidding", url: "add-bidding" }
        ];
      case "offer-company":
        return [
          { name: "My Offers", url: "my-offers" },
          { name: "New Biddings", url: "new-biddings" }
        ];
      default:
        return [];
    }
  }, [user]);

  return (
    <div className="navbar bg-base-100 shadow-sm px-20">
      <div className="flex-1">
        <Link href="/" className="text-xl btn-ghost text-primary font-bold">
          Tending <span className="text-accent">System</span>
        </Link>
      </div>
      <div className="flex gap-9 items-center">
        {links.map((link, index) => (
          <Link className="link-primary cursor-pointer" key={index} href={link.url}>
            {link.name}
          </Link>
        ))}
        <Link className="link-primary cursor-pointer" href="/">Home</Link>
        {user ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost avatar">
             {user.name}
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li><a className="justify-between">Profile<span className="badge">New</span></a></li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        ) : (
          <Link href="/login" className="btn btn-primary">Login</Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
