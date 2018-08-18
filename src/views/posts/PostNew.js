import React from 'react'
import { withRouter } from 'react-router-dom'

import createPost from '../../actions/createPost'
import PostForm from './PostForm'
import {
  Page,
} from '../../styles/layout'

const PostNew = ({history}) => {
  return <Page>
    <PostForm
      post={{
        title: '',
        content: '',
      }}
      onSubmit={values => {
        return createPost(values)
          .then(p => history.push(`/${p.slug}`))
      }}
    />
  </Page>
}

export default withRouter(PostNew)
