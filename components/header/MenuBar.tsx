'use client';

import { useState } from "react";
import { RiMenu4Line } from "react-icons/ri";
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const dataNav = [
  { name: "الصفحة الرئيسية", link: '/' },
  { name: "تسجيل دخول", link: '/login' },
  { name: "إنشاء حساب", link: '/registration' },
];

export default function MenuBar() {
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <a onClick={() => setOpen(!open)}>
          <RiMenu4Line className="hover:text-primary cursor-pointer" size={25} />
        </a>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="dark:bg-secondary">
        {dataNav.map((item, index) => (
          <DropdownMenuItem onClick={() => setOpen(false)} key={index} dir="rtl">
            <Link href={item.link} passHref>
            {item.name} 
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
