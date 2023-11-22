import Link from "next/link"

type UnderlineLinkProps = {
  href: string
  children?: React.ReactNode
}

import React from "react"
import { IconProps } from "types/icon"

const ArrowRight: React.FC<IconProps> = ({
  size = "20",
  color = "currentColor",
  ...attributes
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...attributes}
    >
      <path
        d="M3.125 10H16.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M11.875 5L16.875 10L11.875 15"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const UnderlineLink = ({ href, children }: UnderlineLinkProps) => {
  return (
    <div className="flex items-start justify-center items-center ">
      <Link
        href={href}
        className="flex items-center text-large-regular border-b border-current gap-x-4 py-2 transition-all duration-300 group hover:pl-4 hover:pr-1"
      >
        <>
          <span style={{
               fontSize: '1.5rem',
               fontWeight: 'bold',
          }}>
          {children}</span>
          <ArrowRight
            size={20}
            className="transition-all group-hover:ml-2 duration-300"
          />
        </>
      </Link>
    </div>
  )
}

export default UnderlineLink
