import * as React from 'react'
import './LocaleTag.scss'

export const LocaleTag: React.FC<{}> = ({ children }) => (
  <span className="LocaleTag">
    {children}
  </span>
)
