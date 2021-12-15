import React, { Suspense } from 'react'

const LazyComponent = (func) => {
  const Component = React.lazy(func)

  return (props) => (
    <Suspense fallback={<></>}>
      <Component {...props} />
    </Suspense>
  )
}

export default LazyComponent
