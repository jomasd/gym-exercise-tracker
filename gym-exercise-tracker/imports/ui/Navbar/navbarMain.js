import React from 'react';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import { PrimeIcons } from 'primereact/api';


export const NavbarMain = () => {
  const items = [
    {
      label: 'Exercise Tracker',
      url: '/',
    },
    {
      label: 'Exercises',
      url: '/exercises',
    },
    {
      label: 'Sets',
      url: '/sets',
    },
    {
      label: 'Total Reps',
      url: '/totalreps',
    },
    {
      label: 'Max Weight',
      url: '/maxweight',
    },
    {
      label: 'Profile',
      url: '/profile',
    },
    {
      label: 'Sign In',
      url: '/signin',
    },
    {
      label: 'Sign Up',
      url: '/signup',
    },
  ];

  const end = (
    <></>
    /* 
    <div className="p-d-flex p-ai-center">
      <Button className="p-button-rounded p-button-outlined p-mr-2" icon="pi pi-shopping-cart" />
      <Button className="p-button-rounded p-button-outlined p-mr-2" icon="pi pi-bell" badge="1" />
      <Button className="p-button-rounded p-button-outlined" icon="pi pi-user" />
    </div>
    */
  );

  return (
    <div className="mb-4">
      <Menubar model={items} end={end} />
    </div>
  );
};
