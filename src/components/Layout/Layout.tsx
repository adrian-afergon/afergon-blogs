import * as React from 'react';
import './Layout.scss';
import { Header } from "../Header";
import { Footer } from "../Footer";

export const Layout: React.FC = ({children}) => (
  <>
    <div className="container">
      <Header title={"Adrián Ferrera"}/>
      <main>
        {children}
      </main>
      <Footer />
    </div>
  </>
);
