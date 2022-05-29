import { GraphQLClient } from 'graphql-request'

const Service = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!)

export default Service
