import { NextPage } from 'next'
import React from 'react'

interface Props {
    docId: string,
}

const index: NextPage<Props> = ({docId}) => {
  return (
    <div>{docId}</div>
  )
}

export default index