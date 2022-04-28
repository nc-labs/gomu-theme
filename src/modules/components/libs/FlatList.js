import React from 'react'

/**
 * @param {object} props
 * @param {any[]} props.data
 * @param {(item: any) => JSX} props.renderItems
 * @param {any[]} props.dependencies
 */
const FlatList = ({ data, renderItems }) => {
  if (!Array.isArray(data) || typeof renderItems !== 'function') return <></>

  return (
    <>
      {data.map((item, index) => (
        <React.Fragment key={item?.id || index}>{renderItems(item)}</React.Fragment>
      ))}
    </>
  )
}

export default React.memo(
  FlatList,
  (
    { data: pData, renderItems: pRenderItems, dependencies: pDependencies },
    { data, renderItems, dependencies }
  ) => {
    try {
      const firstItem = data?.[0]

      // nếu data không đổi và việc render first item cho kết quả giống nhau (tức hàm renderItems không đổi) thì component không bị re-render
      //
      return (
        JSON.stringify(pData) === JSON.stringify(data) &&
        JSON.stringify(pRenderItems?.(firstItem)) === JSON.stringify(renderItems?.(firstItem)) &&
        JSON.stringify(pDependencies) === JSON.stringify(dependencies)
      )
    } catch {
      return false
    }
  }
)
