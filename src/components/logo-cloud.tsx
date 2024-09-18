import { clsx } from 'clsx'
import React from 'react'

export function LogoCloud({
  className,
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={clsx(
        className,
        'flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0',
      )}
    >
      <div className="flex items-center space-x-2 sm:space-x-4">
        <span className="whitespace-nowrap text-sm font-semibold sm:text-xl lg:text-2xl">
          Built for
        </span>
        <img
          alt="Stellar"
          src="./logo-cloud/stellar-black.svg"
          className="h-8 sm:h-10 lg:h-14"
        />
        <img
          alt="Soroban"
          src="./logo-cloud/soroban-black.svg"
          className="h-4 sm:h-6 lg:h-8"
        />
      </div>
      <div className="h-px w-full bg-gray-300 sm:h-8 sm:w-px" />
      <div className="flex items-center space-x-2 sm:space-x-4">
        <span className="whitespace-nowrap text-sm font-semibold sm:text-xl lg:text-2xl">
          Supported by
        </span>
        <img
          alt="Stellar Community Fund"
          src="./logo-cloud/scf-black.svg"
          className="h-6 sm:h-8 lg:h-10"
        />
      </div>
    </div>
  )
}
