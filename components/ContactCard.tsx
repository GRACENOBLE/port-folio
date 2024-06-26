import Link from "next/link";
import React from "react";

type ContactCardProps = {
  icon: any;
  title: string;
  body: string;
  link: string;
};

export default function ContactCard({
  icon,
  title,
  body,
  link,
}: ContactCardProps) {
  return (
    <Link href={link}>
      <div className=" lg:w-64 2xl:w-72 2xl:h-48 lg:h-36 rounded-lg border border-white flex flex-col justify-between hover:bg-gray-900 2xl:hover:w-96 lg:hover:w-80 transition-all ease-in-out 2xl:hover:h-72 lg:hover:h-56 w-80 py-2 md:py-0">
        <div className="flex w-full justify-end pe-4 pt-4 text-2xl">
          {icon}
        </div>
        <div className="ps-4 pb-10">
          <h3 className="text-red-600 text-2xl">{title}</h3>
          <br />
          <p className="text-white">{body}</p>
        </div>
      </div>
    </Link>
  );
}
