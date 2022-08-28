import React from "react";
import Link from "next/link";
const NavbarMenu = () => {
  return (
    <div>
      <ul className="flex flex-row p-3 bg-slate-50 w-full">
        <li className="p-1 m-1">
          <Link href="/">
            <a>Anasayfa</a>
          </Link>
        </li>
        <li className="p-1 m-1"> <Link href="/blog">
            <a>Blog</a>
          </Link></li>
        <li className="p-1 m-1">İletişim</li>
      </ul>
    </div>
  );
};

export default NavbarMenu;
