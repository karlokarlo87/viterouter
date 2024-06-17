//import React from 'react'

import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <>
      <div>
        <p>this is dashboard</p>
        <Link className="underline" to="/products">
          Go To products
        </Link>
      </div>
    </>
  );
}
