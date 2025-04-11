"use client";
import Link from "next/link";
import { useMemo } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/store";
import { logOut } from "@/feaures/authSlice/authSlice";
import useGetBiddingCompany from "./hooks/useGetBiddingCompany";
import useGetOfferCompany from "./hooks/useGetOfferCompany";

interface ILink {
  name: string;
  url: string;
}

const Navbar = () => {
  const pathname = usePathname();
  const { userType, userId, userName } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const isBidding = userType === "bedding-company";
  const isAdmin = userType === "admin";
  const isOffer = userType === "offer-company";
  const biddingData = useGetBiddingCompany(userId, isBidding);
  const offerData = useGetOfferCompany(userId, isOffer);

  const data = isBidding ? biddingData.data : offerData.data;

  const links: ILink[] = useMemo(() => {
    if (!userType) return [];

    switch (userType) {
      case "admin":
        return [
          { name: "Create Account", url: "/create-account" },
          { name: "Users", url: "/users" },
        ];
      case "bedding-company":
        return [
          { name: "My Biddings", url: "/my-biddings" },
          { name: "Add Bidding", url: "/add-bidding" },
        ];
      case "offer-company":
        return [{ name: "My Offers", url: "/my-offers" }];
      default:
        return [];
    }
  }, [userType]);

  const logout = () => {
    dispatch(logOut());
    router.push("/login");
  };
  return (
    <div className="navbar bg-base-100 shadow-sm px-4 lg:px-20">
      <div className="flex-1">
        <Link
          href={
            isAdmin
              ? "/admin-dashboard"
              : isBidding
              ? "/bidding-dashboard"
              : isOffer
              ? "offer-dashboard"
              : "/"
          }
          className="text-xl btn-ghost text-primary font-bold"
        >
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
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
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
        {userType ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost avatar font-extrabold text-primary"
            >
              {isAdmin ? userName : data?.company[0].companyName}
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile<span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a onClick={logout}>Logout</a>
              </li>
            </ul>
          </div>
        ) : (
          <Link href="/login" className="btn font-bolder btn-primary">
            Login
          </Link>
        )}
      </div>

      <input type="checkbox" id="menu-drawer" className="drawer-toggle" />
      <div className="drawer-side z-50">
        <label htmlFor="menu-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200">
          {links.map((link, index) => (
            <li key={index}>
              <Link className="" href={link.url}>
                {link.name}
              </Link>
            </li>
          ))}
          {userType ? (
            <>
              <li>
                <a>Profile</a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a onClick={logout}>Logout</a>
              </li>
            </>
          ) : (
            <li>
              <Link href="/login">Login</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
