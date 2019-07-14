import * as React from 'react'
import Link from 'gatsby-link'
import { ExampleComponent } from '../framerx/ExampleComponent';

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
}

export default class extends React.Component<IndexPageProps, {}> {
  constructor(props: IndexPageProps, context: any) {
    super(props, context)
  }
  public render() {
    return (
      <div>
        <p>The component rendered below is edited in Framer X and React, depening on which point of view you're coming from.</p>
        <ExampleComponent text="This is a Framer X Component being rendered"/>
      </div>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
