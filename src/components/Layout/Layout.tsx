import * as React from 'react'
import './Layout.scss'
import { Header } from '../Header'
import { Footer } from '../Footer'
import { RepositoryProvider } from '../../contexts/repositories.context'

export const Layout: React.FC = ({ children }) => (
  <>
    <div className="container">
      <Header title={'Adrián Ferrera'}/>
      <main>
        <RepositoryProvider>
          {children}
        </RepositoryProvider>
      </main>
      <Footer />
    </div>
  </>
)
