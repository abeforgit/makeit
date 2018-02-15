import React from 'react'
import Header from './Header'
import PropTypes from 'prop-types'

export const PageLayout = ({ children }) => (
  <div>
    <Header/>
    <div>
      {children}
    </div>
  </div>

);

PageLayout.propTypes = {
  children: PropTypes.node
};

export default PageLayout;